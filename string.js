let firstString="Javacript öğrenmeye başladık eğlenceli ve verimli geçiyor.";
let centerString='Javacript öğrenmeye başladık eğlenceli ve verimli geçiyor.';
let lastString=`Javacript öğrenmeye başladık eğlenceli ve verimli geçiyor.`;
// console.log(firstString.length);
// console.log(firstString.slice(10, 23));
// console.log(centerString.substring(12,30));
// console.log(lastString.substr(12,30));


// let firstToString="Bu gün 18 haziran 2023 pazar günü eğitim tüm hızıyla verimli bir şekilde devam ediyor.";
// let centerToString='Bu gün 18 haziran 2023 pazar günü eğitim tüm hızıyla verimli bir şekilde devam ediyor.';
// let lastToString=`Bu gün 18 haziran 2023 pazar günü eğitim tüm hızıyla verimli bir şekilde devam ediyor.`;

// console.log(firstToString.length);
// console.log(centerToString.slice(10, 23));
// console.log(lastToString.substring(19,30));
// console.log(lastToString.substr(12,30));


// let firstTreeString="Lorem ipsum dolor sit amet non elit.";
// let centerTreeString='Lorem ipsum dolor sit amet non elit.';
// let lastTreeString=`Lorem ipsum dolor sit amet non elit.`;

// console.log(firstTreeString.length);
// console.log(centerTreeString.slice(1, 23));
// console.log(lastTreeString.substring(20,12));
// console.log(lastTreeString.substr(4,30));


console.log(
    firstString.replace("eğlenceli","güzel")
);
console.log(lastString.replaceAll(" ",","));

console.log(centerString.indexOf("verimli"));
console.log(centerString.indexOf("0",9));

console.log(centerString.indexOf(" "), centerString.indexOf(" ")-1);

console.log(lastString.includes("ve"));
console.log(lastString.includes("veri"));
console.log(centerString.includes("veri"));
console.log(firstString.includes("veri"));

let firstName="Murat";
let LastName="OKUR";
let day="pazartesi"
let local="eve";

console.log(`Sevgili ${firstName} ${LastName},${day} günü ${local} gelmiştir` );

console.log(`\"ve\" kelimesinin index numarası: ${firstString.indexOf("ve")}`);

console.log();

console.log(
    "    Murat OKUR     ".trim()
);

console.log("MURAT okur".toUpperCase());
console.log("MURAT okur".toLowerCase());

