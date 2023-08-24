// function

function hi(){
    console.log("hello,BABY");
}
hi();


function greet(){
    return "ankit";
}
a=greet()+" sharma";
console.log(a);


function add(a,b){
    console.log(a+b);
}
add(2,4);


function sqrt(x){
    return x*x;
}
a=sqrt(6);
console.log(a);


function dis(x)
{
    console.log(x);
}
dis("ankit");


function Lelo(x="hello"){
    console.log(x+x);
}
Lelo();



// arrow function
const sqrt1=(x)=>x*x;

const sum=(x,y)=>x+y;

const sum2=(x,y)=>{
    console.log('addind ${a} and ${y}');
    return x+y;
}

const sum3=(x,y)=>({sum:x+y,different:x-y});

let o1=sqrt1(7);
let o2=sum(7,2);
let o3=sum2(7,4);
let o4=sum3(7,1);
console.log(o1,o2,o3,o4);


