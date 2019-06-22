"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CajaxRequest =
/*#__PURE__*/
function () {
  function CajaxRequest(url, method) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var usinginput = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, CajaxRequest);

    // INIT
    this.onResponseFunction = function () {};

    this.catchFunction = function () {};

    this.thenFunction = function () {};

    if (data != null) {
      var urlEncodedData = "";
      var urlEncodedDataPairs = [];
      var name;

      for (name in data) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
      }

      this.data = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
    } else this.data = null;

    this.method = method;
    this.contenttype = usinginput ? "application/json; charset=utf-8" : "application/x-www-form-urlencoded";
    var xhr = new XMLHttpRequest();
    xhr.open(method, url + (this.method == "GET" ? "?" + this.data : ""));
    xhr.setRequestHeader('Content-type', this.contenttype);
    this.request = xhr;
    if (usinginput && data != null) this.data = JSON.stringify(data);
  }

  _createClass(CajaxRequest, [{
    key: "response",
    value: function response(func) {
      this.onResponseFunction = func;
      return this;
    }
  }, {
    key: "then",
    value: function then(func) {
      this.thenFunction = func;
      return this;
    }
  }, {
    key: "catch",
    value: function _catch(func) {
      this.catchFunction = func;
      return this;
    }
  }, {
    key: "custom",
    value: function custom(func) {
      func(this.request);
      return this;
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;

      this.request.onload = function () {
        _this.onResponseFunction(_this.request);

        if (_this.request.readyState == 4 && (_this.request.status == "200" || _this.request.status == "201")) {
          _this.thenFunction(_this.request);
        } else {
          _this.catchFunction(_this.request);
        }
      };

      this.request.send(this.data);
      return this;
    }
  }]);

  return CajaxRequest;
}();

var Cajax =
/*#__PURE__*/
function () {
  function Cajax() {
    _classCallCheck(this, Cajax);
  }

  _createClass(Cajax, null, [{
    key: "post",
    value: function post(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var usinginput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return new CajaxRequest(url, "POST", data, usinginput);
    }
  }, {
    key: "get",
    value: function get(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var usinginput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return new CajaxRequest(url, "GET", data, usinginput);
    }
  }, {
    key: "put",
    value: function put(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var usinginput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return new CajaxRequest(url, "POST", data, usinginput);
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return new CajaxRequest(url, "DELETE", null);
    }
  }, {
    key: "trace",
    value: function trace(url) {
      return new CajaxRequest(url, "TRACE", null);
    }
  }, {
    key: "connect",
    value: function connect(url) {
      return new CajaxRequest(url, "CONNECT", null);
    }
  }, {
    key: "options",
    value: function options(url) {
      return new CajaxRequest(url, "OPTIONS", null);
    }
  }, {
    key: "ajax",
    value: function ajax(json) {
      return new CajaxRequest(json.url != null ? json.url : false, json.method != null ? json.method : false, json.data != null ? json.data : false, json.input != null ? json.input : false);
    }
  }]);

  return Cajax;
}();
