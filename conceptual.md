### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Using features such as async and await will allow for code to wait to get a response before running the rest of the code.

- What is a Promise?
A promise is a one time guarantee of a future value. 

- What are the differences between an async function and a regular function?
An async function will run a function waiting for responses as needed whereas regular functions will run in order without any waiting.

- What is the difference between Node.js and Express.js?
Node.js is a server side environment whereas Express.js is a flask-like framework used for routing in js.

- What is the error-first callback pattern?
Error-first callback in Node. js is a function that returns an error object whenever any successful data is returned by the function. 

- What is middleware?
The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

- What does the `next` function do?
It's a callback argument to the middleware function.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

- variables should be set to let instead of const
- function should have one await with the input values being the users. 
- should look something more like this...

```js

let elie = "elie";
let joel = "joelburton";
let matt = "mmmaaatttttt";

or 

let user = "username";

async function getUsers(user) {
  await $.getJSON('https://api.github.com/users/${user}');

  return user;
}

getUsers(elie);
getUsers(joel);
getUsers(matt);
```
- This would work better for large number of users instead of adding an async function for every user you'd just loop each user through one function. 
- More efficient, better structure, better readability.
