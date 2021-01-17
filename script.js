function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
  }
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

let url = 'https://api.thecatapi.com/v1/images/search'

var randomCat

let img = document.querySelector('img');  
let button = document.querySelector('button');  

let response;
  function getCat() {
    fetch(url)
    .then(response => response.json())
    .then(json => img.src =(json[0].url) /*{
      let data = json;
      console.log(data)
      //.catch(err => console.log('oops something went wrong', err));
    }*/);
  }
//getCat();
// Know when button is clicked
button.addEventListener('click', getCat)