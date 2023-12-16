function createPromise(){
    return new Promise(function exes(resolve, reject){
        setTimeout(function f(){
            console.log("timer done")
            // resolve("done")
            reject("done")
        },3000)
    })
}
console.log("start")
let x = createPromise()
console.log("got a new promise")
x.then(function f(value){
    console.log("promise done", value)
}).catch(function g(value){
    console.log("handled", value)

}).finally(function v(){
    console.log("finally")
})
console.log("end")