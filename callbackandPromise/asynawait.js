function createPromise(){
    return new Promise(function exes (resolve, reject){
        setTimeout(function f(){
            console.log(" timer done")
            resolve(10)
        },3000)
    })

}
async function consume(){
    // return 10;
    console.log("inside function")
    const responce = await createPromise()
    console.log("responce is ", responce)
}
// console.log(consume())
consume()

fetch("http://type.fit/api/quotes")
.then(function f(responce){
    return responce.json()
}).catch(function f(value){
    console.log(value)
})