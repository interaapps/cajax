class cajaxRequest {
    constructor(url,method, data=null, usinginput=false) {
        if (data != null) {        
            var urlEncodedData = "";
            var urlEncodedDataPairs = [];
            var name;
            for(name in data) {
                urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            this.data = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
        } else this.data = null;
        this.method = method;
        this.contenttype = (usinginput) ? "application/json; charset=utf-8" : "application/x-www-form-urlencoded";
        
        var xhr = new XMLHttpRequest();
        xhr.open(method, url+((this.method=="GET")? "?"+this.data : "" ));
        xhr.setRequestHeader('Content-type', this.contenttype);
        this.request = xhr;
        if (usinginput && data != null) this.data = JSON.stringify(data);
    }
    
    then (func) {
        this.then = func;
        return this;
    }
    
    catch (func) {
        this.catch = func;
        return this;
    }
    
    custom (func) {
        func(this.request);
        return this;
    }
    
    send () {
    
        (this.request).onload = ()=> {
            
            if ((this.request).readyState == 4 && ((this.request).status == "200" || (this.request).status == "201")) {
		        this.then((this.request).responseText);
	        } else {
		        this.catch((this.request).responseText);
	        }
        };

        (this.request).send(this.data);
        return this;
    }
}

class cajax {
    
    static post(url, data={}, usinginput=false) {
        return new cajaxRequest(url, "POST", data, usinginput);
    }
    
    static get(url, data={}, usinginput=false) {
        return new cajaxRequest(url, "GET", data, usinginput);
    }
    
    static put(url, data={}, usinginput=false) {
        return new cajaxRequest(url, "POST", data, usinginput);
    }
    
    static delete(url) {
        return new cajaxRequest(url, "DELETE", null);
    }
    
    static trace(url) {
        return new cajaxRequest(url, "TRACE", null);
    }
    
    static connect(url) {
        return new cajaxRequest(url, "CONNECT", null);
    }
    
    static options(url) {
        return new cajaxRequest(url, "OPTIONS", null);
    }
    
    static ajax (json) {
        return new cajaxRequest(
        ((json.url != null) ? json.url : false ), 
        ((json.method != null) ? json.method : false ), 
        ((json.data != null) ? json.data : false ),
        ((json.input != null) ? json.input : false ));
    }
}

