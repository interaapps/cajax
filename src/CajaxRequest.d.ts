export default CajaxRequest;
declare class CajaxRequest {
    constructor(url: any, method: any, data?: any, options?: {});
    onResponseFunction: () => void;
    catchFunction: () => void;
    thenFunction: () => void;
    params: any;
    method: any;
    url: any;
    fetch: Promise<void>;
    options: {};
    data: string | FormData;
    contenttype: string;
    xhr: XMLHttpRequest;
    response(func: any): CajaxRequest;
    then(func: any): CajaxRequest;
    progress(func: any): CajaxRequest;
    catch(func: any): CajaxRequest;
    custom(func: any): CajaxRequest;
    contentType(type: any): CajaxRequest;
    send(): CajaxRequest;
}
declare namespace CajaxRequest {
    const useFetch: boolean;
}
