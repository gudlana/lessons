"use strict"

let userAgeUndefined
console.log(typeof userAgeUndefined)
console.log(userAgeUndefined)

let userAgeNull =null
console.log(typeof userAgeNull)
console.log(userAgeNull)

let userAgeNumber = 10
console.log(typeof userAgeNumber)
console.log(userAgeNumber)

let userAgeInfinity = 10 / 0
console.log(typeof userAgeInfinity);
console.log(userAgeInfinity);

let result = 'Ugin' * 10
console.log(typeof result);
console.log(result);

let myAge = `42`
let myName = `Svitlana`
console.log(typeof myAge);
console.log(myAge);
console.log(typeof myName);
console.log(myName);
console.log(`Name: ${myName}, Age: ${myAge}`)

let someVar = ``
console.log(typeof someVar)
console.log(typeof Boolean(someVar))
console.log(Boolean(someVar))

let someString = "Hello World!"
console.log(typeof someString)
console.log(someString.length)

let someStringMassif = "Hello World!"
console.log(someString[6])

let someStringReg = "Hello World!"
console.log(someStringReg.toLocaleUpperCase())
console.log(someStringReg.toLocaleLowerCase())

let someStringSearch = `Hello world!`
console.log(someStringSearch.includes(`ll`))
console.log(someStringSearch.startsWith(`ll`))
console.log(someStringSearch.endsWith(`d`))
console.log(someStringSearch.slice(6,11))


let someStringReplace = `*Hello World!*`
someStringReplace = someStringReplace.replace(`*`, ``)
console.log(someStringReplace)

let someNumRound = 42.9
console.log(Math.floor(someNumRound))
console.log(Math.ceil(someNumRound))
console.log(Math.round(someNumRound))
let someNumAbs = -42.9
console.log(Math.abs(someNumAbs))
console.log(Math.random());
console.log(Math.min(1,2,-3))
console.log(Math.max(1,2,-3))

let someVarParseInt = `35.3px`
let someVarParseFloat = `35.3px`
let someVarResultParseInt = parseInt(someVarParseInt)
let someVarResultParseFloat = parseFloat(someVarParseFloat)
console.log(someVarResultParseInt)
console.log(someVarResultParseFloat)

let varOne = `20`
let varTwo = `10`

let varResMinus = varOne - varTwo
console.log(typeof varResMinus)
console.log(varResMinus)

let varResDiv = varOne / varTwo
console.log(typeof varResDiv)
console.log(varResDiv)

let varResMultip = varOne * varTwo
console.log(typeof varResMultip)
console.log(varResMultip)

let varResRemainder = varOne % varTwo
console.log(typeof varResRemainder)
console.log(varResRemainder)

let varResSumm = varOne + varTwo
console.log(typeof varResSumm)
console.log(varResSumm)

let varOneUnary = +"20"
let varTwoUnary = +"10"
let varSumUnary = varOneUnary + varTwoUnary
console.log(varSumUnary)

let varIcrement = 10
let varDecrement = 20
++varIcrement
--varDecrement
console.log(varIcrement)
console.log(varDecrement)
