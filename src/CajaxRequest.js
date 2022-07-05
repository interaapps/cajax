class CajaxRequest {
    constructor() {
        this.headers = {}
        this.query = {}
        this.body = null
        this.timeout = null
    }

    setHeader(name, value) {
        this.headers[name] = value
        return this
    }

    getHeader(name) {
        return this.headers[name]
    }

    setHeaders(headers) {
        this.headers = headers
        return this
    }

    addHeaders(headers) {
        this.headers = {...(this.headers), ...headers}
        return this
    }

    setQueryParam(name, value) {
        this.query[name] = value
        return this
    }

    getQueryParam(name) {
        return this.query[name]
    }

    setBody(body) {
        this.body = body
        return this
    }

    setTimeout(milliSecounds) {
        this.timeout = milliSecounds
        return this
    }
}

export default CajaxRequest