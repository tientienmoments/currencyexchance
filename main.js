//exchange ratio
//from currency (usd)
//to currency (vnd)
//amount 300)()

//let amount = prompt  ("how much do you want to exchange")
// console.log("aaa",amount)


// var a = 0 let a = 0; a =9. const a =0; always = 0;


// const exchangeRate = 23208;


// let amountVND = prompt("How much VND?"); //get from user
// //alert("You just input " + amountVND + " VND")
// console.log("Amount of input VND: " + amountVND)

// let receiveUSD = amountVND / exchangeRate;
// // console.log("Amount of receive USD: " + parseInt(receiveUSD))
// //parseint lam tron so nguyen

// function test(testParameter) {
//     console.log("Amount of receive USD: " + testParameter.toFixed(2))
// }

// test(receiveUSD)
// //-----usd to vnd

// let anountUSD = prompt("how much USD");
// console.log("Amount of input USA: " + amountUSD)

// let receiveVND = amountUSD * exchangeRate;

// function testexchange(testexchange) {
//     console.log("Amount of receive VND: " + testexchange.toFixed(2))
// }

// testexchange (receiveVND)
// 

const exchangeRateUsd = 23208;
const exchangeRateEuro = 27000;
let unit = prompt("kind of money to change usd or euro ")
if (unit === "usd") {
    let currency = prompt("typpe 1: VND to USD /type 2: USD to VND") //prompt value input from user - training user
    if (currency === '1') {
        // 1st get amount of money from user
        let unitVnd = prompt("How much VND to change: ")

        // 2nd output the receive money
        let receiveUSD = unitVnd/ exchangeRateUsd;
        console.log("You get: " + formatCurrency("usd",receiveUSD.toFixed(2))
    } else if (currency === '2') {
        let unitUsd = prompt("How much USD to change: ")
        let receiveVND = unitUsd * exchangeRateUsd;
        console.log("You get: " + formatCurrency("vnd",receiveVND.toFixed(2))
    } else {
        console.log('Not available')
    }
} else if (unit === "euro") {
    let currency = prompt("typpe 1: VND to Euro /type 2: Euro to VND") //prompt value input from user - training user
    if (currency === '1') {
        // 1st get amount of money from user
        let unitVnd = prompt("How much VND to change: ")

        // 2nd output the receive money
        let receiveEuro = unitVnd / exchangeRateEuro;
        console.log("You get: " + formatCurrency("euro",receiveEuro.toFixed(2))
    } else if (currency === '2') {
        let unitEuro = prompt("How much Euro to change: ")
        let receiveVND = unitEuro * exchangeRateEuro;
        console.log("You get: " + formatCurrency("vnd",receiveVND.toFixed(2))
    } else {
        console.log('Not available')
    }
} else {
    console.log('you need to enter the unit money')
}
function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}



// function vndToUsd(amountVnd) {
//     const convertedAmount = (amountVnd / exchangeRate).toFixed
//     return convertedAmount
// }

// const returnedFromFunctionCall = vndToUsd(23000);
// console.log(
//     "The value returned from the call to vndToUsd",
//     returnedFromFunctionCall
// );

//usd to vnd result  = amount * exchange ratio
//vnd to usd result = amount / exhange ratio
