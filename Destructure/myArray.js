const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]
// const threeArray = oneArray.concat(twoArray)
// console.log(threeArray)
// const threeArray = [...oneArray, ...twoArray]
// console.log(threeArray)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function onetest(){
//     console.log(arguments)
// }
// undefined
// onetest(1,2,3,4)

// function manyArguments(){
//     let args = Array.from(arguments)
//     let manyargs = args.map((e)=>e)
//     console.log(manyargs)
// }
// manyArguments(1,2,3)
// manyArguments(1,2,3,4,5)
// function manyargument(){
//     let args = Array.from(arguments);
//     let finalargs = args.map((e)=>e)
//     console.log(finalargs);
// }
// manyargument(1,2,3,4);


// ++++++++++++++++++++++++++++++++++++ REST
 function manyarguments2(...args){
    let finalsargs = args.map((e)=>e)
    console.log(finalsargs)
 }
//  manyarguments2(1,2,3,4,5)
const names = ["supername", "flash"]
const newnames = ["batmanes", ...names]
// console.log(newnames)
const skills = "pwskills"
// console.log([...skills])



// ++++++++++++++ set ++++++++++++++
// The set object let store unique value

const mySet = new Set();
// console.log(mySet.)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(5)

let myArray = [1,2,3,4]
const newSet = new Set((myArray)) 
// const newSet = new Set([...myArray]) 
newSet.add(5)
newSet.clear()
// console.log(newSet)

// ++++++++++++++++++++++++++++Set difference+++++++++++++++++++++++++++++++
function setDifference(setA, setB){
   return new Set([...setA].filter(el=>!setB.has(el)))

}
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3])
// console.log(setDifference(setA, setB))

// ++++++++++++++++++ Map+++++++++++
let myMap = new Map()
console.log(myMap.size)

let args = [
   [1, 'Mithun'],
   [2, 'bithun'],
   [31, 'Cithun'],

];
args.map((arrayItem)=>map.set(arrayItem[0], arrayItem[1]))



















