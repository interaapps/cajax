import CajaxResponse from "../CajaxResponse.js";
import RequestProvider from "./RequestProvder.js";

class FetchRequestResponse extends CajaxResponse {
    constructor(response){
        super()
        this.fetchResponse = response
        
        this.status     = response.status
        this.statusText = response.statusText
        this.url        = response.url
        this.ok         = response.ok
        
        response.headers.forEach((v, n)=>{
            this.headers[n] = v
        })

        this.providerType = RequestProvider.Providers.FETCH
    }

    async text(){
        return this.fetchResponse.text()
    }

    async json(){
        return this.fetchResponse.json()
    }

    async res(){
        return this.fetchResponse.body()
    }

    header(name){
        return this.fetchResponse.headers.get(name)
    }
}

class FetchRequestProvider extends RequestProvider {
    constructor(fetchFunction = null){
        super()

        this.fetchFunction = fetchFunction
    }

    handle(method, url, data) {
        return new Promise((then, err)=>{
            let headers = data.headers
            if (data.contentType) {
                headers = {'content-type':(data.contentType), ...data.headers};
            }

            const promise = (this.fetchFunction ? this.fetchFunction : window.fetch)(url, {
                method,
                headers: headers,
                ...(data.body && (method != 'GET' && method != 'HEAD') ? {body: data.body} : {})
            }).then(res=>then(new FetchRequestResponse(res)))
                .catch(err)

            if (data.timeout) {
                Promise.race([
                    promise,
                    // Timeout Promise
                    new Promise((_,err)=>{
                        setTimeout(()=>{
                            err(new Error("timeout"))
                        }, data.timeout)
                    })
                ])
            }
            
        })
    }
}

export default FetchRequestProvider