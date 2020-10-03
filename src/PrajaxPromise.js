import CajaxRequest from "./CajaxRequest.js";

function PrajaxPromise(url,method, data=null, options={}) {
    return new Promise( (done, error)=>{

            var request = new CajaxRequest(url,method, data, options);
            request.then((resp)=>{
                done(resp);
            });

            request.catch((resp)=>{
                error(resp);
            });

            if (typeof options.cajax != 'undefined') {
                if (typeof options.cajax.custom != 'undefined')
                    request.cajax.custom(options.cajax.custom);

                if (typeof options.cajax.response != 'undefined')
                    request.cajax.response(options.cajax.response);
            }

            request.send();

        }
    )
}

export default PrajaxPromise;