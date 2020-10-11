export default Cajax;
declare class Cajax {
    static post(url: any, data?: {}, options?: {}): CajaxRequest;
    static get(url: any, data?: {}, options?: {}): CajaxRequest;
    static put(url: any, data?: {}, options?: {}): CajaxRequest;
    static delete(url: any, data?: {}, options?: {}): CajaxRequest;
    static trace(url: any, data?: {}, options?: {}): CajaxRequest;
    static connect(url: any, data?: {}, options?: {}): CajaxRequest;
    static options(url: any, data?: {}, options?: {}): CajaxRequest;
    static update(url: any, data?: {}, options?: {}): CajaxRequest;
    static ajax(json: any): CajaxRequest;
}
import CajaxRequest from "./CajaxRequest.js";
