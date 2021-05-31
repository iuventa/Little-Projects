// function myFunction(){
 
//     var x=document.getElementById("number1").value;
//     var y=document.getElementById("number2").value;
//     var moq=document.getElementById("moqmedeba").value;

//     var res=0;
//     var n1=parseInt(x);
//     var n2=parseInt(y);
//     switch(moq){
//         case "+":
//         res=n1+n2;
//         break;
//         case "-":
//         res=n1-n2;
//         break;
//         case "*":
//         res=n1*n2;
//         break;
//         case "/":
//         res=n1/n2;
//         break;
//     }
//     document.getElementById("result").innerHTML = res;
//     console.log(res);
// }

function func(bandaji){
    
    console.log(bandaji);
    document.getElementById("res").src=bandaji;
}

function slide(a){

    console.log(a);
    
    switch(a){
        case "clickLeft":
        console.log(document.getElementById("res").src) ;
       
        if(document.getElementById("res").src=="file:///D:/StudentDesktop/student/Desktop/salopme/sums/img/1.jpg"){
            document.getElementById("clickLeft").style.visibility="hidden";
        }
        else{
        //     for(var i=4; i>0; i--){
        //    document.getElementById("res").src=="file:///D:/StudentDesktop/student/Desktop/salopme/sums/img/"+i+".jpg";
        //     }
            
        // }
        
        break;
    }
    
}

