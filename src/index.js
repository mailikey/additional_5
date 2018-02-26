module.exports = function check(str, bracketsConfig){
  let counterOpenBrackets = 0;
   for(let i =  0;i < str.length; i++){
      for( let j =0; j<bracketsConfig.length; j++){
          if (counterOpenBrackets < 0){
              return false;
          }
         if( str[i] === bracketsConfig[j][0]){
             counterOpenBrackets++;
             }
          if(str[i] === bracketsConfig[j][1]){
              counterOpenBrackets = counterOpenBrackets - 1;
         }
      }
   }
   if (counterOpenBrackets === 0){
       return true;
   }
   else {
       return false;
   }
}
