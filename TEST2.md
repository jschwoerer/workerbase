# TEST 2

> ```javascript
> new Promise((resolve, reject) => {
>   throw new Error("error");
> }).then(console.log);
> ```

The Error thrown in the Promise is uncaught. A catch() call needs to be added to the promise or an onRejection callback needs to be added to the then().

> How would you change the code bellow to get the value of the promises that passed as well as the failed promises?
>
> ```javascript
> Promise.all([
>   Promise.resolve(1),
>  Promise.resolve(2),
>  Promise.reject(3),
>  Promise.resolve(4)
> ])
>  .then(results => console.log(reuslts))
>  .catch((err, data) => console.error(err, data));
> ```

Change the .all() to allSettled(). The result of the returned Promise, once it is successfully fulfilled, should be an Array of the also fulfilled, or failed, promises.

> Change ONLY the code on function run to not use a callback but a promise, consider that the code will run on Node
> 
> ```javascript
> function asyncSum(a, b, cb) {
>   setTimeout(() => {
>     cb(a + b);
>   }, 100);
> }
> function run() {
>   asyncSum(1, 2, result => {
>     console.log("The sum of 1 and 2 is " + result);
>   });
> }
> ```

	function run() {
		new Promise(resolve => 	asyncSum(1, 2, resolve))
			.then(result => console.log("The sum of 1 and 2 is " + result))
	}


