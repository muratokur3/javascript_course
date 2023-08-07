let firstName = "Murat";
let lastName = "OKUR";

let age = 25;
let isWorking = true;

const tcNo = 239133864782;
const dogumTarihi = 1999;

console.log(
  "Firs Name: " +
    firstName +
    " Last Name: " +
    lastName +
    " Age: " +
    age +
    " is Working " +
    isWorking +
    " Tc: " +
    tcNo +
    " Dt: " +
    dogumTarihi
);



// 0 - 100 dahil 
console.log("0-100: "+Math.floor(Math.random() * 100));
// 0 - 100 dahil değil
console.log("0-99: "+Math.floor(Math.random() * 100));

// 0 - 63 dahil
console.log("0-63: "+Math.floor(Math.random() * 64));
// 0 - 63 dahil değil
console.log("0-63: "+Math.floor(Math.random() * 63));

// 5 - 55 dahil
console.log("5-55: "+Math.floor((Math.random() * 50)+5));
// 5 - 55 dahil değil
console.log("5-55: "+Math.ceil((Math.random() * 49)+5));

// 7 - 17 dahil
console.log("7-17: "+Math.floor((Math.random() * 10)+7));
// 7 - 17 dahil değil
console.log("7-17: "+Math.ceil((Math.random() * 9)+7));

// -25 - 0 dahil
console.log("-25-0: "+Math.floor((Math.random() * 25)-25));
// -25 - 0 dahil değil
console.log("-25-0: "+Math.ceil((Math.random() * 25)-25));

// -30 - 30 dahil
console.log("-30-30: "+Math.floor((Math.random() * 60)-30));
// -30 - 30 dahil değil
console.log("-30-30: "+Math.ceil((Math.random() * 60)-30));

