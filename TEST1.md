# Test 1

> 1. How can you call asynchronous code on JavaScript?
Async code in JavaScript is done using the Promise Object/APIs. You can also use async and await functions for convenience. 

> 2. How can you listen on port 80 using only Node?
	const http = require('http');

	const server = http.createServer((req, res) => {
		res.end("I'm on Port 80!")
	}).listen(80);


> 3. What tools can be used to assure consistent style? Why is it important? Which tools did you use before, which do you prefer and why?
Linters can be used to  assure a consistent style, along with linting tests and/or code reviews which check to ensure the linter was actually run.

> 4. What's your favourite tech stack and why?
I really enjoy Golang with Vue.js. I think Vue.js takes the separation of concerns that Angular has (different files/sections for the logic, presentation and styling) while still being able to handle things like dynamic child components.

When written correctly, Golang, and Golang's Duck Typing, enables quick development of very expandable and configurable applications.

> 5. What's your least favourite tech stack and why?
LAMP or anything with PHP. I personally don't like mixing backend and frontend code, and prefer offer an API with a separate frontend.

> 6. Can you access DOM in Node?
No, the DOM is part of the browser, not Node.

> 7. Explain the differences between var, let and const.
var is the legacy variable declaration keyword. It is much more forgiving than let by allowing re-declaration of varaibles and is either global or function scoped. Variables declared with var are defaulted to undefined.

let also declares variables but is block-scoped and will throw and error if you re-declare a let variable or attempt to access an un-initialized variable.

const declares a constant and is block-scoped.

> 8. Explain the differences between normal functions and arrow functions
Beside their syntax, normal functions and arrow functions have two major differences.

1. Arrow functions do not have their own `this`, instead using the global `this` or the `this` of the object, function, or component. Normal functions have their own `this` unless explicity set with bind(), call(), or apply().
2. Normal functions have access to the arguments array and arrow functions do not.

> 9. How would you design an event driven system? How the communication between the parts would look? How the resource access would look?
An Event Driven System has three major parts: The Publisher/Producer, the subscriber/consumer and the middleware/Broker/Channel.

The Publisher sends an event to one or more `topics` registered by the Middleware which, depending on the complexity of the system, will either immediately attempt to send the relevent information to the subscribers of the topic (fire and forget) or store the event in a sequential log-based storage medium (this is meant to make the middleware durable as well as prevents subscribers from getting events out of order).

Resource access will be the Publisher can only send an event to the middleware (unless the Publisher is also a Subscriber), the middleware will either immediately send the event to the Subscribers or store the event and then send it at a later time/date. The Subscriber should only receive the event information from the middleware (unless the Subscriber is also a Publisher). 

NOTE: Simplier Event-driven systems can also use the Observer pattern, where observers are simply added to a list and when an event happens all observers are notified.
