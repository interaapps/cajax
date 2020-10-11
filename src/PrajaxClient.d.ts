export default PrajaxClient;
declare class PrajaxClient {
    constructor(options: any);
    baseUrl: any;
    options(url: any, data?: {}, options?: {}): any;
    data: any;
    get(url: any, data?: {}, options?: {}): any;
    post(url: any, data?: {}, options?: {}): any;
    put(url: any, data?: {}, options?: {}): any;
    delete(url: any, data?: {}, options?: {}): any;
    trace(url: any, data?: {}, options?: {}): any;
    connect(url: any, data?: {}, options?: {}): any;
    update(url: any, data?: {}, options?: {}): any;
    ajax(json: any): any;
}
