// complete the given function

function palindrome(str){
 let rev = "";
      Scanner sc = new Scanner(System.in);
 
 
      let length = str.length();
 
      for ( let i = length - 1; i >= 0; i-- )
         rev = rev + str.charAt(i);
 
      if (str.equals(rev)){
       return "True";
	  }
      else{
         return "False";
 
   }
}

module.exports = palindrome
