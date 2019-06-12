window.cipher = {
  encode: (number, message2) => {

let solved = " ";
for(let i = 0;i<message2.length; i++){
  const asciNum = message2[i].charCodeAt();
  if(asciNum >= 65 && asciNum <= 90);{
  const code = ((asciNum - 65) + (parseInt(number))) % 26 + 65;
  solved += String.fromCharCode(code);
}
  }
  return solved;
    },
      
  decode: (number, lastMessage) => {
  
   let solved = " ";
   for(let i = 0;i<lastMessage.length; i++){
     const asciNum = lastMessage[i].charCodeAt();
     if(asciNum >= 65 && asciNum <= 90);{
     const code = ((asciNum + 65) - (parseInt(number))) % 26 + 65;
     solved += String.fromCharCode(code);
   }
     }
     return solved;
    
       }      
        };