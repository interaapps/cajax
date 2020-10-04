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
        if (CajaxRequest.useFetch) {
            let fetchData = {...{
                method: this.method,
                headers: {
                    'content-type': this.contenttype
                }
            }, ...this.options};
            if (this.method == "GET" || this.method == "HEAD")
                fetchData.body = this.body;
            this.fetch = fetch(this.url, fetchData)
                .then(res=>{
                    this.thenFunction(res)
                }).catch(res=>{
                    this.catchFunction(res)
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
            this.xhr.onerror = ()=>{
                this.catchFunction(this.xhr);
            };
            this.xhr.onblocked =  ()=>{
                this.catchFunction(this.xhr);
            };
            this.xhr.onload = ()=>{
                this.thenFunction(this.xhr);
            };
        }

        return this;
    }
}

CajaxRequest.useFetch = false;

if (typeof XMLHttpRequest === 'undefined')
    CajaxRequest.useFetch = true;

export default CajaxRequest;