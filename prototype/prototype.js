let myHero = ["thor", "spiderman"]
let dcHero = ["batman","flash", "superman"]
let heroPower = {
    thor:"hammer",
    spiderman: "sling",


    getSpiderPower: function(){
      console.log(`spidy power is ${this.spiderman}`)
    }

}
Object.prototype.govind = function(){
    console.log(`govind is present in all object`)
}
console.log(myHero.govind())
console.log(heroPower.govind())

Array.prototype.heygovind = function(){
    console.log(`Hey govind hii`)
}
console.log(myHero.heygovind())
// console.log(heroPower.heygovind())


// inheritance

const User = {
    name: "topname",
    email: "topemail"
}
const Teacher = {
    makevideo:"govind",
}
const TeacherAssistance = {
    makeAssignment:"anil"
}
const TeacherSupport = {
    isAvilable:false,
    __proto__:TeacherAssistance,
    
    
}
Object.setPrototypeOf(TeacherAssistance, Teacher)  // new away
console.log(TeacherSupport.isAvilable)


// 
String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`)
}
"govind    ".truelength()




