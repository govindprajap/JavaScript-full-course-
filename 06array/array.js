const myArr = [0,1,2,3,4,5,6]
console.log(myArr[1])
console.log(myArr.length)
const myHero = new Array(1,2,3,4)
console.log(myHero)
myArr.push(90)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(100)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(22))
console.log(myArr.indexOf(3))
const myn1 = myArr.slice(1,3)
console.log(myn1)
const mynew2 = myArr.splice(1,3)
console.log(mynew2)


const marvelHero = ["thor", "Iroman", "spiderman"]
const dc = ["superman", "batman"]
// marvelHero.push(dc)
// console.log(marvelHero)
// const newHero = marvelHero.concat(dc)
// console.log(newHero)
const newHero = [...marvelHero, ...dc]
console.log(newHero)
const name = "govind"
const newname = Array.from(name)
console.log(newname[2])
let score = 200
let score1 = 300
let score3 = 400
console.log(Array.of(score,score1,score3))





  


