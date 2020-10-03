import Prajax from "./Prajax.js";

class PrajaxClient {
    constructor(options){
        this.baseUrl = options.baseUrl || "";
        this.options = options.options || {};
        this.data = options.data || {};
    }

    get(url, data={}, options={}){
        return Prajax.get(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    post(url, data={}, options={}){
        return Prajax.post(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    put(url, data={}, options={}){
        return Prajax.put(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    delete(url, data={}, options={}){
        return Prajax.delete(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    trace(url, data={}, options={}){
        return Prajax.trace(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    connect(url, data={}, options={}){
        return Prajax.connect(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    options(url, data={}, options={}){
        return Prajax.options(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    update(url, data={}, options={}){
        return Prajax.update(this.baseUrl+url, {...this.data, ...data}, {...this.options, ...options});
    }

    ajax(json){
        return Prajax.ajax(json);
    }

    
}

export default PrajaxClient;