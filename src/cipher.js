window.cipher = {
  encode: (offset, string) => {
    let solved = "";
    for (let i = 0; i < string.length; i++) {
      const asciNum = string[i].charCodeAt();
      if (asciNum >= 65 && asciNum <= 90) {
        const code = ((asciNum - 65) + (parseInt(offset))) % 26 + 65;
        solved += String.fromCharCode(code);
      } else if (asciNum === 32) {
        solved += " ";
      }
      
    }
    return solved; 
  },

  decode: (offset, string) => {

  let solved = "";
  for (let i = 0; i < string.length; i++) {
    const asciNum = string[i].charCodeAt();
    if (asciNum >= 65 && asciNum <= 90){
      const code = ((asciNum + 65) - (parseInt(offset))) % 26 + 65;
      solved += String.fromCharCode(code);
    } else if (asciNum === 32) {
      solved += " ";
    }
  }
  return solved;

}      
  };