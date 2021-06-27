# CAJAX (*ClassedAjax*) 3.0.4
CajaxJS is an lightweight JS Http client for everyone!

#### NPM
```bash
npm install cajaxjs
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/cajaxjs@x/dist/cajax.js"></script>
<!-- OR -->
<script src="https://cdn.jsdelivr.net/npm/cajaxjs@3.0.4/dist/cajax.js"></script>
```

## CDN (module, works for Deno too)
test.js
```javascript
import { Cajax } from 'https://cdn.jsdelivr.net/npm/cajaxjs@3.0.4/index.js'

new Cajax()
    .get("https://interaapps.de")
    .then(async (res) => {
        console.log(await res.text())
    })
```

## Example Usage
```js

import { Cajax, CajaxRequest, CajaxResponse, FetchRequestProvider } from 'https://cdn.jsdelivr.net/npm/cajaxjs@3.0.4/index.js'

const client = new Cajax()

// There are currently two RequestProvider. Cajax automaticly selects the best one for the user
client.requestProvider = new FetchRequestProvider()

// Await needs to be in a async scope
const response = await client.get("https://interaapps.de")
const responseText = await response.text();
console.log(responseText)

// Using query parameters
client.get("https://interaapps.de", {
    hello: "world"
})
    .then(res=>res.text())
    .then(res=>{
        console.log("Hello world")
    })

// Adding headers
client.get("https://interaapps.de", {
    hello: "world"
}, {
    headers: {
        hello: "World (But this is a header)"
    }
})

// Posting. The second parameter is the data
client.post("https://interaapps.de", {
    hello: "world"
})

// File Upload
const formData = new FormData()
formData.append("file", document.getElementById("input").files[0])
client.post("/upload", formData)
    .then(res=>{
        // ...
    })


// onDownloadProgress (Not supportet for FetchRequestProvider, use XHRHttpRequestProvider)
client.get("https://interaapps.de", {
    hello: "world"
}, {
    onDownloadProgress(event){
        console.log(event.loaded+' of '+event.total)
    }
})
```

## options
```js
/*
    You can either set your options into the third parameter of a request or just set it for the whole client
*/

const client = new Cajax("https://interaapps.de/base_url", {
    headers: {
        hello: "World"
    },

    // Might be interesting for PHP-Developers
    contentType: "application/x-www-form-urlencoded"
})

// Or you can set it here
client.setHeader("hello", "world")

// Helper
client.bearer("KEY")

// You are always converting data to json or check it before using it? Then you can use promiseInterceptor
// This will now convert every following res to a json object.
client.promiseInterceptor = res => res.json()
```


## Typescript usage
```typescript
new Cajax().get("https://interaapps.de")
    .then(async (res: CajaxResponse) => {
        console.log("Hello "+(await res.json()).name)
    })
```