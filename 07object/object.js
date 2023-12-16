// signleton

// object literal
// const mySym = Symbol("key1")
// const jsUser = {
//     name:"govind",
//     [mySym]:"mykey1",
//     age:23,
//     "fullName":"govind Prajapati",
//     location:"Jaipur",
//     email:"gkp3404@gmail.com",
//     isLoggedIn:false,
//     lastLoggedIn:["Monday","Saturday"]
// }

// console.log(jsUser.email)
// console.log(jsUser.fullName)

// console.log(jsUser["email"])
// console.log(jsUser[mySym])
// jsUser.email = "arvind@587"
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.email = "arvind@486"
// console.log(jsUser)
// jsUser.greating = function(){
//     console.log("hellow js user")
// }
// console.log(jsUser.greating)
// console.log(jsUser.greating())
// jsUser.greatingTwo = function(){
//     console.log(`hellow js user, ${this.name}`)
// }
// console.log(jsUser.greating)
// console.log(jsUser.greatingTwo())


// part 2 object
// const tinder = new Object()
//   tinder.id = "1234"
//   tinder.name = "shyam"
//   tinder.isLoggedIn = false
// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))


// const regularUSer = {
//     email:"some@gmail.com",
//     fullName:{
//         userfullName:{
//             firstName:"govind",
//             lastName:"prajapati"
//         }
//     }
// }
// console.log(regularUSer.fullName.userfullName.firstName)
// const obj = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = {...obj, ...obj2}
// const obj3 = Object.assign({}, obj, obj2)
// console.log(obj3)
// const user = [
//     {
//     id:1,
//     email:"gkp8748"
//     },
//     {
//         id:2,
//         email:"gkp8748"
//         },
//         {
//             id:3,
//             email:"gkp0988"
//             }
// ]
// console.log(user[2].email)


// destructure
const course = {
    name:"js in hindi",
    price:"999",
    courseTeacher:"Hitesh"
}
const {courseTeacher,name,price} = course
console.log(courseTeacher)
console.log(name)




