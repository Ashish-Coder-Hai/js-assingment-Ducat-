/*Question -->Write a JavaScript program to find the sum of all prime numbers less than
100.  */


let sp=1
let num=100

let sum=0

while(sp<=num){
    if(sp%2 ===0){
        sum=sum+sp
    }
    sp++
}
console.log(sum);
