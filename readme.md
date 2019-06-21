# CAJAX (*ClassedAjax*)
CajaxJS is an lightweight JS Http client for everyone!

```javascript
cajax.post("/myapi", { information:"easy to use" })
.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log("Something exploded!: "+data);
}).send();
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

#### Simple POST request
```javascript
cajax.post("/myapi.php", {hello:"world"})
.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log("error"+data);
}).send();
```

#### Simple GET request (with get parameters)
```javascript
cajax.get("/myapi.php", {hello:"world"})
.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log("error"+data);
}).send();
```

#### Simple GET request (without get parameters)
```javascript
cajax.get("/myapi.php")
.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log("error"+data);
}).send();
```

#### Customizable
```javascript
cajax.get("/myapi.php", {hello:"world"})
.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log("error"+data);
}).custom((xhr)=> {
	// You can use all XMLHttpRequest methods
	xhr.send("custom things");
}).send();
```

#### Own  classname
```javascript
var $ = cajax;

$.get("/myapi")
.then((data)=>{
    console.log(data);
}).send();
```
