const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=WDWvyzKB6eSjxYgcL7iAq76adxbjJVl6goG67ajv";

console.log(baseUrl)

fetch(baseUrl)
.then(function(response) {

    return response.json();
})
.then(function(data) {
    handleJson(data);
})
.catch(function(error) {
    console.log(error); 
    
})

function handleJson(data) {
    document.querySelector("#date").innerHTML += data.date
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
    document.querySelector("#title").innerHTML += data.title
    document.querySelector("#copyright").innerHTML += data.copyright
    document.querySelector("#text").innerHTML += data.explanation
}
