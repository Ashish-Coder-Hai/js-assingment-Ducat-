// Question-->Write a JavaScript program to find the sum of odd numbers from 1 to 50.


let sp=1
let num=50

let sum=0
while(sp<=num){
    if(sp%2 !=0){
        sum=sum+sp
    }
    sp++
}
console.log(sum);