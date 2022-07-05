class CajaxResponse {
    constructor() {
        this.headers = {}
        this.status = -1
        this.statusText = ""
        this.ok = false

        this.providerType = null
    }

    async json() {
        return JSON.parse(await this.text())
    }

    async text() {
        return null
    }

    async res() {
        return null
    }

    header(name) {
        return null
    }
}

export default CajaxResponse