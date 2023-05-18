Array.prototype.even =function(){
return this.filter(num=>num%2===0);
};
Array.prototype.odd=function(){
    return this.filter(num=>num%2===1);
};
const Arr = [1,2,3,4,5,6,7,8];
console.log(Arr.even());
console.log(Arr.odd());