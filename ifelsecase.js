//:true :false

// let isDeleted = false;
// let isOnStock = true;
// let isActive = false;

// let fullName;
// fullName = "Orkun Durmaz";

// console.log(typeof isDeleted);
// console.log(isDeleted);

//conparison
// >, <, <=, >=, !=, == === !==

// let sum = (5 == 6);
// console.log(sum);
// console.log(6 == 6);
// console.log(6 > 6);
// console.log(2 < 6);
// console.log(6 <= 6);
// console.log(2 >= 6);

// console.log(5 === "5");
// console.log(5 == "5");
// console.log(5 != "5");
// console.log(5 !== "5");
// console.log(typeof "5");

//truthy, falsy values
// console.log(Boolean(35));
// console.log(Boolean(1));
// console.log(Boolean(-1));

//falsy
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// control statements
// let age =Number(prompt("sayı giriniz"));

// if (age > 13) {
//   document.write("Can pass");
// }
// else if(age > 24) {
//     document.write("Merhaba!");
// }
// else if(age > 30) {
//     document.write("Selam!");
// }
// else if(age > 45) {
//     document.write("Hi!");
// }
// else if(age > 1000) {
//     document.write("Okay!");
// }
// else {
//     document.write("BB");
// }

//40-50 aralığı S
//50-70 aralığı M
//70-90 aralığı L
//90-110 aralığı XL

// let kilo =Number(prompt("kilonuzu giriniz"));

// if(kilo>=40 && kilo<50)
// {
//     document.write("Bedeniniz S");
// }
// else if (kilo>=50 && kilo<70)
// {
//     document.write("Bedeniniz M");
// }
// else if (kilo>=70 && kilo<90)
// {
//     document.write("Bedeniniz L")
// }
// else if (kilo>=90 && kilo<110)
// {
//     document.write("Bedeniniz XL")
// }
// else
// {
//    document.write("Bedenininz bulunamadı.")
// }

// let kKullanici="Ertan95";
// let isim=prompt("isminizi giriniz");

// if(isim==kKullanici || isim==kKullanici.toLowerCase())
// {
// document.write("Hoşgeldin "+kKullanici);
// }
// else
// document.write("kayıtlı kullanıcı bulunamadı ");

// //expression vs statement
// 5 /* expression */
// 10 /* expression */
// "Orkun" /* expression */
// isDeleted /* expression */
// NaN, null, undefined /* expression */
// if() /* statement */
// return, const, let, for, while, forin, forof,

//ternary if
// const isAdult = age > 18
//     ? true
//     : false;

// age > 18
//     ? console.log("adult")
//     : console.log("underaged");

// if (age > 18) {
//     console.log("adult");
// }
// else {
//     console.log("underaged");
// }

//logical expression
// &&, ||

// true && true => true
// true && false => false
// false && true => false
// false && false => false

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// if(age > 12 && age < 18) {
//     console.log("buyuk cocuk");
// }

// if(isDeleted || !isActive){
//     console.log("Hesabinizi aktive edin!");
// }

// isDeleted && console.log("Bu hesap silinmistir");
// !isDeleted && console.log("Bu hesap silinmemistir");
// isDeleted || console.log("Bu hesap silinmemistir");

// let dayIndex = 7;

// switch (dayIndex) {
//     case 0:
//         console.log("Monday");
//         break;
//     case 1:
//         console.log("Tuesday");
//         break;
//     case 2:
//         console.log("Wednesday");
//         break;
//     case 3:
//         console.log("Thursday");
//         break;
//     case 4:
//         console.log("Friday");
//         break;
//     case 5:
//         console.log("Saturday");
//         break;
//     case 6:
//         console.log("Sunday");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Still invalid day index");
//         break;
//     default:
//         console.log("Invalid day index");
//         break;
// }

// sayı ile girilen değerin
//haftanın günü olarak text karşılığını veren switch örneği


//ismi girilen kişinin adını yazan  diyen...
// let isim = prompt("Lütfen adınızı giriniz");

// switch (isim) {
//   case "Murat":
//     document.write(isim);
//     break;
//   case  "Umut":
//     document.write(isim);
//     break;
//   case "canbulat":
//     document.write(isim);
//     break;
//   case "Ertan":
//     document.write(isim);
//     break;
//   case "Mahir":
//     document.write(isim);
//     break;
//   default:
//     document.write("toplantıda böyle biri yok");
//     break;
// }


// dizi içerisindeki her elemandan kaç tane var
// ismini ve sayısını yazdırmak istiyoruz.
// iki farklı dizi içerisinde barındırma


// let cars = ["Volvo", "Bmw", "Mercedes", "Volvo", "Ford", "Alfa","Bmw", "Volvo", "Mercedes", "Ford", "Volvo", "Alfa"];
// let aracAdet=[],sayilanAraclar=[];
// let arananDeger="", sayac=0;

// for(let i=0;i<cars.length;i++)
// {
//     let varMi=false;
//     arananDeger=cars[i];
//     for(let k=0;k<sayilanAraclar.length;k++)
//     {
//         if(sayilanAraclar[k]==arananDeger)
//         {
//             varMi=true;
//         }
//     }
//     if(varMi==false)
//     {
//         sayilanAraclar[sayac]=arananDeger;
//         aracAdet[sayac]=0;
//            for(let j=0;j<cars.length;j++)
//             {
//                 if(arananDeger==cars[j])
//                 {
//                     aracAdet[sayac]+=1;
//                 }
//             }
//         sayac++;
//     }
// }

// for(let i=0;i<sayilanAraclar.length;i++)
// {
//     document.write(sayilanAraclar[i]+" "+aracAdet[i]+"<br>")
// }



// dizi içerisindeki her elemandan kaç tane var
// ismini ve sayısını yazdırmak istiyoruz.
// tek dizi içerisinde barındırma

// let cars = ["Volvo", "Bmw", "Mercedes", "Volvo", "Ford", "Alfa","Bmw", "Volvo", "Mercedes", "Ford", "Volvo", "Alfa","Ford",];
// let aracAdet=[];
// let arananDeger="", sayac=0;

// for(let i=0;i<cars.length;i++)
// {
//     let varMi=false;
//     arananDeger=cars[i];
//     for(let k=0;k<aracAdet.length;k++)
//     {
//         if(aracAdet[k]==arananDeger)
//         {
//             varMi=true;
//         }
//     }
//     if(varMi==false)
//     {
//         aracAdet[sayac]=arananDeger;
//         sayac++;
//         aracAdet[sayac]=0;
//            for(let j=0;j<cars.length;j++)
//             {
//                 if(arananDeger==cars[j])
//                 {
//                     aracAdet[sayac]+=1;
//                 }
//             }
            
//         sayac++;
//     }
// }

// for(let i=0;i<aracAdet.length;i+=2)
// {
//     document.write(aracAdet[i]+" "+aracAdet[i+1]+"<br>")
// }



