
// function myFunction(src) {
//     document.getElementById("img").src = src;
    
// }
// var images=["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
// var index=0;
// for(var i=1; i<images.length+1; i++){
//     document.getElementById("link_"+i).src=images[i-1];
//     document.getElementById("link_"+i).addEventListener("click", nFunction);
// }







var button = document.getElementsByClassName('img');
var buttonList = Array.prototype.slice.call(button);
for(var i=0; i<buttonList.length; i++){
    buttonList[i].addEventListener("click", nFunction);
}

           
// function nFunction() {
//     myFunction(this.src);
// }

// var arrow=document.getElementsByClassName("arrow");
// var arrowList = Array.prototype.slice.call(arrow);
// for(var i=0; i<arrowList.length; i++){
//     arrowList[i].addEventListener("click", cFunction);
// }
// function cFunction(){
//     var id=this.id;
//     if(id=="arrow-left" && index!=0){

//         index--;
//     }
//     if(id=="arrow-right" && index!=images.length-1){

//         index++;
//     }
//     document.getElementById("img").src = images[index];
// }

