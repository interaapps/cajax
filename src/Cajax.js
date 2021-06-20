import CajaxRequest from "./CajaxRequest.js"
import FetchRequestProvider from "./requestprovider/FetchRequestProvider.js"
import XMLHttpRequestProvider from "./requestprovider/XMLHttpRequestProvider.js"

class Cajax {
    constructor(baseUrl = null, defaultRequestOptions=(new CajaxRequest())){
        this.baseUrl = baseUrl
        this.promiseInterceptor = (promise)=>{
            return promise
        }

        this.defaultRequestOptions = defaultRequestOptions

        if (defaultRequestOptions.promiseInterceptor) {
            this.promiseInterceptor = defaultRequestOptions.promiseInterceptor
            defaultRequestOptions.promiseInterceptor = null
        }


        if ('XMLHttpRequest' in window)
            this.requestProvider = new XMLHttpRequestProvider()
        else
            this.requestProvider = new FetchRequestProvider()
    }

    request(method, url, request = {}){
        if (this.baseUrl)
            url = this.baseUrl+(url.startsWith("/") ? url : "/"+url )
        request = {...(
            request instanceof CajaxRequest 
                ? {...this.defaultRequestOptions,...request} 
                : {
                    ...(new CajaxRequest()), ...this.defaultRequestOptions, ...request
                })}
        
        const body = request.body

        if (request.query && typeof request.query == 'object' && Object.keys(request.query).length > 0) {
            if (!url.includes('?'))
                url += '?'
            var urlEncodedDataPairs = [];
            for(const name in request.query)
                urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(request.query[name]));
            url += urlEncodedDataPairs.join('&').replace(/%20/g, '+');
        }

        if (body instanceof FormData) {
            // Fetch and XHR-HTTP-REQUEST usualy check ít and sets the correct Content-Type for it.
            request.body = body
        } else if (typeof body == 'string') {
            request.body = data
        } else if (typeof body == 'object') {
            if (!request.contentType)
                request.contentType = "application/json"

            if (request.contentType == "application/json")
                request.body = JSON.stringify(body)
            else if (request.contentType == "application/x-www-form-urlencoded") {
                var urlEncodedDataPairs = [];
                for(const name in body)
                    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(body[name]));
                request.body = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
            }
        }

        return new Promise(async (then, err)=>{
            const promise = this.requestProvider.handle(method, url, request)
            
            promise
                   .then(this.promiseInterceptor)
                   .then(then)
                   .catch(err)
        })
    }



    get(url, query={}, request={}){
        request.query = query
        return this.request("GET", url, request)
    }

    delete(url, query={}, request={}){
        request.query = query
        return this.request("DELETE", url, request)
    }

    post(url, body=null, request={}){
        request.body = body
        return this.request("POST", url, request)
    }

    put(url, body=null, request={}){
        request.body = body
        return this.request("PUT", url, request)
    }

    connect(url, body=null, request={}){
        request.body = body
        return this.request("CONNECT", url, request)
    }

    head(url, body=null, request={}){
        request.body = body
        return this.request("HEAD", url, request)
    }

    patch(url, body=null, request={}){
        request.body = body
        return this.request("PATCH", url, request)
    }

    options(url, body=null, request={}){
        request.body = body
        return this.request("OPTIONS", url, request)
    }
    
    trace(url, body=null, request={}){
        request.body = body
        return this.request("TRACE", url, request)
    }

    
    setHeader(name, value){
        this.defaultRequestOptions.headers[name] = value
        return this
    }

    setContentType(value){
        this.defaultRequestOptions.contentType = value
        return this
    }

    bearer(value){
        this.defaultRequestOptions.headers["Authorization"] = "Bearer "+value
        return this
    }
}

export default Cajax