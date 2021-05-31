// function menu(){
    
    
//     if(document.getElementById("menu").style.height==""){
//         document.getElementById("menu").style.visibility="visible";
   
//         document.getElementById("menu").style.height="200px";
        
//     }
//     else{
       
//         document.getElementById("menu").style.visibility="hidden";
//         document.getElementById("menu").style.height="";
        
        
//     }

 
   
// }
// switch(a){
//     case "chose":
//     if(document.getElementById("chose").style.height==""){
//                 document.getElementById("chose").style.height="100%";
//                 document.getElementById("container").style.height="300px";
//             }
//             else{
//                 document.getElementById("chose").style.height="";
//                 document.getElementById("container").style.height="250px";
//             }
//     break;
//     case "choose":
//     if(document.getElementById("choose").style.height==""){
//         document.getElementById("choose").style.height="100%";
//         document.getElementById("container").style.height="300px";
//     }
//     else{
//         document.getElementById("choose").style.height="";
//         document.getElementById("container").style.height="250px";
//     }
//     break;
// }


function valuta(a){
    switch(a){
        case "dolar":
        document.getElementById("infop").innerText="Dollar (often represented by the dollar sign $) is the name of more than 20 currencies, including those of Australia, Canada, Hong Kong, Jamaica, Liberia, Namibia, New Zealand, Singapore, Taiwan, and the United States, whose US dollar is also the official currency of Caribbean Netherlands, East Timor, Ecuador, El Salvador, Federated States of Micronesia, Marshall Islands, Palau, Panama, and Zimbabwe.";
        document.getElementById("info").style.width="25%";
        document.getElementById("info").style.transition="width 2s ease-in-out";
        break;
        case "euro":
        document.getElementById("infop").innerText="The euro (sign: €; code: EUR) is the official currency of 19 of the 28 member states of the European Union. This group of states is known as the eurozone or euro area, and counts about 343 million citizens as of 2019.[8][9] The euro is the second largest and second most traded currency in the foreign exchange market after the United States dollar.[10] The euro is subdivided into 100 cents.";
        document.getElementById("info").style.width="25%";
        document.getElementById("info").style.transition="width 2s ease-in-out";
        
        break;
        case "sterling":
        document.getElementById("infop").innerText="The pound sterling (symbol: £; ISO code: GBP), commonly known as the pound and less commonly referred to as sterling,[9] is the official currency of the United Kingdom, Jersey, Guernsey, the Isle of Man, South Georgia and the South Sandwich Islands, the British Antarctic Territory,[10][11] and Tristan da Cunha.[12] It is subdivided into 100 pence (singular: penny, abbreviated: p). A number of nations that do not use sterling also have currencies called the pound.";
        document.getElementById("info").style.width="25%";
        document.getElementById("info").style.transition="width 2s ease-in-out";
        break;
    }

}
function dissapear(){
    document.getElementById("info").style.width="0";
   
}