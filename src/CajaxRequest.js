class CajaxRequest {

    constructor(url,method, data=null, options={}) {
        // INIT
        this.onResponseFunction = ()=>{};
        this.catchFunction = ()=>{};
        this.thenFunction = ()=>{};
        this.method = method;
        this.url = url;
        this.fetch = null;
        this.options = options;

        if (data != null) {
            if (data instanceof FormData) {
                this.data = data;
            } else {
                var urlEncodedData = "";
                var urlEncodedDataPairs = [];
                var name;
                for(name in data) {
                    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
                }
                this.data = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
            }
        } else this.data = null;

        this.method = method;
        
        if (!(data instanceof FormData))
        this.contenttype = (options.usinginput || options.json) ? "application/json; charset=utf-8" : "application/x-www-form-urlencoded";

        if (!CajaxRequest.useFetch) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url+(((this.method=="GET" || this.method=="DELETE") && Object.keys(data).length !== 0)? "?"+this.data : "" ));
            this.xhr = xhr;
        }

        if ((options.usinginput || options.json) && data != null) this.data = JSON.stringify(data);
    }

    response (func) {
        this.onResponseFunction  =  ()=>{
            func(this.xhr);
        }
        return this;
    }

    then (func) {

        this.thenFunction = func;

        return this;
    }

    progress (func) {
        this.xhr.upload.onprogress = (e) => {
            func(this.xhr, (e.loaded / e.total) * 100);
        };

        return this;
    }

    catch (func) {
        this.catchFunction = func;

        return this;
    }

    custom (func) {
        func(this.xhr);
        return this;
    }

    contentType(type){
        this.contenttype = type;
        return this;
    }

    send () {
        let responseTemplate = {
            resType: "none",
            res: null, // ORIGINAL RESPONSE (fetch or xhrhttprequest)
            response: null,
            responseText: null,
            ok: false,
            status: null,
            statusText: "",
            url: this.url,
            res: null,
            json(){
                return JSON.parse(this.responseText)
            }
        }
        if (CajaxRequest.useFetch) {
            let fetchData = {...{
                method: this.method,
                headers: {
                    'Content-Type': this.contenttype
                }
            }, ...this.options};
            if (!(this.method == "GET" || this.method == "HEAD"))
                fetchData.body = this.data;
            this.fetch = fetch(this.url, fetchData)
                .then(res=>{
                    res.text()
                        .then((body)=>{
                            this.thenFunction({...responseTemplate, ...{responseText: body, response: body}, ...{
                                resType: "fetch",
                                res: res,
                                status: res.status,
                                statusText: res.statusText,
                                url: res.url,
                                ok: res.ok
                            }})
                        })
                        .catch((body)=>this.thenFunction({...responseTemplate, ...{responseText: body, response: body}, ...{
                            resType: "fetch",
                            res: res,
                            status: res.status,
                            statusText: res.statusText,
                            url: res.url,
                            ok: res.ok
                        }}))
                }).catch(res=>{
                    res.text()
                        .then((body)=>{
                            this.catchFunction({...responseTemplate, ...{responseText: body, response: body}, ...res})
                        })
                        .catch((body)=>this.catchFunction({...responseTemplate, ...res}))
                })
        } else {


            if (this.options != null) {
                for (var options_key__cajax in this.options) {
                    this.xhr[options_key__cajax] = this.options[options_key__cajax];
                }
            }

            if (this.options.header != null) for (var requestheader_obj__cajax in this.options.header) {
                this.xhr.setRequestHeader(requestheader_obj__cajax, this.options.header[requestheader_obj__cajax]);
            }

            this.xhr.setRequestHeader('Content-type', this.contenttype);
            (this.xhr).send(this.data);

            let catchFunc = ()=>{
                this.catchFunction({...responseTemplate, ...{
                    resType: "xhr",
                    res: this.xhr,
                    status: this.xhr.status,
                    statusText: this.xhr.statusText,
                    url: this.xhr.responseURL,
                    ok: false,
                    responseText: this.xhr.responseText,
                    response: this.xhr.response
                }})
            }

            this.xhr.onerror = ()=>{ catchFunc() };
            this.xhr.onblocked =  ()=>{ catchFunc() };
            
            this.xhr.onload = ()=>{
                this.thenFunction({...responseTemplate, ...{
                    resType: "xhr",
                    res: this.xhr,
                    status: this.xhr.status,
                    statusText: this.xhr.statusText,
                    url: this.xhr.responseURL,
                    ok: true,
                    responseText: this.xhr.responseText,
                    response: this.xhr.response
                }})
            };
        }

        return this;
    }
}

CajaxRequest.useFetch = false;

if (typeof XMLHttpRequest === 'undefined')
    CajaxRequest.useFetch = true;

export default CajaxRequest;