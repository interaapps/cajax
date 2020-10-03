import CajaxRequest from "./CajaxRequest.js";

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

export default Cajax;