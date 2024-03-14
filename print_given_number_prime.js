// Question-->Write a JavaScript program to determine if a given number is prime or not.


let num=16
let start=1
while(start<=num){
    start++
    if(num%1 ===0 && num%2 !==0){
        console.log("prime");
        break
    }
    else{
        console.log("not prome number");
        break
    }

    
}
