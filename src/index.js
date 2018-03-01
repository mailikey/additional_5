module.exports = function check(str, bracketsConfig){
  let bracketsCounters = bracketsConfig.map(function(){return 0});
  let stack = [];
  for(let i =  0;i < str.length; i++){
      for( let j =0; j < bracketsConfig.length; j++){
         let notReady = true;
         if( str[i] === bracketsConfig[j][0]){
             if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                if (stack[stack.length - 1] === str[i]) {
                    stack.pop();
                } else {
                    stack.push(str[i])
                }
                notReady = false;
             } else {
                 stack.push(str[i]);
                 bracketsCounters[j]++;
             }
         }
         if(str[i] === bracketsConfig[j][1] && notReady){
             let sameOpeningBracket =  bracketsConfig[j][0];
             if (stack[stack.length - 1] === sameOpeningBracket) {
                 stack.pop();
             } else {
                 return false;
             }
             if (--bracketsCounters[j] < 0) return false;

         }
      }
   }
   if (stack.length !== 0) return false;
   if (bracketsCounters.every(zero => zero === 0)){
       return true;
   }
   else {
       return false;
   }
}
