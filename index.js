//for dice 1
var randomno1=Math.floor(Math.random()*6)+1;
var randomdice1="dice"+randomno1+".png";
var randomdice1source="images/"+ randomdice1;
document.querySelectorAll("img")[0].setAttribute("src",randomdice1source);
/* For iamge 1
var image1=document.querySelector("img")[0];
image1.setAttribute("src",randomdice1source);
*/

//for dice 1

// for dice 2

var randomno2=Math.floor(Math.random()*6)+1;
var randomdice2="dice"+randomno2+".png";
var randomdice2source="images/"+ randomdice2;

document.querySelectorAll("img")[1].setAttribute("src",randomdice2source);
/* For iamge 2
var image2=document.querySelector("img")[1];
image2.setAttribute("src",randomdice2source);
*/

// for dice 2
if(randomno1===randomno2){
  document.querySelector("h1").innerHTML=" 🎭 Draw";

}
else if(randomno1>>randomno2){
  document.querySelector("h1").innerHTML=" 🎉 Player 1 wins";

}
else{
  document.querySelector("h1").innerHTML=" 🎉 Player 2  wins";


}
