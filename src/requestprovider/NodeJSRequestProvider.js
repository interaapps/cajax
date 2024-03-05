import CajaxResponse from "../CajaxResponse.js";
import RequestProvider from "./RequestProvder.js";

import http from 'http'
import https from 'https'

import FormData from "form-data";

class NodeJSRequestResponse extends CajaxResponse {
    constructor(response, resBody) {
        super()
        this.body = resBody

        this.status = response.statusCode
        this.statusText = response.statusMessage
        this.url = response.url
        this.ok = response.ok

        this.headers = response.headers

        this.providerType = RequestProvider.Providers.NODE
    }

    async text() {
        return this.body
    }

    async res() {
        return this.body
    }

    header(name) {
        return this.headers[name]
    }
}

class NodeJSRequestProvider extends RequestProvider {
    name = 'NODE_PROVIDER'

    constructor() {
        super()
        this.node = true
    }

    handle(method, url, data) {
        return new Promise((then, err) => {
            let headers = data.headers
            if (data.contentType) {
                headers = {'content-type': data.contentType, ...data.headers};
            }


            const req = (url.startsWith('https://') ? https : http).request(url, {
                method,
                headers: data.headers

            }, (resp) => {
                let resData = '';
                const totalLength = resp.headers['content-length']
                resp.on('data', (chunk) => {
                    if (data.onDownloadProgress) {
                        data.onDownloadProgress({
                            loaded: resData.length,
                            total: totalLength
                        })
                    }

                    resData += chunk;
                });

                resp.on('end', () => {
                    if (data.onDownloadProgress) {
                        data.onDownloadProgress({
                            loaded: resData.length,
                            total: totalLength
                        })
                    }
                    then(new NodeJSRequestResponse(resp, resData))
                });
            }).on("error", () => {
                err()
            }).on("drain", () => {
                if (data.onUploadProgress) {
                    data.onUploadProgress({
                        length: req.req.connection.bytesWritten,
                        total: req.req.readableLength
                    })
                }
            });

            const usingFormData = data.body instanceof FormData

            if (usingFormData) {
                const fdHeaders = data.body.getHeaders()

                for (const name in fdHeaders)
                    headers[name] = fdHeaders[name]
            }

            for (const name in headers)
                req.setHeader(name, headers[name])

            if (data.timeout)
                req.setTimeout(data.timeout)

            if (usingFormData) {
                data.body.pipe(req)
            } else if (data.body && (method !== 'GET' && method !== 'HEAD')) {
                req.write(data.body)
            }

            req.end()

        })
    }
}

export default NodeJSRequestProvider