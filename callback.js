
// const mesajVer = (ad,callback) => {
//   document.write(ad + " " +callback());
// };

// let isim = "Murat";

// mesajVer(isim, ()=>{return "selam"});

// const students = ["Ertan","Murat","Mahir","Orkun","Ürüncan"];

// const mesajYazdir=(array,callback)=>{ 
//     let newArray=[];

// for(let i=0;i<array.length;i++)
// {
//     newArray.push(callback(i,array[i]));
//     console.log(newArray[i]); 
// }
// }
// mesajYazdir(students,
//     (index,item)=>{
//                      return `${index+1}. Öğrenci: ${item}`
//                   }
// )


// functionyaziDuzenle()



// const fiyatlar=[100,400,566,234,1360,900,450,3580,1900];

// const fiyatGuncelle=(fiyatListesi,fiyatislemi,islemOrani)=>{
//     let guncelFiyatListesi=[];
//     for (let i = 0; i < fiyatListesi.length; i++) {
//            guncelFiyatListesi.push(fiyatislemi(fiyatListesi[i],islemOrani)+"<br>");
//     }
//     return guncelFiyatListesi;
// }

// const zamYap=(fiyat,zamOrani)=>{
//     return Math.floor(fiyat+=fiyat*zamOrani);
// }

// const indirimYap=(fiyat,indirimOrani)=>{
//     return fiyat-=fiyat*indirimOrani;
// }

// const kdvEkle=(fiyat,kdvOrani)=>{
//      fiyat+=fiyat*kdvOrani;
//      return Math.floor(fiyat)
// }

// document.write(`Ham fiyatlar <br> ${fiyatlar} <br> <br>`)
// document.write("Zam yapılmış fiyatlar <br>"+fiyatGuncelle(fiyatlar,zamYap,0.3)+"<br>");
// document.write("İndirim yapılmış fiyatlar <br>"+fiyatGuncelle(fiyatlar,indirimYap,0.5)+"<br>");
// document.write("KDV eklenmiş fiyatlar <br>"+fiyatGuncelle(fiyatlar,kdvEkle,0.18)+"<br>");



const ogrenciler=["Mahir","Murat","Ertan","Rabia","göktuğ","Simge","Taha","Hülya"];

const yazdir=(isimDizisi,yazdirmaFonksiyonu)=>{
    for(let i=0;i<isimDizisi.length;i++){
        yazdirmaFonksiyonu(isimDizisi[i]);
    }
}

yazdir(ogrenciler,alert)