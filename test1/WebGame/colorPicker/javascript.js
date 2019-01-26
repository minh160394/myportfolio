var squarebot = document.querySelectorAll(".squarebot");
var squaretop = document.querySelectorAll(".squaretop");
var displaybrg = document.getElementById("Displaybrg");
var displayresult = document.getElementById("displayresult");
var topbackground = document.querySelector("h1");
var buttonmode = document.querySelectorAll("#mode");
var playagain=document.getElementById("reset");
var numberSquares = 6;
var colorbot = [];
var pickedColor = pickedColorous();
var colortop = [];
init();

function init(){
   setupMode();
   setupSquares();
   reset();
}

function setupMode(){
   for(var i =0 ; i < buttonmode.length; i++){
      buttonmode[i].addEventListener("click", function(){
         buttonmode[0].classList.remove("selectedbutton");
         buttonmode[1].classList.remove("selectedbutton");
         this.classList.add("selectedbutton");
         this.textContent === "Easy" ?	numberSquares = 3 : numberSquares = 6;
         reset();
      });
   }
}


playagain.addEventListener("click", function(){
   reset(); 
});
function reset(){
     colorbot = generaterandomColors(numberSquares);
     pickedColor = pickedColorous();
     colortop = splitPickedColor();
     displaybrg.textContent = pickedColor;
     displayresult.textContent = "Correct/Wrong";
     playagain.textContent = "Change new Color?";
     for(var i =0 ; i < squaretop.length; i++){
    squaretop[i].style.display = "block";
    squaretop[i].style.background = colortop[i];
    }
    for(var x= 0 ; x < squarebot.length; x++){
      if(colorbot[x]){
        squarebot[x].style.display ="block";
        squarebot[x].style.background = colorbot[x];
      }else{
         squarebot[x].style.display="none";
      }
    }
    topbackground.style.background ="#e9e2e2";
}

function splitPickedColor(){
    var rgb = pickedColor;
    rgb = rgb.replace(/[^\d,]/g, '').split(',');
    var colum1 = "rgb("+[Number(rgb[0]), 0, 0]+")";
    var colum2 = "rgb("+[0, Number(rgb[1]), 0]+")";
    var colum3 = "rgb("+[0, 0, Number(rgb[2])]+")";
    var correct = [];
    correct.push(colum1);
     correct.push(colum2);
      correct.push(colum3);
      return correct;
    }
function generaterandomColors(num){
    var arr = [];
    for(var i =0 ; i <num ;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//
function setupSquares(){
   for(var i = 0 ; i < squarebot.length; i++){
       squarebot[i].style.background = colorbot[i];
      
       squarebot[i].addEventListener("click", function(){
           var clickedbutton = this.style.background;
          if(clickedbutton === pickedColor){
           displayresult.textContent = "Correct !";
           Colorchange(clickedbutton);
           topbackground.style.background = pickedColor;
            playagain.textContent = "Play Again ?";
          }
          else{
           this.style.background = "#e9e2e2";
           displayresult.textContent = "Wrong !";
          }
       });
   }
   for(var i =0 ; i < squaretop.length; i++){
       squaretop[i].style.background = colortop[i];
   }
}
    displaybrg.textContent = pickedColor;
function pickedColorous(){
    var random = Math.floor(Math.random() * colorbot.length);
    return colorbot[random];
}
function Colorchange(color){
    for(var i = 0; i < squarebot.length; i++){
        squarebot[i].style.background = color;
    }
    for(var i = 0; i < squaretop.length; i++){
        squaretop[i].style.background = color;
    }
}