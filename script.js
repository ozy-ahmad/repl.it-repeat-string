function repeatStringNumTimes(str, num) {
    // code below
for ( let i= 0; i< 3; i--) {
    if (num < 1) {
        return " "
    } else if (num === 1) {
        return str;
    } else {
     return str + repeatStringNumTimes(str, num -1);   
    }
}
    // trying another
    // let strCalculation = " ";
    // for (let i = 0;i < 1 ; i--)
    // return str + repeatStringNumTimes(str, num -1);

    

    // code above this line
  }
  
  repeatStringNumTimes("abc", 3);
  


  
  // Test Cases
  
  // repeatStringNumTimes("*", 3) should return "***"
  // repeatStringNumTimes("abc", 3) should return "abcabcabc"
  // repeatStringNumTimes("abc", -2) should return ""
  // repeatStringNumTimes("abc", 0) should return ""