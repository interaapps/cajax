class CajaxResponse {
    constructor(){
        this.headers = {}
        this.status  = -1
        this.statusText = ""
        this.ok = false
    }

    async json(){
        return {}
    }

    async text(){
        return null
    }

    async res(){
        return null
    }

    header(name){
        return null
    }
}

export default CajaxResponse