const URL = "https://agile-chamber-77499.herokuapp.com/artists";

$(document).ready(function() {
  $('form#new-artist').submit(function(e) {
    let data = {
      name: $("#artist-name").val(),
      description: $("#artist-description").val()
    }
    sendDataViaFetch(data);
    e.preventDefault();
  });

  getArtists()
    .then(function(response) {
      return response.json();
    })
    .then(function(artists) {
      artists.forEach(function(elem, index) {
        $('#artists').append(addArtist(elem))
      })
    })

});

// GET all artists
function getArtists() {
  return fetch(URL, {
    method: 'GET'
  })
}

// Utility function for appending data to the DOM
function addArtist(artistObj) {
  return `<li>${artistObj.name}</li>`
};

// fetch API POST request

/*

  NOTE: You must refresh the page to see the new artist
  added to the API as a result of the POST request

*/

function sendDataViaFetch(data) {

  var request = new Request(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
    'Content-Type': 'application/json'
    })
  })

 // The code below is for testing purposes
 // I am using the code below to see what response object is sent back to API
 // after I make a POST request
 fetch(request).then(function(response){
   return response.json();
 })
 .then(function(json){
   console.log(json)
 })
 
}
