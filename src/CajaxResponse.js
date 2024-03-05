class CajaxResponse {
    constructor() {
        this.headers = {}
        this.status = -1
        this.statusText = ""
        this.ok = false

        this.providerType = null
    }

    /**
     * @return {Promise<any>}
     */
    async json() {
        return JSON.parse(await this.text())
    }

    /**
     * @return {Promise<null|string>}
     */
    async text() {
        return null
    }

    /**
     * @return {Promise<*|FetchRequestProvider|XMLHttpRequestResponse>}
     */
    async res() {
        return null
    }

    /**
     * @template K
     * @param {Class<K>} clazz
     * @param constructArgs
     * @return {Promise<K>}
     */
    async map(clazz, ...constructArgs) {
        const values = await this.json()
        const obj = new clazz(...constructArgs)
        for (const [key, value] of Object(values)) {
            obj[key] = values
        }
        return obj
    }

    /**
     * @param {string} name
     * @return {string|null}
     */
    header(name) {
        return null
    }
}

export default CajaxResponse