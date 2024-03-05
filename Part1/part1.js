//1. 

let favoriteNumber=1
let baseURL='http://numbersapi.com'

$.getJSON(`{baseURL}/{favoriteNumber}?json`).then(response => console.log(response))


//2.

let favoriteNumbers=[1,2]
$.getJSON(`{baseURL}/{favoriteNumbers}?json`).then(response => console.log(response))

//3. 

// initialize empty array
let fourPromisesArray = []
//use loop to create array of get requests
for (let i=0; i<4; i++) {
    fourPromisesArray.push(
        $.getJSON(`{baseURL}/{favoriteNumber}?json`))
    }
//call Promise.all method; pass in an array of get requests
Promise.all(fourPromisesArray)
//each get request is resolved with a response object; creates an array of resolved promises
.then(resolvedReponses=>{
    resolvedResponses.forEach(response => $("body").append(`<p>${response.text}</p>`))
})


