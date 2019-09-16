# CAJAX (*ClassedAjax*) Prajax (*PromiseAjax*) 2.0
CajaxJS is an lightweight JS Http client for everyone!


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

**CajaxBS.js** (Cajax Browser Support) should work with every browser, because its compiled with Babel. (It has got the same functions like Cajax!)

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
