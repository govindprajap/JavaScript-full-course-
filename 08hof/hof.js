const powerTwo = (n)=>{
    return n ** 2

}
function powerCube(powerTwo, n){
    return powerTwo(n) * n
}
console.log(powerCube(powerTwo, 3))

function sayHello(){
    return ()=>{
        console.log("govind")
    }
}
let guessValue = sayHello();
console.log(guessValue)
guessValue()

const higherOrder = n=>{
    const oneFun = m =>{
        const twoFun = p =>{
            return n + m + p
        }
        return twoFun
    }
    return oneFun

}
console.log(higherOrder(9)(3)(4))
const myNum = [2,3,4,5,6,7,89]
const sumArray = arr =>{
    let total = 0;
    arr.forEach(function(el){
        total+=el

    });
    return total
}
console.log(sumArray(myNum))
function oneMoreHello(){
    console.log("govind")
}
// setInterval(oneMoreHello, 1000)
setTimeout(oneMoreHello, 5000)