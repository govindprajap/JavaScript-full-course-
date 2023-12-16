// try {
//     let x = undefined
//     console.log(x[0])
    
// } catch (error) {
//     console.log('error handling in catch')
// }finally{
//     console.log("always executed")
// }

//  class and object

class Product{
    // name;
    // price;
    // rating;
    #rating
    constructor(n,p,r){
        console.log('calling the constructor')
        this.name = n;
        this.price = p;
        this.rating = r;
//         // return 10 // if you are return primitive then it will be avoided in constructor
//         // return{x:10, y:20} // if you return non primitive then it will be return 
    }
    static custom(){
        console.log('static is calling')
    }
    getRating(){
        console.log(this.#rating)
    }
    setRating(r){
        if(r<0) return;
        this.#rating = r;
    }
    
    display(){
        console.log('display the current product', this.name, this.price, this.#rating)
    }
    
}
const p = new Product('iphone',15000,5.5)

console.log(p)
p.display()
Product.custom()
p.setRating(10)
p.getRating()


//  function constructor
// function Product(n,p,r){
//     this.name = n;
//     this.price = p;
//     this.rating = r;
    

// }
// const p = new Product("iphone",14000,4.5)
// console.log(p)

class ComplexNumber{
    #real;
    #imag;
    constructor(r,i){
        this.#real = r;
        this.#imag = i;

    }
    display(){
        console.log(this.#real, '+ i', this.#imag)
    }
}
const c1 = new ComplexNumber(2,3)
c1.display()
