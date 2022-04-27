var isPalindrome = function(x) {
   let array = String(x)
   let array1 = [];
   array = array.split("");
  for(let i = array.length -1 ; i >= 0;i--)
  {
    array1.push(array[i]);
  }
  array1 = array1.join("");
  array1 = parseInt(array1);
 if(array1 === x)
 {
     console.log("vậy số"+" " + x +" " +"là palindrome");
 }
 else
 {
    console.log("vậy số"+" " + x +" " +"không là palindrome");
 }
  
};
isPalindrome(121);
isPalindrome(-121);