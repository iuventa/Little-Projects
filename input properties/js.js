function check(){
    var a=document.getElementById("input").value;
    var b=document.getElementById("pass").value;
    var length=b.length;
    if(a==b){
        alert("Name da Password ertmanets emtxveva");

    }
    // else if(length<8){
    //     alert("paroli unda sheicavdes rva simboloze mets");
    // }
    
    else{

        
        for (var i=0; i<length; i++){


           var res = myFunction(b[i]);
           console.log(res);
           
}
if(res == true){
    alert ("ok");
}
else alert("not ok");
}
}

 function myFunction(aso) {
        // var keyUp=false;
        // var ketDown=false;
        // var number=false;
        // var char=false;
        
           var x = aso.charCodeAt(0);
            if(x>31 && x<127){
                 return true;
            }else{
                return false;
            }
}
  