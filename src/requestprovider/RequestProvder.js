class RequestProvider {
    /**
     * @param {string} method
     * @param {string} url
     * @param {*} data
     * @return {Promise<CajaxResponse>}
     */
    async handle(method, url, data) {
    }
}

RequestProvider.Providers = {
    XMLHTTPREQUEST: 'XMLHTTPREQUEST',
    FETCH: "FETCH",
    NODE: "NODE"
}

export default RequestProvider