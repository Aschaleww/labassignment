"use strict";
//max of two number
function findmax(num1,  num2){
    if(num1>num2){
        console.log(num1 +"is greater than " +num2);
    }
    else if(num2>num1){
        console.log(num2 +"is greater than" +num1);
    }
    else{
        console.log("both are equal");
    }
  

    }
findmax();
//max of three numbers
    function maxthreenumber(num1, num2, num3){
     if(num>=num2 && num1>=num3){
     return num1;
     }
       if(num2>=num1 && num2>num3){
       return num2;
       }
       else{
       return num3; 
       }

    }
   

//vawel
    function isVowel(char) {
        let vowels = ["a", "e", "i", "o", "u"];
        return vowels.includes(char.toLowerCase());
      }
      
     
      
   //sum and product
     function sum(num){
        let sum =0;
        for(let i=0; i<num.length; i++){
         sum  = sum + num[i];
        }
        return sum;
     }
     function multiply(num2){
        let prod =1;
        for(let i=0; i<num2.length; i++){
            prod =prod * num2[i];
        }
        return prod;

     }
    //reverse
    function reverse(str){
        let reverse= "";
for(var i= str.length-1; i>=0; i--){
 reverse = reverse + str[i];
}
return reverse;
    }


function findlongest(words){
let longest =0;
 for(leti=0; i<words.length; i++){
if(words[i].length> longest)
longest = words[i].length;
 }
 return longest;
}


function filterlongestword(word, i){
    let filterlong =[];
    for(let j=0 ;j< word.length; j++){
   if(word[j].length >i)
   filterlong.push(word[j]);

    }
    return filterlong;
}

function computeSumOfSquares(numbers) {
    return numbers.reduce((accum, current) => accum + (current **2),0);
   
  }

  function odd(num){
for(let i=0; i<num.length; i++){
    if(num[i] %2 !==0){
        console.log(num[i]);
    }
}
  }

  function sumofsquare(num){
    let sum=0;
    for(let i=0; i<num.length; i++){
        if(num[i] %2===0){
     sum +=  num[i] **2;
        }
    }
    return sum;
  }
//  using reduce implement sum and multipy
function sum(num){
    return num.reduce((accum , current)=>
     accum + current, 0);
}
// multiply
function multiply(num){
return num.reduce((accum, currecnt)=> accum * current,1);
}

// fib
   function fib(num,a ,b){
    let fib =[];
    fib[0] =a;
    fib[1]=b;
    for(let i=2; i<num;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    console.log(fib.join (', '));
}
