import CajaxRequest from "./CajaxRequest.js"
import FetchRequestProvider from "./requestprovider/FetchRequestProvider.js"
import XMLHttpRequestProvider from "./requestprovider/XMLHttpRequestProvider.js"

export default class Cajax {
    /**
     * @param {string} baseUrl
     * @param {CajaxRequest} defaultRequestOptions
     */
    constructor(baseUrl = null, defaultRequestOptions = (new CajaxRequest())) {
        this.baseUrl = baseUrl
        /**
         * @param {function(Promise<CajaxResponse>)} promise
         * @return {*}
         */
        this.promiseInterceptor = (promise) => {
            return promise
        }

        this.defaultRequestOptions = defaultRequestOptions

        if (defaultRequestOptions.promiseInterceptor) {
            this.promiseInterceptor = defaultRequestOptions.promiseInterceptor
            defaultRequestOptions.promiseInterceptor = null
        }
    }

    /**
     * @return {Promise<void>}
     */
    async createRequestProvider() {
        const denoOrBun = typeof Bun !== 'undefined' || typeof Deno !== 'undefined'

        if (typeof window !== 'undefined' && 'XMLHttpRequest' in window)
            this.requestProvider = new XMLHttpRequestProvider()
        else if (typeof window !== 'undefined' && 'fetch' in window || denoOrBun)
            this.requestProvider = new FetchRequestProvider(denoOrBun ? fetch : null)
        else if (typeof process !== 'undefined')
            this.requestProvider = new (await import("../src/requestprovider/NodeJSRequestProvider.js")).default
    }

    /**
     * @param {(string | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'CONNECT' | 'DELETE' | 'TRACE' | 'HEAD' | 'OPTIONS')} method
     * @param {string} url
     * @param {*} request
     * @returns {Promise<CajaxResponse|*>}
     */
    async request(method, url, request = {}) {
        // Sets a request provider if none is given
        if (!this.requestProvider)
            await this.createRequestProvider()

        if (this.baseUrl)
            url = this.baseUrl + (url.startsWith("/") ? url : "/" + url)
        request = {
            ...(
                request instanceof CajaxRequest
                    ? {...this.defaultRequestOptions, ...request}
                    : {...(new CajaxRequest()), ...this.defaultRequestOptions, ...request}
            )
        }

        const body = request.body

        if (request.query && typeof request.query == 'object' && Object.keys(request.query).length > 0) {
            if (!url.includes('?'))
                url += '?'
            const urlEncodedDataPairs = [];
            for (const name in request.query)
                urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(request.query[name])}`);
            url += urlEncodedDataPairs.join('&').replace(/%20/g, '+');
        }

        if (typeof FormData !== 'undefined' && body instanceof FormData || (this.requestProvider.node && body instanceof (await import('form-data')).default)) {
            // Fetch and XHR-HTTP-REQUEST usually check ít and sets the correct Content-Type for it.
            request.body = body
        } else if (typeof body == 'string') {
            request.body = data
        } else if (typeof body == 'object') {
            if (!request.contentType)
                request.contentType = "application/json"

            if (request.contentType === "application/json") {
                request.body = JSON.stringify(body)
            } else if (request.contentType === "application/x-www-form-urlencoded") {
                const urlEncodedDataPairs = [];
                for (const name in body)
                    urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(body[name])}`);
                request.body = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
            }
        }

        return await new Promise(async (then, err) => {
            const promise = this.requestProvider.handle(method, url, request)

            promise
                .then(this.promiseInterceptor)
                .then(then)
                .catch(err)
        })
    }


    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    get(url, query = {}, request = {}) {
        request.query = query
        return this.request("GET", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    delete(url, query = {}, request = {}) {
        request.query = query
        return this.request("DELETE", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    post(url, body = null, request = {}) {
        request.body = body
        return this.request("POST", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    put(url, body = null, request = {}) {
        request.body = body
        return this.request("PUT", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    connect(url, body = null, request = {}) {
        request.body = body
        return this.request("CONNECT", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    head(url, body = null, request = {}) {
        request.body = body
        return this.request("HEAD", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    patch(url, body = null, request = {}) {
        request.body = body
        return this.request("PATCH", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    options(url, body = null, request = {}) {
        request.body = body
        return this.request("OPTIONS", url, request)
    }

    /**
     * @returns {Promise<CajaxResponse|*>}
     */
    trace(url, body = null, request = {}) {
        request.body = body
        return this.request("TRACE", url, request)
    }

    /**
     * @param {string} name
     * @param {*} value
     * @returns {Cajax}
     */
    setHeader(name, value) {
        this.defaultRequestOptions.headers[name] = value
        return this
    }

    /**
     * @param {string} value
     * @returns {Cajax}
     */
    setContentType(value) {
        this.defaultRequestOptions.contentType = value
        return this
    }

    /**
     * @param {string} value
     * @returns {Cajax}
     */
    bearer(value) {
        this.defaultRequestOptions.headers["Authorization"] = `Bearer ${value}`
        return this
    }
}