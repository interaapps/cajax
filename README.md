# CAJAX (*ClassedAjax*) Prajax (*PromiseAjax*) 1.1.4
CajaxJS is an lightweight JS Http client for everyone!

#### NPM
```bash
npm install cajaxjs
```

### CDN
```
<script src="https://js.gjni.eu/cajax.js"></script>
<!-- OR -->
<script src="https://js.gjni.eu/cajax/1.1.4.js"></script>
```

## CDN (module)
test.js
```javascript
import Cajax from 'https://js.gjni.eu/cajax/src/Cajax.js'
// or import { Cajax } from 'https://js.gjni.eu/cajax/index.js'

Cajax.get("/").send()
// note that you have to use the script tag with type="module"
```


#### Cajax
```javascript
Cajax.post("/myapi", { information:"easy to use" })
.then((data)=>{
    console.log(data.responseText);
}).catch((data.responseText)=>{
    console.log("Something exploded!: "+data);
}).send();
```

#### Prajax
Now you can use `await`
```javascript
Prajax.post("/myapi", { information:"easy to use" })
.then((data)=>{
    console.log(data.responseText);
}).catch((data.responseText)=>{
    console.log("Something exploded!: "+data);
});
```

### PrajaxClient
```javascript
let client = new PrajaxClient({
   baseUrl: "https://interaapps.de",
   options: {
       header: {"x-key": "asd"}
   }
});

// USING application/json for post requests.
client.options.json = true;

client.get("/").then(res=>{
    console.log(res.responseText);
});
```

### Features
- Many request methods
- Fully customizable

### Request methods
- GET
- POST
- PUT
- DELETE
- OPTIONS
- TRACE

#### Browser support
**Cajax.js** works with every newer browser (Except Internet Explorer)

**Babel** You can use Babel to get support for older browser

#### Simple POST request
```javascript
Cajax.post("/myapi.php", {hello:"world"})
.then((data)=>{
    console.log(data.responseText);
}).catch((data)=>{
    console.log("error"+data.responseText);
}).send();
```

#### Simple GET request (with get parameters)
```javascript
Cajax.get("/myapi.php", {hello:"world"})
.then((data)=>{
    console.log(data.responseText);
}).catch((data)=>{
    console.log("error"+data.responseText);
}).send();
```

#### Simple GET request (without get parameters)
```javascript
Cajax.get("/myapi.php")
.then((data)=>{
    console.log(data.responseText);
}).catch((data)=>{
    console.log("error"+data.responseText);
}).send();
```

#### Header
```javascript
Cajax.post("/myapi.php", {}, {header: {myheader: "HEAD"}})
.then((data)=>{
    console.log(data.responseText);
}).catch((data)=>{
    console.log("error"+data.responseText);
}).send();
```

#### XHR Options (Example: withCredentials)
```javascript
Cajax.post("/myapi.php", {}, {withCredentials: true} })
.then((data)=>{
    console.log(data.responseText);
}).catch((data)=>{
    console.log("error"+data.responseText);
}).send();
```

#### Customizable
```javascript
Cajax.get("/myapi.php", {hello:"world"})
.then((data)=>{
    console.log(data.responseText);
}).catch((data)=>{
    console.log("error"+data.responseText);
}).custom((xhr)=> {
	// You can use all XMLHttpRequest methods
	xhr.send("custom things");
}).send();
```

#### Own  classname
```javascript
var $ = Cajax;

$.get("/myapi")
.then((data)=>{
    console.log(data.responseText);
}).send();
```

#### Split
```javascript
var req = Cajax.post("example_server.php", {hello: "world"});
req.then((data)=>{
    console.log(data.responseText);
});
req.send();
```


## TypeScript (Deno)
```typescript
import Prajax from "https://js.gjni.eu/cajax/src/Prajax.js";
import CajaxResponse from 'https://js.gjni.eu/cajax/src/CajaxResponse.ts';

Prajax.get("https://interaapps.de")
    .then((res: CajaxResponse)=>{
        console.log("Hello "+res.json().hello)
    })
```