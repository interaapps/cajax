# NeoCajax (_ClassedAjax_) NeoPrajax (_PromiseAjax_) 2.0

NeoCajaxJS is an lightweight JS Http client for everyone!

#### NPM

```bash
npm install @keimeno/neocajax
```

#### NeoCajax

```javascript
NeoCajax.post('/myapi', { information: 'easy to use' })
	.then(data => {
		console.log(data.responseText);
	})
	.catch((data.responseText) => {
		console.log('Something exploded!: ' + data);
	})
	.send();
```

#### NeoPrajax

Now you can use `await`

```javascript
NeoPrajax.post('/myapi', { information: 'easy to use' })
	.then(data => {
		console.log(data.responseText);
	})
	.catch((data.responseText) => {
		console.log('Something exploded!: ' + data);
	});
```

### Features

-   Many request methods
-   Fully customizable

### Request methods

-   GET
-   POST
-   PUT
-   DELETE
-   OPTIONS
-   TRACE

#### Browser support

**NeoCajax.js** works with every newer browser (Except Internet Explorer)

**Babel** You can use Babel to get support for older browser

#### Simple POST request

```javascript
NeoCajax.post('/myapi.php', { hello: 'world' })
	.then(data => {
		console.log(data.responseText);
	})
	.catch(data => {
		console.log('error' + data.responseText);
	})
	.send();
```

#### Simple GET request (with get parameters)

```javascript
NeoCajax.get('/myapi.php', { hello: 'world' })
	.then(data => {
		console.log(data.responseText);
	})
	.catch(data => {
		console.log('error' + data.responseText);
	})
	.send();
```

#### Simple GET request (without get parameters)

```javascript
NeoCajax.get('/myapi.php')
	.then(data => {
		console.log(data.responseText);
	})
	.catch(data => {
		console.log('error' + data.responseText);
	})
	.send();
```

#### Header

```javascript
NeoCajax.post('/myapi.php', {}, { header: { myheader: 'HEAD' } })
	.then(data => {
		console.log(data.responseText);
	})
	.catch(data => {
		console.log('error' + data.responseText);
	})
	.send();
```

#### XHR Options (Example: withCredentials)

```javascript
NeoCajax.post("/myapi.php", {}, {withCredentials: true} })
.then((data)=>{
    console.log(data.responseText);
}).catch((data)=>{
    console.log("error"+data.responseText);
}).send();
```

#### Customizable

```javascript
NeoCajax.get('/myapi.php', { hello: 'world' })
	.then(data => {
		console.log(data.responseText);
	})
	.catch(data => {
		console.log('error' + data.responseText);
	})
	.custom(xhr => {
		// You can use all XMLHttpRequest methods
		xhr.send('custom things');
	})
	.send();
```

#### Own classname

```javascript
var $ = NeoCajax;

$.get('/myapi')
	.then(data => {
		console.log(data.responseText);
	})
	.send();
```

#### Split

```javascript
var req = NeoCajax.post('example_server.php', { hello: 'world' });
req.then(data => {
	console.log(data.responseText);
});
req.send();
```
