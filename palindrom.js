const isPalindrome = (str) => {
    const normalize = str.toLowerCase().replace(/[^a-z0-9]/,"");
    const reverse = normalize.split("").reverse().join("")
    console.log(normalize, reverse);
    if(normalize !== reverse){
        return false
    }
    return true
}
// console.log(isPalindrome("car"));
const isPalindrome2 = (str) => {
      const normalize = str.toLowerCase().replace(/[^a-z0-9]/,"");
      let left = 0
      let right = normalize.length - 1;
      while(left < right){
        if(normalize[left] !== normalize[right]){

         return false
        }
        left++;
        right--
      }
      return true;
}
console.log(isPalindrome2("car"));
console.log(isPalindrome2("level"));