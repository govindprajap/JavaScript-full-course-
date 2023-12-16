let pattern = 'pw'
let rejexOne = new RegExp(pattern)
let flag = 'gi'
let rejexTwo = new RegExp(pattern, flag)
let rejexThree = /pw/gi
const stringTwocheck = 'pw is gorowing at pw dfkjhdflbn pw jgrhdjf pw hghgbjdhhdv  pq pw'
const result = rejexThree.test(stringTwocheck)
console.log(result)
const another = stringTwocheck.match(rejexThree)
console.log(another)