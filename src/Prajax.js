import PrajaxPromise from "./PrajaxPromise.js";

export default class Prajax {

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