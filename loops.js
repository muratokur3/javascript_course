
// let name=prompt("Adınız?");
// let sinavsayisi=Number(prompt("sinav sayısını gir."))
// let sinavlar=[sinavsayisi];
// let sayac=0;
// let ortalama=0;
// let toplam=0;

// while(sayac<sinavsayisi)
// {
//     sinavlar[sayac]=Number(prompt(`${sayac+1}. sınavı gir`));
//     sayac++;
// }


// for(let i=0;i<sinavlar.length;i++)
// {
//     toplam +=sinavlar[i];
// }
// ortalama=toplam/sinavsayisi;

// document.write(name+" sınav durumunuz");
// if(ortalama>=85 && ortalama<=100)
// {
//     document.write("AA")
// }
// else if(ortalama>=70 && ortalama<85)
// {
//     document.write("BB")
// }
// else if(ortalama>=55 && ortalama<70)
// {
//     document.write("CC")
// }
// else if(ortalama>=50 && ortalama<55)
// {
//     document.write("DD")
// }
// else if(ortalama>0 && ortalama<50)
// {
//     document.write("FF")
// }
// else document.write("GR")



// let sayi=Number(prompt("sayı gir"));
// let toplam=0;
// let faktoriyel=1;

// for(let i=1;i<=sayi;i++)
// {
//     faktoriyel=faktoriyel*i;
//     document.write(i+"<br>");
// }
// document.write("->"+faktoriyel);




// let hafta=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma"];

// hafta[5]="Cumartesi";
// document.write(hafta);
// document.write(hafta.length);

// hafta.push("pazar");

// document.write("<br>"+hafta);

// hafta.pop();
// document.write("<br>"+hafta);

// document.write("<br>"+hafta.pop());
// document.write("<br>"+hafta);

// document.write("<br>"+hafta.shift());
// document.write("<br>"+hafta);

// delete hafta[2];

// let sehirler=["İstanbul","Ankara","İzmir","Bursa","Eskişehir","İzmir"];

// console.log(

//     sehirler.join(",\n")
// );

// console.log(

//     sehirler.join(" ")
// );

// const cumle="Elma, Armut, Muz, Kiraz, Karpuz";

// console.log(
//     cumle.split(", ")
// );

// console.log(
//     cumle.split("a")
// );

// console.log(
//     sehirler.indexOf("İzmir")
// );

// console.log(
//     sehirler.indexOf("İzmir")
// );

// sehirler.splice();

// let ogrenciler=[
//         "Hülya",85,true,
//         "Murat",40,false,
//         "Pınar",50,true,
//         "Mahir",60,true,
//         "Tolga",30,false,
//         "Ahmet",70,true,
//         "Ayşe",20,false,
//         "Veli",40,false,
//         "Merve",55,true,
//         "Ali",0,false
// ]
// //Ekleme
// ogrenciler.splice(12,0,"Samet",45,false);
// ogrenciler.splice(15,0,"Mehmet",60,true);
// ogrenciler.splice(18,0,"Bahar",60,true);
// ogrenciler.splice(21,0,"Aykut",29,false);

// //Silme
// ogrenciler.splice(6,3);
// ogrenciler.splice(12,3);
// ogrenciler.splice(15,3);
// ogrenciler.splice(18,3);

// //Güncelleme
// ogrenciler.splice(1,1,90);
// ogrenciler.splice(18,1,"Derya")
// ogrenciler.splice(10,2,70,true)
// ogrenciler.splice(25,2,49,false)

// ogrenciler.indexOf("Ali")
// ogrenciler.splice(27,6,"Yahya",34,false,"Ramazan",65,true);
// ogrenciler.splice(24,6,"Banu",45,false,"Ferhat",22,false);
// ogrenciler.splice(18,6,"Serkan",70,true,"Zeynep",40,false);
// ogrenciler.splice(12,4,"Kaya",100,true,"Ela");

// // document.write(ogrenciler.indexOf("Bahar"));
// let x=0;
// for(let i=0;i<ogrenciler.length;i=i+3){
// document.write((x++)+". "+ogrenciler[i]+" "+ogrenciler[i+1]+" "+ogrenciler[i+2]+"<br>");

// }

let ogrenciler = [
    "Hülya",
    "Murat",
    "Pınar",
    "Mahir",
    "Tolga",
    "Ahmet",
    "Ayşe",
    "Veli",
  ];
  console.log("While");
  
  let sayac = ogrenciler.length - 1;
  while (sayac >= 0) {
    console.log(sayac + 1 + ". -> " + ogrenciler[sayac]);
    sayac--;
  }
  console.log("For");
  
  for (let index = ogrenciler.length - 1; index >= 0; index--) {
    console.log(index + 1 + ". -> " + ogrenciler[index]);
  }
  console.log("While tek");
  
  
  let i = 1;
  while (i < ogrenciler.length) {
    
      console.log(i + ". -> " + ogrenciler[i]);
    
    i+=2;
  }
  
  console.log("for tek");
  
  for (let index = 1; index < ogrenciler.length; index+=2) {
    
      console.log(index  + ". -> " + ogrenciler[index]);
    
  }
  