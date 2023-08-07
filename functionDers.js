//argüman olarak verilen diziyi tersine çevrilmiş halini başka bir diziye atayan ve o diziyi dönene fonksiyon

// let sayilar=[9,8,7,6,5,4,3,2,1,0];

// const cevir=(gelenDizi)=>{

//     let yeniTersDizi=[];

//     let sayac=0;

//     for(let i=gelenDizi.length-1;i>=0;i--)
//     {
//         yeniTersDizi[sayac]=gelenDizi[i];
//         sayac++;
//     }
//     return yeniTersDizi;
// }

// document.write(cevir(sayilar));
// console.log(cevir(sayilar));

// dizi içerisindeki en büyük sayıyı dönen fonksiyon

// const buyukSayiBul=(dizi)=>{
//     let enBuyukSayi=0;
//     for(let i=0;i<10;i++){
//         if(enBuyukSayi<dizi[i])
//         {
//             enBuyukSayi=dizi[i];
//         }
//     }
//     return enBuyukSayi;
// }

//  let degerler=[12,567,354,6,23,19,3,54,1,0];

// console.log(buyukSayiBul(degerler));

// Dizideki isim ve soyisim bilgileri ayıran ve farklı dizilere atan fonksiyon
// const array2=["Ürüncan", "Tunç","Ali","Yılmaz","Ertan" ,"Eröksüz","Orkun" ,"Durmaz"];

// const isimSoyisim =(arrayTest)=> {
//     const arrayName=[];
//     const arraySurName=[];
//     const arraySonuc=[];
//     let sayac=0;
//     for(let counter=0; counter<arrayTest.length;counter+=2)
//     {
//         arrayName[sayac]=arrayTest[counter]
//         arraySurName[sayac]=arrayTest[counter+1];
//         sayac++;
//     }
//     arraySonuc[0]=arrayName;
//     arraySonuc[1]=arraySurName;
//     return arraySonuc;
//     }
//     console.log(isimSoyisim(array2));

// dizideki tek sayıları ve çift sayıları farklı dizilere atan ve iki diziyi twek dizi içerisinde dönen fonksiyon

// let sayilar=[9,8,7,6,5,4,3,2,1,0,9];

// const tekMiCiftMi=(dizi)=>
// {
//     let sayacTek=0;
//     let sayacCift=0;
//     const tekSayilar=[];
//     const ciftSayilar=[];
//     const diziler=[];
//     for (let i = 0; i < dizi.length; i++) {
//         if((!dizi[i]%2))
//         {
//             ciftSayilar[sayacCift]=dizi[i];
//             sayacCift++;
//         }
//         else{
//             tekSayilar[sayacTek]=dizi[i];
//             sayacTek++;
//         }
//     }

//     diziler[0]=ciftSayilar;
//     diziler[1]=tekSayilar;
//     return diziler;
// }
// console.log(tekMiCiftMi(sayilar));

// let sayilar=[0,1,2,3,4,5,6,7,8,9];

// for(let index=sayilar.length;index>=0;index--)
// {
//     document.write(sayilar[index])
// }

// const students = ["Ertan","Eröksüz","Murat","Okur","Mahir","Kurşun","Orkun","Durmaz","Ürüncan","Tunç"];

// for (let index = 0; index < students.length; index++)
//  {

//     document.write(students[index]+"<br>");

// };

// const sayilar = [2, 3, 4, 5, 688, 11, 2, 0, 33, 77, 345, 12];

// const tekCiftBul = (gelenDizi) =>
//  {
//   let tek = [];
//   let cift = [];
//   for (let index = 0; index < gelenDizi.length; index++)
//   {
//     if (!(gelenDizi[index] % 2))
//     {
//       cift.push(gelenDizi[index]);
//     }
//     else tek.push(gelenDizi[index]);
//   }
//   return [tek, cift];
// };

// document.write(tekCiftBul(sayilar));

// const ogrenciler = ["Canbulat mehmet Onarok", "Taha  Sefik", "Hulya Celebi", "Goktug Ertekin"];

// const nameAndSurname = (students) => {

//     let isim = [];

//     let soyisim = [];

//     for (let i = 0; i < students.length; i++) {
//         if(students[i].split(" ").length>2 )
//         {
//             isim.push(students[i].split(" ")[0]+" "+students[i].split(" ")[1]);
//              soyisim.push(students[i].split(" ")[2]);
//         }
//         else
//         {
//             isim.push(students[i].split(" ")[0]);
//             soyisim.push(students[i].split(" ")[1]);
//         }
//     }
//       return [isim, soyisim]
// }

// document.write(nameAndSurname(ogrenciler));

// let karmaDizi=["Murat","4","7","Ürüncan","34","56","Göktuğ",[4,8,16,24]];

// for(const eleman of karmaDizi)
// {
//     for(const ele of eleman)
//     {
//         document.write(ele+"<br>")
//     }
//     document.write("<br>bitti<br>")
// }

