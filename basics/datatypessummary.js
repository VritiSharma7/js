// Primitive 

//7 types: String,Number,boolean,null,undefined,symbol,Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//Non primitive 

//arrays,objects,functions

const heros= ["shakitman", " doraemon" ,"doga"]
let myObj = {
      name:"vriti",
      age:20,

}

const myFunction = function(){
    console.log("hello");
}
//non-primitive ke datatypes ke object hoge datatype 


//concept of memory 

//stack(primitive), heap(non-primitive)[original value]

let myYoutubename ="vritisharma2005@gmail.com"

let anothername = myYoutubename
anothername="vriti"

console.log(myYoutubename);
console.log(anothername)

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

