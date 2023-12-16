// const myNum = [1,2,3,4,5,]
// const sumArray = (arr)=>{
//     let total = 0;
//     arr.forEach(function(el) {
//         total+= el

//     });
//    return total;

// }
// console.log(sumArray(myNum))

const arr = [2,3,4]
arr.forEach(function(element, index, array){
    // console.log(index, element, array)
})
arr.forEach((element, index, array)=>{
    // console.log(index, element, array)


})
const hero = ["najraj", "doga", "dhura", "maniraj"]
hero.forEach((h)=>{
    // console.log(h.toUpperCase())

})
arr.map((element, index, array)=>{
    // console.log(index, element, array)

})
hero.map((v)=>{
    // console.log(v.toUpperCase())
})

// filter
const heroWithRaj = hero.filter((h)=>{
   return h.endsWith("raj")
})
// console.log(heroWithRaj)

// shoping cart

// reduce
const cardBill = [200, 300, 400]
const sumOFCardBill = cardBill.reduce((prev, curr)=>

     prev + curr,0)
// console.log(sumOFCardBill)
// every

// const gameScore = [210, 300, 350, 400]
// const gameScoreCheck = gameScore.every((v)=>typeof v === 'number')
// console.log(gameScoreCheck)
// 

// find
// const gameScore = [210, 300, 350, 400]
// const above200 = gameScore.find((h)=> h>210)
// console.log(above200)



