import { Cajax } from '../index.js'

 import FormData from 'form-data'

const a = new FormData()
a.append("hello", "world")
a.append("hellonot", "world")

const cajax = new Cajax()


cajax.post("https://httpbin.org/post", a, {
    onDownloadProgress(e){
        console.log("DW", `${e.loaded} / ${e.total} ${ (e.loaded / e.total) * 100 }%`)
    },
    onUploadProgress(e){
        console.log("UP", e)
    }
})
    .then(res => res.json())
    .then(console.log)

/*

cajax.get("https://pastefy.ga/api/v2/paste/ATJyVVO7")
    .then(async res => {
        console.log({
            ...res,
            response: await res.json(),
            text: await res.text(),
        })
    })
 */