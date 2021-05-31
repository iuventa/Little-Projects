function arrow(a){
    
   switch(a){
       case "left":
      
       console.log("left");
       document.getElementById("img").style.marginTop="0";
    
       break;
       case "right":
       var i=0;
       console.log(25);
       document.getElementById("img").style.marginTop="-600"*i+"px";
    i++;
       break;
   }
   i++;
}