export default interface CajaxResponse {
    resType: string;
    response: string;
    responseText: string;
    ok: Boolean;
    status: Number;
    statusText: string;
    url: string;
    res: any;
    json(): object;
}
