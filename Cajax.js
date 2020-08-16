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
        this.contenttype = (options.usinginput) ? "application/json; charset=utf-8" : "application/x-www-form-urlencoded";

        var xhr = new XMLHttpRequest();

        if (options != null)
            for (var options_key__cajax in options) {
                xhr[options_key__cajax] = options[options_key__cajax];
            }


        xhr.open(method, url+((this.method=="GET")? "?"+this.data : "" ));
        if (options.header != null) for (var requestheader_obj__cajax in options.header) {
            xhr.setRequestHeader(requestheader_obj__cajax, options.header[requestheader_obj__cajax]);
        }

        xhr.setRequestHeader('Content-type', this.contenttype);
        this.xhr = xhr;
        if (options.usinginput && data != null) this.data = JSON.stringify(data);
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

    send () {
        (this.xhr).send(this.data);
        return this;
    }
}

function PrajaxPromise(url,method, data=null, options={}) {
    return new Promise( (done, error)=>{

            var request = new CajaxRequest(url,method, data, options);
            request.then((resp)=>{
                done(resp);
            });

            request.catch((resp)=>{
                error(resp);
            });

            if (typeof options.cajax != 'undefined') {
                if (typeof options.cajax.custom != 'undefined')
                    request.cajax.custom(options.cajax.custom);

                if (typeof options.cajax.response != 'undefined')
                    request.cajax.response(options.cajax.response);
            }

            request.send();

        }
    )
}

class Cajax {

    static post(url, data={}, options={}, usinginput=false) {
        return new CajaxRequest(url, "POST", data, options, usinginput);
    }

    static get(url, data={}, options={}, usinginput=false) {
        return new CajaxRequest(url, "GET", data, options, usinginput);
    }

    static put(url, data={}, options={}, usinginput=false) {
        return new CajaxRequest(url, "POST", data, options, usinginput);
    }

    static delete(url, data={}, options={}, usinginput=false) {
        return new CajaxRequest(url, "DELETE", data, options, usinginput);
    }

    static trace(url, data={}, options={}, usinginput=false) {
        return new CajaxRequest(url, "TRACE", data, options, usinginput);
    }

    static connect(url, data={}, options={}, usinginput=false) {
        return new CajaxRequest(url, "CONNECT", data, options, usinginput);
    }

    static options(url, data={}, options={}, usinginput=false) {
        return new CajaxRequest(url, "OPTIONS", data, options, usinginput);
    }

    static ajax (json) {
        return new CajaxRequest(
            ((json.url != null) ? json.url : false ),
            ((json.method != null) ? json.method : false ),
            ((json.options != null) ? json.options : false ),
            ((json.data != null) ? json.data : false ),
            ((json.input != null) ? json.input : false ));
    }
}


class Prajax {

    static post(url, data={}, options={}, usinginput=false) {
        return PrajaxPromise(url, "POST", data, options, usinginput);
    }

    static get(url, data={}, options={}, usinginput=false) {
        return PrajaxPromise(url, "GET", data, options, usinginput);
    }

    static put(url, data={}, options={}, usinginput=false) {
        return PrajaxPromise(url, "POST", data, options, usinginput);
    }

    static delete(url, data={}, options={}, usinginput=false) {
        return PrajaxPromise(url, "DELETE", data, options, usinginput);
    }

    static trace(url, data={}, options={}, usinginput=false) {
        return PrajaxPromise(url, "TRACE", data, options, usinginput);
    }

    static connect(url, data={}, options={}, usinginput=false) {
        return PrajaxPromise(url, "CONNECT", data, options, usinginput);
    }

    static options(url, data={}, options={}, usinginput=false) {
        return PrajaxPromise(url, "OPTIONS", data, options, usinginput);
    }

    static ajax (json) {
        return PrajaxPromise(
            ((json.url != null) ? json.url : false ),
            ((json.method != null) ? json.method : false ),
            ((json.options != null) ? json.options : false ),
            ((json.data != null) ? json.data : false ),
            ((json.input != null) ? json.input : false ));
    }
}




if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = {Cajax: Cajax, Prajax: Prajax};
}
