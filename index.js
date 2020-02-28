    /* module.exports =  */function minimalista(string) {
      if (typeof string !== "string") /* throw new TypeError */
      return ("Minimalista requiere un string!");
      return string.replace(/\s/g, "");
    };
console.log(minimalista(['Hello World']));

 const minimalista1 = (str) =>{
if(typeof str !== 'string') /* throw new TypeError */ 
  return ("Minimalista requiere un string");
    return str.split(' ').join('').trim();
    };
console.log(minimalista1('Hello W   or  l   d   '));
