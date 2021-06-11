import CajaxResponse from "../CajaxResponse.js";
import RequestProvider from "./RequestProvder.js";

class XMLHttpRequestResponse extends CajaxResponse {
    constructor(response){
        super()
        this.xhr = response
        
        this.status     = response.status
        this.statusText = response.statusText
        this.url        = response.responseURL
        this.ok         = response.ok
        
        response.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((line) => {
            const parts = line.split(': ');
            const header = parts.shift();
            const value = parts.join(': ');
            this.headers[header] = value;
        });

        this.providerType = RequestProvider.Providers.XMLHTTPREQUEST
    }

    async text(){
        return this.xhr.responseText
    }

    async res(){
        return this.xhr.response
    }

    header(name){
        return this.xhr.getResponseHeader(name)
    }
}

class XMLHttpRequestProvider extends RequestProvider {
    handle(method, url, data) {
        return new Promise((then, err)=>{
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.setRequestHeader('content-type', data.contentType);
            
            for (const name in data.headers)
                xhr.setRequestHeader(name, data.headers[name]);
            
            xhr.send(data.body)
            
            xhr.onload = () => {
                then(new XMLHttpRequestResponse(xhr))
            }

            xhr.onerror   = err
            xhr.onblocked = err
        })
    }
}

export default XMLHttpRequestProvider