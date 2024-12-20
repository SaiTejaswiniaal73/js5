alert("hey give me a number to know given number is even or odd")
let number=prompt("Please enter one number");
let num=+number;
let reminder=num%2;
alert(reminder==0?"the given number is even":"the given number is odd")
alert("hey know shall we check relation among 2 number(greater,lessoer,equal)")
let num1=prompt("enter first number");
let num2=prompt("enter secound number");
let number1=+num1;
let number2=+num2;
alert(
    number1>number2?"1st number is greater then 2nd number":
    number2>number1?"secound number is greater then 1st number":
    number2==number1?"equal":"notequal");
