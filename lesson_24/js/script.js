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

let varBool = ``
console.log(typeof varBool)
console.log(typeof Boolean(varBool))
console.log(Boolean(varBool))

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

let resultPriorityExpl1 = 6 + 5*20 / +"10"
// 1. let resultPriority1 = 6 + 5*20 / 10
// 2. let resultPriority1 = 6 + 100 / 10
// 3. let resultPriority1 = 6 + 10
// 4. let resultPriority1 = 16
console.log(resultPriorityExpl1)

let num = 9
let resultPriorityExpl2 = 2 + 3 * 10 / ++num
// 1. let resultPriorityExpl2 = 2 + 3 * 10 / 10
// 2. let resultPriorityExpl2 = 2 + 30 / 10
// 3. let resultPriorityExpl2 = 2 + 3
// 4. let resultPriorityExpl2 = 5
console.log(resultPriorityExpl2)

let resultCompar1 = 5 >= 6
console.log(typeof resultCompar1)
console.log(resultCompar1)

let resultCompar2 = 5 == "5"
console.log(typeof resultCompar2)
console.log(resultCompar2)

let resultCompar3 = 5 != "5"
console.log(typeof resultCompar3)
console.log(resultCompar3)

let resultCompar4 = 5 !== "5"
console.log(typeof resultCompar4)
console.log(resultCompar4)

let resultCompar5 = 5 === "5"
console.log(typeof resultCompar5)
console.log(resultCompar5)

let a = 5
let b = "5"
let resultCompar = a === b
console.log(resultCompar)

let varUnaryNo = !""
console.log(typeof varUnaryNo)
console.log(varUnaryNo) 

// let varOr = 0 || ''
// console.log(typeof varOr)
// console.log(varOr)

// let varOr = '' || 0
// console.log(typeof varOr)
// console.log(varOr)

// let varOr = 0 || 5
// console.log(typeof varOr)
// console.log(varOr)

// let varOr = 5 || 0
// console.log(typeof varOr)
// console.log(varOr)

let varOr = 0 || null
console.log(typeof varOr)
console.log(varOr)

// let varAnd = 0 && 5
// console.log(typeof varAnd)
// console.log(varAnd)

// let varAnd = 1 && 5
// console.log(typeof varAnd)
// console.log(varAnd)

let varAnd = 1 && 0
console.log(typeof varAnd)
console.log(varAnd)

let varHappyBirthday = `today`
if(varHappyBirthday === `today`){
	console.log('Congratulations!')
}

// let varIfOne = "1"
// let varIfTwo = 3
// let varIfThree = 3
// let varIfFour = 4
// if (varIfTwo === 2 || varIfOne > 3 && varIfThree < 4 || varIfFour > 6){
// 	// 1. (false || false && true || false)
// 	// 2. (false || false || false)
// 	// 3. (false)
// 	console.log("TRUE");
// }
// else{
// 	console.log("FALSE");
// }

let varIfOne = "1"
let varIfTwo = 3
let varIfThree = 3
let varIfFour = 7
if (varIfTwo === 2 || varIfOne > 3 && varIfThree < 4 || varIfFour > 6){
	// 1. (false || false && true || false)
	// 2. (false || false || false)
	// 3. (false)
	console.log("TRUE")
}
else{
	console.log("FALSE")
}

let varIfQues = 10 > 5 ? "10 more 5" : "10 no more 5"
console.log(varIfQues)

let varSomeStr = "Hello World!"
for (let i = 0; i < varSomeStr.length; ++i){
	console.log(varSomeStr[i])
}

let varArrayUndef = []
console.log(Array.isArray(varArrayUndef))
console.log(typeof varArrayUndef)

let varArr = ['10', "Ugin", true, "Hello!"]

for (let i = 0; i < varArr.length; ++i){
	console.log(varArr[i]);
}

varArr.forEach((value, index) => {
	console.log(index)
	console.log(value)
})

varArr.push("User")
console.log(varArr.length)
console.log(varArr.includes('10'))

!varArr.includes('Svitlana') ? varArr.push('Svitlana') : null
console.log(varArr)

let usersNames = ["Вася", "Петро", "Ілдика"]
let users = ""
usersNames.forEach((item, index) => {
	users += item
	index !== usersNames.length - 1 ? users += ', ' : null
})
console.log(users)

function calcSum(a = 0, b = 0){
	const result = a + b 
	showMessage(result)
}

function showMessage(someMessage = ""){
	console.log(someMessage);
}
calcSum(56545452, 46464646)

function calcSumReturn(a = 0, b = 0){
	return a + b
}

let varSum = calcSumReturn(4545454, 4545454)
showMessage(varSum)

let someVar
let someFuncVar
function someFunc() {
	someVar = 10
	someFuncVar = function(message){
		console.log(message)
	}	
}
someFunc()
someFuncVar("Hello!")
console.log(someVar)

let some = (text) => console.log(text)

let someText = ""
someText += `<div>`
someText += `<a href="contacts.html"></a>`
someText += `</div>`
console.log(someText)

const text = "Hello!"
let template = ``

function createText(someText){
	for(let i = 0; i < someText.length; ++i){
		const item = someText[i]
		template += `<span style="animation-delay: 0.${i}s">${item}</span>`
	}
}
createText(text)

const page = document.querySelector('.page')
page.insertAdjacentHTML("beforeend", template)



// ------------------------- Homework ----------------------------------

// #1 ------------------------------------------------------------------
// Що потрапить в консоль?
console.log('---------------- Завдання №1 --------------------');

let var1 = 0 // об'являємо змінну та присвоюємо їй значення 0
++var1 // інкремент (збільшення) змінної на 1 
if(var1/* так як значення змінної 1, то в булевому значенні це true*/){
	console.log(var1) //виводимо в консоль значення змінної - 1
}

// #2 ------------------------------------------------------------------
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.
console.log('---------------- Завдання №2 --------------------');

for (let i = 0; i < 10; ++i){
	console.log(`Пункт №${i+1}`)
}

// #3 ------------------------------------------------------------------
// Що потрапить в консоль ?
console.log('---------------- Завдання №3 --------------------');

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	// 1. if (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20")
	// 2. if (40 <= 10 (false) ||  15 < 5 (false) && 10 <= "10" (true) || 20 === "20" (false))
	// 3. if (false ||  false || false)
	// 3. if (false)
	console.log('000') // в консоль нічого не виведе
}else {
	console.log(`Результат виразу false, тому блок умовного вітвлення оминається`)
}

// let temp = 20 === "20"
// console.log(typeof temp);
// console.log(Boolean(temp));

// #4 ------------------------------------------------------------------
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку 
console.log('---------------- Завдання №4 --------------------');

function calcDiv(a = 0, b = 0){
   let numA = parseFloat(a)
	let numB = parseFloat(b)
	if (numB == 0) {
		return `Ділити на нуль не можна!`
	}
	else if (!((Boolean(numA)) && (Boolean(numB)))){
		return `Некоректні дані для обчислення`
	}
	else {
		return `Результат ділення: ${a / b}`
	}
}

// console.log(calcDiv( '', ''))
console.log(calcDiv( 100, 0))
// console.log(calcDiv( 100, ''))
// console.log(calcDiv( 256, 6))
// console.log(calcDiv( 6, 20))
console.log(calcDiv( "sd", 20))
console.log(calcDiv( 100, 20))

// #5------------------------------------------------------------------
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
console.log('---------------- Завдання №5 --------------------');

let arrayData = ["Hello,", true, 10, "Alex", "World!"] 
for(let i = 0; i < arrayData.length; ++i){
	if (arrayData[i] == '10'){
		console.log(arrayData[i]);
	}
}