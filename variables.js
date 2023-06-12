var c = document.querySelector(".canvas")
var cc=c.getContext("2d");
var p1score=document.querySelector(".p1score")
var p2score=document.querySelector(".p2score")
var left = document.querySelector(".up")
var right = document.querySelector(".down")

let pw=5;
let ph=50;
let p1x=0;
let p1y=0
let p2x=c.width-pw;
let p2y=c.height-ph;
let bx=c.width/2
let by=c.height/2
let bd=5
xv=yv=4

//computer
var p2v=3
