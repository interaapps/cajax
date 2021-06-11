class RequestProvider {
    async handle(method, url, data) {}
}

RequestProvider.Providers = {
    XMLHTTPREQUEST: 'XMLHTTPREQUEST',
    FETCH: "FETCH"
}

export default RequestProvider