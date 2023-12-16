let score = 4
function one(){
    let score = 0;
    console.log(score)
}

function two(){
    let score = 3;
    console.log(score)
}
function three(){
    
    console.log(score)
}
// one()
// two()
// three()
// console.log(score)  //score is not define


function outerFun(){
    let outerVar = 'I am at scope level 1'
    function innerVar(){
        let innerVarr = 'I am at scope level 2'
        console.log(outerVar)
    }
    console.log(innerVarr)
    innerVar()
}
// outerFun()

const myGlobal = 0;
function fun(){
    const val1 = 1;
    console.log(myGlobal)
    function innertFun(){
        const val2 = 2
        console.log(val2, val1, myGlobal)
        function anotherinnerFun(){
            const val3 = 3
            console.log(val3, val2, val1, myGlobal)
        }
        anotherinnerFun()
    }
    innertFun()
}
fun()


//  clouser
function superFun(){
    let outerval = 'I am outer'
    function minorfun(){
        console.log(outerval)
    }
    minorfun()
}
superFun()
