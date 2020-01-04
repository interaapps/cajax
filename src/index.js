class NeoCajaxRequest {
	constructor(url, method, data = null, options = {}) {
		// INIT
		this.onResponseFunction = () => {};
		this.catchFunction = () => {};
		this.thenFunction = () => {};

		if (data != null) {
			var urlEncodedData = '';
			var urlEncodedDataPairs = [];
			var name;
			for (name in data) {
				urlEncodedDataPairs.push(
					encodeURIComponent(name) +
						'=' +
						encodeURIComponent(data[name])
				);
			}
			this.data = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
		} else this.data = null;
		this.method = method;
		this.contenttype = options.usinginput
			? 'application/json; charset=utf-8'
			: 'application/x-www-form-urlencoded';

		var xhr = new XMLHttpRequest();

		if (options != null)
			for (var options_key__NeoCajax in options) {
				xhr[options_key__NeoCajax] = options[options_key__NeoCajax];
			}

		xhr.open(method, url + (this.method == 'GET' ? '?' + this.data : ''));
		if (options.header != null)
			for (var requestheader_obj__NeoCajax in options.header) {
				xhr.setRequestHeader(
					requestheader_obj__NeoCajax,
					options.header[requestheader_obj__NeoCajax]
				);
			}

		xhr.setRequestHeader('Content-type', this.contenttype);
		this.xhr = xhr;
		if (options.usinginput && data != null)
			this.data = JSON.stringify(data);
	}

	response(func) {
		this.onResponseFunction = () => {
			func(this.xhr);
		};
		return this;
	}

	then(func) {
		this.xhr.onload = () => {
			func(this.xhr);
		};

		return this;
	}

	catch(func) {
		this.xhr.onerror = () => {
			func(this.xhr);
		};
		this.xhr.onblocked = () => {
			func(this.xhr);
		};

		return this;
	}

	custom(func) {
		func(this.xhr);
		return this;
	}

	send() {
		this.xhr.send(this.data);
		return this;
	}
}

function NeoPrajaxPromise(url, method, data = null, options = {}) {
	return new Promise((done, error) => {
		var request = new NeoCajaxRequest(url, method, data, options);
		request.then(resp => {
			done(resp);
		});

		request.catch(resp => {
			error(resp);
		});

		if (typeof options.NeoCajax != 'undefined') {
			if (typeof options.NeoCajax.custom != 'undefined')
				request.NeoCajax.custom(options.NeoCajax.custom);

			if (typeof options.NeoCajax.response != 'undefined')
				request.NeoCajax.response(options.NeoCajax.response);
		}

		request.send();
	});
}

class NeoCajax {
	static post(url, data = {}, options = {}, usinginput = false) {
		return new NeoCajaxRequest(url, 'POST', data, options, usinginput);
	}

	static get(url, data = {}, options = {}, usinginput = false) {
		return new NeoCajaxRequest(url, 'GET', data, options, usinginput);
	}

	static put(url, data = {}, options = {}, usinginput = false) {
		return new NeoCajaxRequest(url, 'POST', data, options, usinginput);
	}

	static delete(url, data = {}, options = {}, usinginput = false) {
		return new NeoCajaxRequest(url, 'DELETE', data, options, usinginput);
	}

	static trace(url, data = {}, options = {}, usinginput = false) {
		return new NeoCajaxRequest(url, 'TRACE', data, options, usinginput);
	}

	static connect(url, data = {}, options = {}, usinginput = false) {
		return new NeoCajaxRequest(url, 'CONNECT', data, options, usinginput);
	}

	static options(url, data = {}, options = {}, usinginput = false) {
		return new NeoCajaxRequest(url, 'OPTIONS', data, options, usinginput);
	}

	static ajax(json) {
		return new NeoCajaxRequest(
			json.url != null ? json.url : false,
			json.method != null ? json.method : false,
			json.options != null ? json.options : false,
			json.data != null ? json.data : false,
			json.input != null ? json.input : false
		);
	}
}

class NeoPrajax {
	static post(url, data = {}, options = {}, usinginput = false) {
		return NeoPrajaxPromise(url, 'POST', data, options, usinginput);
	}

	static get(url, data = {}, options = {}, usinginput = false) {
		return NeoPrajaxPromise(url, 'GET', data, options, usinginput);
	}

	static put(url, data = {}, options = {}, usinginput = false) {
		return NeoPrajaxPromise(url, 'POST', data, options, usinginput);
	}

	static delete(url, data = {}, options = {}, usinginput = false) {
		return NeoPrajaxPromise(url, 'DELETE', data, options, usinginput);
	}

	static trace(url, data = {}, options = {}, usinginput = false) {
		return NeoPrajaxPromise(url, 'TRACE', data, options, usinginput);
	}

	static connect(url, data = {}, options = {}, usinginput = false) {
		return NeoPrajaxPromise(url, 'CONNECT', data, options, usinginput);
	}

	static options(url, data = {}, options = {}, usinginput = false) {
		return NeoPrajaxPromise(url, 'OPTIONS', data, options, usinginput);
	}

	static ajax(json) {
		return NeoPrajaxPromise(
			json.url != null ? json.url : false,
			json.method != null ? json.method : false,
			json.options != null ? json.options : false,
			json.data != null ? json.data : false,
			json.input != null ? json.input : false
		);
	}
}

export { NeoCajax, NeoPrajax };

export default NeoCajax;
