// array
// //array declare
let a=[1,2,3,4,5,6,7,8,9,0,'ankit']
console.log(a)

let b=new Array("abc",0)
console.log(b)

for(let i=0;i<12;i++)
{
    console.log(a[i])
}
//array accessing


a.push(6);
console.log(a)

a.pop()
console.log(a)

a.shift()
console.log(a)

a.unshift(9)
console.log(a)

let f=[1,2,3,4,5]
let g=[4,5,6,7,8]
let h=f.concat(g)
console.log(h)

let s=h.join("")
console.log(s)

h.reverse()
console.log(h)

console.log(h[62])

let arr=[1,2,3,4,5,6,7]

console.log(arr.slice(2,5))

arr.splice(3,1,9,23)
console.log(arr)

