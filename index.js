//1. JavaScript Console API

//console.log("hello world", 4 + 6, "Another Log");
//console.warn("this is a warning");
//console.error("this is an error");

//2. Ways To Print In JavaScript

//console.log("hello world");
//document.write("hello there");
//alert("hi");

//3.JavaScript Variables

// var number1=20;
// var number2=30;
// console.log(number1+number2);

//4. Datatypes in JavaScript
// Primitive Datatypes: Number,String,Undefined,null,boolean,Symbol
// Reference Datatypes: Array and Objects

//Number

var num1 = 44;
var num2 = 66.6;

// console.log(num1);

//String

var str1 = "this is a string";
var str2 = "this is also astring";

// console.log(str1);

//Object

var marks = {
    ravi: 34,
    subham: 66.6,
    Mahenjeeb: 71.67
}

// console.log(marks);

//boolean

var a = true;
var b = false;

// console.log(a, b);

//undefined

var n;

// console.log(n);

//Array

var arr = [1, 2, "Mondanika", 4, 5];

// console.log(arr);

//4.Operators In JavaScript
// Logical and Assignment operator are same as java

var a = 100;
var b = 10;

// console.log("this is result of a+b is ",a+b);
// console.log("this is result of a-b is ",a-b);
// console.log("this is result of a/b is ",a/b);
// console.log("this is result of a*b is ",a*b);
// console.log("this is result of a%b is ",a%b);

//5. Functions in JavaScript

function avg(a, b) {
    return (a + b) / 2;
}
// console.log(3, 4);
//  console.log(15,16);

// 5. Conditionals in JavaScript

// var a = 8
// if(a>4)
// {
// console.log("you are not a kid");
// }
// else
// {
//     console.log("you are not a kid");
// }

//6. Arrays,conditional statement,break and continue is same as to the Java Concept

//7. Araay methods
let myarr = ["mahi", "bintan", 1, 2, 5];;

// myarr.pop();
// myarr.push("mahenjeeb");
// myarr.shift();
// myarr.unshift("hello");
const newlen = myarr.unshift("hey");

//8.String methods
let mystr = "Mahenjeeb is a good boy";
// console.log(mystr.length);
// console.log(mystr.indexOf("Mahenjeeb"));
// console.log(mystr.lastIndexOf("o"));
// d = mystr.replace("Mahenjeeb","Bintan");
// console.log(d,mystr);

//9.Dates
let D = new Date();
// console.log(D.getDate());
// console.log(D.getFullYear());
// console.log(D.getTime());
// console.log(D.getMinutes());
// console.log(D.getSeconds());
// console.log(D.getMonth());

//11. DOM manipullation

let ele = document.getElementById('click');
// console.log(ele);
let eleClass = document.getElementsByClassName('Container');
// eleClass[0].style.background = "yellow";
// eleClass[0].classList.add("bg-primary");
eleClass[0].classList.add("test-sucess");
// console.log(ele.innerText);
// console.log(ele.innerHTML);

// console.log(eleClass[0].innerText);
// console.log(eleClass[0].innerHTML);

//create a child element inside a html tag

// t = document.getElementsByTagName("div");
// console.log(t);
// c = document.createElement('p');
// c.innerText = "this is a created para";
// t[0].appendChild(c);
// c2 = document.createElement('b');
// c2.innerText = "this is a created para";
// t[0].replaceChild(c2,c);

// query selector in document

// sel = document.querySelector('.Container');
// // console.log(sel);
// sel = document.querySelectorAll('.Container');
// console.log(sel);

//Events in JavaScript

// function clicked(){
    
//     console.log("the button was clicked");
// }
// window.onload = function()
// {
//     console.log("the document was loaded");
// }
// firstContainer.addEventListener('click',function()
// {
//     document.querySelectorAll('.Container')[1].innerHTML="<b> we have clicked </b>"
//     console.log("clicked the button");
// })
// firstContainer.addEventListener('mouseover',function()
// {
//     console.log("mouse over");
// })
// firstContainer.addEventListener('mouseout',function()
// {
//     console.log("mouse out");
// })
// prevHTML = document.querySelectorAll('.Container')[1];
// firstContainer.addEventListener('mouseup',function()
// {
//  document.querySelectorAll('.Container')[1] = prevHTML;
//     console.log("mouse up");
// })
// firstContainer.addEventListener('mousedown',function()

// {
//     document.querySelectorAll('.Container')[1].innerHTML="<b> we have clicked </b>"
//     console.log("mouse down");
// })

//set timeout and set interval
sum =(a,b)=>{
return a+b;
}

// login =()=>{
//     document.querySelectorAll('.Container')[1].innerHTML="<b> set interval fired </b>"
//     console.log("logged in");
// }
//to stop setInterval and setTimeout we use clearInterval(clr)/clearTimeout(clr)
// clr = setTimeout(login,10000);
// clr = setInterval(login,2000);

//JavaScript Local Storage

// localStorage.setItem('name','mahenjeeb')
// localStorage
// localStorage.getItem('name')
//localStorage.removeItem('name')
//localStorage.clear()


//JSON

// obj = {name: "mahenjeeb", length: 1,a:{this:"that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);

// par = JSON.parse(`{"name":"mahenjeeb","length":1,"a":{"this":"that"}}`);
// console.log(par);

