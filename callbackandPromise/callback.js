// function h(x, fn){
//     console.log(x*x)
//     fn()
// }
// h(10, function(){
//     console.log("done with call back")
// })
// console.log("start")
// setTimeout(function f(){
//    console.log("Timer done")
// },3000)
// console.log("end📞")

console.log("start")
setTimeout(function f(){
    console.log("Timer done 1")
 },8000)
 setTimeout(function f(){
    console.log("Timer done 2")
 },0)
console.log("end📞")
for(let i = 0; i<=5; i++){
    console.log(i)
}


