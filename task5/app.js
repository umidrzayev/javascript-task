let marks=100;

if(marks<0 || marks>100){
    console.log("the price is wrong")
}
else if(marks>=90 && marks<=100){
    console.log("S grade")
}
else if(marks>=80 && marks<=90){
    console.log("A grade")
}
else if(marks>=70 && marks<=80){
    console.log("B grade")
}
else if(marks>=60 && marks<=70){
    console.log("C grade")
}
else if(marks>=50 && marks<=60){
    console.log("D grade")
}
else if(marks>=40 && marks<=50){
    console.log("E grade")
}
else if(marks>=0 && marks<=40){
    console.log("Student has failed")
}
else{
    console.log("Invalid marks")
}