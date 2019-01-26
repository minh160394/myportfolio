var addPlayer = document.getElementById("addPlayer");
var numberPlay = document.getElementById("numberPlay");
var numberGame = document.getElementById("numberGame");
var block = document.getElementById("block");
var unblock = document.getElementById("unblock");
var display = document.getElementById("displayscore");
var playername = document.getElementById("playername") ;
var score = document.querySelector("p span");
var checkvalue= false;
var numberofPlayer=0;
var numberofGame = 5;
var checknumberid = [0, 0 , 0 , 0 , 0 , 0 , 0];
var number = 1;
block.addEventListener("click",function(){
   numberPlay.disabled = true;
   block.disabled = true;
   
   console.log(numberofGame);
   
   for(i = 0 ;i < numberofPlayer; i++){
   playername.innerHTML += "<td><input size=15 type=text placeholder=NamePlayer:"+number+" id=playername"+i+"></td>";
   number++;
   }
   playername.innerHTML += "<td><button id=Done onClick=uploadplayer()>Done</button></td>"; 
});
function uploadplayer(){
  var i; var number = 1;
  var tempname=[];
  document.getElementById("Done").disabled = true;
  for(i = 0 ; i < numberofGame; i++){
    var name= document.getElementById("playername"+i).value;
    name[i] = tempname;
    document.getElementById("playername" + i).disabled = true;
     addPlayer.innerHTML += "<td><button class= width=60px id="+i+" onClick=checkid(this.id)>"+"Player"+ number+" :"+ name+"</button></td>";
     display.innerHTML += "<td align=center><span id=display"+i +">0</spand></td>";
    number++;
  }
  name.push(tempname);
  console.log(name[1]);
}
unblock.addEventListener("click",function(){
   numberPlay.disabled = false;
   checkvalue = false;
   window.location.reload();
});
numberPlay.addEventListener("change", function(){
    numberofPlayer = Number(this.value); 
});
numberGame.addEventListener("change", function(){
    numberofGame = Number(this.value);
    score.textContent = this.value;
   
});
function checkid(id){
   var numer = parseInt(id);
   switch (numer) {
      case 0 :
      checknumberid[0] +=1; 
      break;
      case 1 :
        checknumberid[1] +=1; 
        break;
      case 2 :
          checknumberid[2] +=1; 
        break;
      case 3 :
         checknumberid[3] +=1; 
        break;
      case 4 :
          checknumberid[4] +=1; 
        break;
      case 5 :
          checknumberid[5] +=1; 
        break;
      case 6 :
          checknumberid[6] +=1; 
        break;
      default:
         break;
   }
   
   var y;
   var x;

   for(y = 0 ; y < numberofPlayer ; y++ ){
    
      var z= document.getElementById("display"+ y);
       console.log(z);
       z.textContent = checknumberid[y];
      if (checknumberid[y] == numberofGame ){
      console.log("game over");
      document.getElementById(y).classList.add("winner");
      console.log(document.getElementById(y).classList.add("winner"));
      var x;
      for(x=0;x<= numberofPlayer;x++){
         document.getElementById(x).disabled = true;
      }
     }
  }
}