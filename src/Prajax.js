import PrajaxPromise from "./PrajaxPromise.js";

export default class Prajax {

    static post(url, data={}, options={}) {
        return PrajaxPromise(url, "POST", data, options);
    }

    static get(url, data={}, options={}) {
        return PrajaxPromise(url, "GET", data, options);
    }

    static put(url, data={}, options={}) {
        return PrajaxPromise(url, "POST", data, options);
    }

    static delete(url, data={}, options={}) {
        return PrajaxPromise(url, "DELETE", data, options);
    }

    static trace(url, data={}, options={}) {
        return PrajaxPromise(url, "TRACE", data, options);
    }

    static connect(url, data={}, options={}) {
        return PrajaxPromise(url, "CONNECT", data, options);
    }

    static options(url, data={}, options={}) {
        return PrajaxPromise(url, "OPTIONS", data, options);
    }

    static update(url, data={}, options={}) {
        return PrajaxPromise(url, "UPDATE", data, options);
    }

    static ajax (json) {
        return PrajaxPromise(
            ((json.url != null) ? json.url : false ),
            ((json.method != null) ? json.method : false ),
            ((json.options != null) ? json.options : false ),
            ((json.data != null) ? json.data : false ));
    }
}