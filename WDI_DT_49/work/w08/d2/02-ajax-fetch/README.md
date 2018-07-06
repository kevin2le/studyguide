# AJAX with JS & JQuery

Slides for this can be found [here](http://slides.com/jonathantamsut/client-side-api-requests-and-underscore-templating).

### Objectives

* Implement a XHR client using the `fetch` API
* Understand how the `fetch` API returns a "thenable" Promise

## What is AJAX? Introduction

**AJAX (Asynchronous JavaScript and XML)** is a method of building interactive applications for the Web that processes user requests immediately without re-rendering a whole page. Basically a AJAX request makes a HTTP request without refreshing the page.

> **Example:** A weather forecasting site could display local conditions on one side of the page as soon as a user finishes typing in a zip code. The temperature could refresh every minute, without the user having to hit a refresh button.

In general the process looks like this – use JavaScript on the client side to hit an API (without reloading a page), then use the pure data you get back to manipulate the DOM somehow if you need to. This DOM manipulation can take the form of rendering a template or just changing a number on the page.

### Advantages of AJAX To Make HTTP Requests

* __Faster__ - This is the most obvious reason for using AJAX on your Front End: AJAX allows easier and quicker interaction between user and website as pages are not reloaded for content to be displayed.  The server doesn't have to get data, render HTML, and then spit it out, it just has to get data and your already-loaded front end does the rest.

* __Backend Separated from Frontend__ - Applications that use AJAX-heavy front ends mean developers don't have to work on both sides of the stack at the same time. Some developers can be dedicated to building an API that just serves data, and others can focus on consuming that data and building interfaces.

### Disadvantages

* __The back and refresh button are rendered useless__ - Since things are loaded dynamically on a page, without that page reloading (or more importantly, without a URL being changed), clicking the back or refresh button in a browser doesn't work the way you're used to. That's actually a pretty big deal – UX designers are very familiar with the fact that users are *accustomed* to being able to hit back when they need to. Some advanced front-end frameworks have tried to solve this issue with clever workarounds, but that's not always the case and not always accurate.

* __Javascript can be disabled__ - While JavaScript is secure and has been heavily used by websites for a long period of time, a percentage of website surfers prefer to turn JavaScript functionality off on their browser, rendering the AJAX application totally useless. That's not always the best thing to design for, and more often than not, you'll find yourself assuming users have JS on, but it's important to know your whole site could be useless in some situations. Nowadays most websites use JavaScript, so it's very uncommon for users to disable it.

## Cross-Origin Request Sharing (CORS)

A resource makes a cross-origin HTTP request when it requests a resource from a domain or port which is different from the one which the first resource itself serves. For example, an HTML page served from http://domain-a.com makes an `<img> src` request for http://domain-b.com/image.jpg. Many pages on the web today load resources like CSS style sheets, images and scripts from separate domains. For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts.

## The Fetch API

The **fetch** API allows us to make AJAX requests that return Promises. The `fetch` API takes only one required paramter: the URL of the endpoint you'd like to hit.

```js
let cats = fetch('http://cats.com',
  {
    method: 'get'
  }
)
```

The above code makes a `GET` request to the URL `http://cats.com`. Whatever gets returned is specified by how the API deals with `GET` requests. In typical promise fashion we can convert our data to JSON so we can "play" with it using the `json()` method.

```js
let cats = fetch('http://cats.com',
  {
    method: 'get'
  }
)

cats.then(function(response) {
  return response.json();
})

// cats is now equal to the JSON response of hitting this API
```

Note that `cats` is a Promise and is "thenable".

## In Class Activity

Your goal is to complete the three functions in `ajax-starter/app.js`: 

* `getArtists` - use the fetch API to make a `GET` request to grab all data from the API
* `addArtist` - function that simply adds the results of the API call to the DOM
* `sendDataViaFetch` - make a POST request that adds a song to the API 

The API endpoint is: https://agile-chamber-77499.herokuapp.com/artists

This is a JSON API that stores data about songs. Each song has the following fields: 

* name 
* description
* top_song 
* id

Use Postman to make a `GET` request to the API endpoint to see a sample of all of the entries that exist for this API.

#### fetch GET Requests

```js
function getArtists() {
  return fetch('https://agile-chamber-77499.herokuapp.com/artists', {
    method: 'get'
  }).then(data => data.json());
}
```

##### json()

The `json()` method **MUST** be used to convert data stream into JSON.

Our `getArtists()` method grabs all artist information from our API.

#### fetch POST Requests

Here is an example of a `POST` request using the `fetch` API.

```js
const url = 'https://randomuser.me/api';
// The data we are going to send in our request
let data = {
    name: 'Sara'
}

// Create our request constructor with all the parameters we need
var request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
});

fetch(request)
.then(function(response) {
    return response.json()
})
.then(function(json) {
  console.log(json);
});
```

Please note that in order to make a `POST` request using the `fetch` API we **NEED** to set the `Content-Type` header to `application/json`. We can create headers using the fetch API using the `Headers` constructor.

```js
myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
```

## Conclusion

* What's the main use case of AJAX? Why would anyone use it?
* How do you do a `GET` and `POST` request with the `fetch` API?


#### Extra Reading
- [`No 'Access-Control-Allow-Origin' header is present on the requested resource` – WTF?](https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/)
- [What is Cross Origin Resource Sharing (CORS)?](https://www.maxcdn.com/one/visual-glossary/cors/)
- [Using CORS with Express](http://enable-cors.org/server_expressjs.html)
