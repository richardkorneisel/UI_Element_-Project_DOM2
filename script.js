function openNav() {
    document.getElementById("mySidepanel").style.width = "300px"; // Makes sidepanel 300px wide and therefore visible
  }
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";  // makes sidepanel o px wide and therefore hidden
  }

let url = 'https://api.thecatapi.com/v1/images/search'

var randomCat

let img = document.querySelector('img');  
let button = document.querySelector('button');  

let response;
  function getCat() {
    fetch(url)
    .then(response => response.json())
    .then(json => img.src =(json[0].url) 
    
    /*  code from other example to link to API, hidden because causing issues. {
      let data = json;
      console.log(data)
      //.catch(err => console.log('oops something went wrong', err));
    }*/);
  }
//getCat();  //used to show array on API, not needed for running codeß
// Know when button is clicked & tie to function
button.addEventListener('click', getCat)