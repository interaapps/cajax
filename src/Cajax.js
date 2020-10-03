import CajaxRequest from "./CajaxRequest.js";

class Cajax {

    static post(url, data={}, options={}) {
        return new CajaxRequest(url, "POST", data, options);
    }

    static get(url, data={}, options={}) {
        return new CajaxRequest(url, "GET", data, options);
    }

    static put(url, data={}, options={}) {
        return new CajaxRequest(url, "POST", data, options);
    }

    static delete(url, data={}, options={}) {
        return new CajaxRequest(url, "DELETE", data, options);
    }

    static trace(url, data={}, options={}) {
        return new CajaxRequest(url, "TRACE", data, options);
    }

    static connect(url, data={}, options={}) {
        return new CajaxRequest(url, "CONNECT", data, options);
    }

    static options(url, data={}, options={}) {
        return new CajaxRequest(url, "OPTIONS", data, options);
    }

    static update(url, data={}, options={}) {
        return new CajaxRequest(url, "UPDATE", data, options);
    }

    static ajax (json) {
        return new CajaxRequest(
            ((json.url != null) ? json.url : false ),
            ((json.method != null) ? json.method : false ),
            ((json.options != null) ? json.options : false ),
            ((json.data != null) ? json.data : false ));
    }
}

export default Cajax;