class CajaxRequest {

    constructor(url,method, data=null, options={}) {
        // INIT
        this.onResponseFunction = ()=>{};
        this.catchFunction = ()=>{};
        this.thenFunction = ()=>{};

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

        var xhr = new XMLHttpRequest();

        if (options != null)
            for (var options_key__cajax in options) {
                xhr[options_key__cajax] = options[options_key__cajax];
            }


        xhr.open(method, url+(((this.method=="GET" || this.method=="DELETE") && Object.keys(data).length !== 0)? "?"+this.data : "" ));
        if (options.header != null) for (var requestheader_obj__cajax in options.header) {
            xhr.setRequestHeader(requestheader_obj__cajax, options.header[requestheader_obj__cajax]);
        }

        this.xhr = xhr;
        if ((options.usinginput || options.json) && data != null) this.data = JSON.stringify(data);
    }

    response (func) {
        this.onResponseFunction  =  ()=>{
            func(this.xhr);
        }
        return this;
    }

    then (func) {
        this.xhr.onload = ()=>{
            func(this.xhr);
        };

        return this;
    }

    progress (func) {
        this.xhr.upload.onprogress = (e) => {
            func(this.xhr, (e.loaded / e.total) * 100);
        };

        return this;
    }

    catch (func) {
        this.xhr.onerror = ()=>{
            func(this.xhr);
        };
        this.xhr.onblocked =  ()=>{
            func(this.xhr);
        };

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
        this.xhr.setRequestHeader('Content-type', this.contenttype);

        (this.xhr).send(this.data);
        return this;
    }
}

export default CajaxRequest;