//alert("connected!")
//connect JS to HTML
//Go to html in the body add
//<script type="text/javascript" src="fileName.js"></script>

//console.log(Math.floor(Math.random()*5))//random number between 0 and 4.
//Math.floor:rounds down;
//Math.random:gives a random number between 0 and 1

const changeSentence=()=>{
  document.getElementById('sentence').innerHTML="Go! Go! Go!"
}


var rainbowTreasure=Math.floor(Math.random()*9)
var bomb=Math.floor(Math.random()*9)
//What if the bomb and treasure are in the same location?
if(rainbowTreasure===bomb){
  rainbowTreasure=Math.floor(Math.random()*9)
}

var counter=3
const treasure=(location)=>{
  if(counter>=1){
    counter --
  }

  document.getElementById("counter").innerHTML=counter

  if(rainbowTreasure===location){
    document.getElementById(location).innerHTML= "&#x1f308"
    window.setTimeout(()=>{
      alert("You Win!");
      window.location.reload(true);}, 500);
  }else if(bomb===location){
    document.getElementById(location).innerHTML= "&#128163"
    window.setTimeout(() => {
      alert("You Lose!");
      window.location.reload(true);}, 500);
  }else{
    document.getElementById(location).innerHTML= "&#x1f332"
  }

  if(counter===0 && rainbowTreasure!==location && bomb!==location){
    window.setTimeout(() => {
      alert("You Lose!");
      window.location.reload(true);}, 500);
  }
}
