function monthDays(n){
    if(n>12 || n<=0){
        return "Invalid month";
    }
    else if(n==2){
        return "29 days";
    }
   else if(n==4 || n==6 || n==9 || n==11){
    return "30";
   }
   else{
    return "30 days";
   }
}
let n = 3
answer = monthDays(n)
console.log(answer)