// let sayi1, sayi2, sayi3;

// sayi1 = prompt("1.sınav notunu giriniz :");
// sayi2 = prompt("2.sınav notunu giriniz :");
// sayi3 = prompt("3.sınav notunu giriniz :");

// let result = (Number(sayi1) + Number(sayi2) + Number(sayi3)) / 3;
// document.write(Math.floor(result));

// document.write("<br>");

// if(result <=49){
//     document.write("Kaldı")
// }
// else{
//     document.write("Geçti");
// }
// document.write("<br>");

// if(result>=80){
//     document.write("AA");
// }else if(result>=70){
//     document.write("BA");45
// }else if(result>=62){
//     document.write("BB");
// }else if(result>=54){
//     document.write("CB");
// }else if(result>=49){
//     document.write("CC");
// }else if(result>=44){
//     document.write("DC");
// }else if(result>=34){
//     document.write("DD");
// }else{
//     document.write("FF");
// }
// document.write("<br>");

// ------------------------------------------------------------------

//bir öğrencinin
//sınav sayısı belirsiz ve elden girilecek
//
/*
let sinavsayisi = prompt("Sınav sayınızı giriniz :");
const ogrenci = [];
let result = 0;
for (let i = 0; i < sinavsayisi; i++) {
  ogrenci[i] = prompt(`${i + 1}.sınavı giriniz :`);
  result += Number(ogrenci[i]);
}

result = result / sinavsayisi;

result = Math.floor(result);

document.write(Math.floor(result));

if (result >= 80) {
  document.write("AA");
} else if (result >= 70) {
  document.write("BA");
} else if (result >= 62) {
  document.write("BB");
} else if (result >= 54) {
  document.write("CB");
} else if (result >= 49) {
  document.write("CC");
} else if (result >= 44) {
  document.write("DC");
} else if (result >= 34) {
  document.write("DD");
} else {
  document.write("FF");
}
document.write("<br>");
*/

// ------------------------------------------------------------------

// Array
// Öğrenci sayısı
// sınav sayısı
// her bir öğrencinin adını ve not ortalaması yazdırma

// const students = new Array();
// let ogrencisayisi = Number(prompt("Ogrenci sayisini giriniz :"));
// let sinavsayisi = Number(prompt("Sinav sayisini giriniz :"));

// for (let i = 0; i < ogrencisayisi; i++) {
//   students[i] = new Array();
//   for (let j = 0; j <= sinavsayisi; j++) {
//     if (j == 0) {
//       students[i][j] = prompt(`${i + 1}.ogrenci adini giriniz :`);
//     } else {
//       students[i][j] = Number(
//         prompt(
//           `${students[i][0]} isimli ogrencinin` + `${j}.sinav notunu giriniz :`
//         )
//       );
//     }
//   }
// }

// const ogrenciSinacSonuc=new Array();
// let result = 0;
// for (let i = 0; i < ogrencisayisi; i++) {
//   for (let j = 1; j <= sinavsayisi; j++) {
//     result+= Number(students[i][j]);

//   }
//   ogrenciSinacSonuc[i] = result;
//   result=0;
// }
// for(let i=0; i<sinavsayisi;i++)
// {
//   document.write(`${students[i][0]} öğrencinin ${sinavsayisi} sınavı vardır ve bu sınavların ortalması: ${Math.floor(ogrenciSinacSonuc[i]/sinavsayisi)}<br>`);
//   if (Math.floor(ogrenciSinacSonuc[i]/sinavsayisi) >= 80) {
//   document.write("AA<br>");
// } else if (Math.floor(ogrenciSinacSonuc[i]/sinavsayisi) >= 70) {
//   document.write("BA<br>");
// } else if (Math.floor(ogrenciSinacSonuc[i]/sinavsayisi) >= 62) {
//   document.write("BB<br>");
// } else if (Math.floor(ogrenciSinacSonuc[i]/sinavsayisi) >= 54) {
//   document.write("CB<br>");
// } else if (Math.floor(ogrenciSinacSonuc[i]/sinavsayisi) >= 49) {
//   document.write("CC<br>");
// } else if (Math.floor(ogrenciSinacSonuc[i]/sinavsayisi) >= 44) {
//   document.write("DC<br>");
// } else if (Math.floor(ogrenciSinacSonuc[i]/sinavsayisi) >= 34) {
//   document.write("DD<br>");
// } else {
//   document.write("FF<br>");
// }
// }

// ------------------------------------------------------------------
//kullanıcadan "topla" girdisini alana kadar girdiği tüm sayıları toplayan topla dendiğinde toplayan for döngüsü

// let dongu=3;
// let toplamSayi=0;
// window.alert(`her girdiğiniz değer hafızaya alınır. bitirmek için "topla" yazmanız yeterli`)
// for(let i =0;i<dongu;i++)
// {
//   let alinanDeger=prompt("toplamak istediğiniz sayıyı giriniz : ");
//  if(alinanDeger!="topla")
//  {
//   toplamSayi+=Number(alinanDeger);
//   document.writeln(`${i+1}. deger: ${alinanDeger}<br>`);
//   dongu++;

//   }
//   else dongu=0;
// }
// document.writeln(" Toplam : "+toplamSayi);

//alınan değerleri topla dendiğinde duran ve işleme göre işlem yaptıran for ve switch

// let alinanDeger = "";
// let result = 0;
// let alinanDegerler = new Array();
// let dongu = 1;

// for (let i = 0; i < dongu; i++) {
//   alinanDeger = prompt("İşlem yapılacak sayıyı giriniz :");
//   if (alinanDeger != "bitir") {
//     alinanDegerler[i] = Number(alinanDeger);
//     dongu++;
//   } else dongu = 0;
// }

// let islem = prompt("yapılacak islemi seçiniz: ");

// switch (islem) {
//   case "+":
//     for (let i = 0; i < alinanDegerler.length; i++) {
//       result += alinanDegerler[i];
//       document.write(`${i + 1}.deger :${alinanDegerler[i]}<br>`);
//     }
//     break;
//   case "-":
//     for (let i = 0; i < alinanDegerler.length; i++) {
//       result -= alinanDegerler[i];
//       document.write(`${i + 1}.deger :${alinanDegerler[i]} <br>`);
//     }
//     break;
//   case "*":
//     result=1;
//     for (let i = 0; i < alinanDegerler.length; i++) {

//       result *= alinanDegerler[i];
//       document.write(`${i + 1}.deger :${alinanDegerler[i]}<br>`);
//     }
//     break;
//   case "/":
//     for (let i = 0; i < alinanDegerler.length; i++) {
//       result /= alinanDegerler[i];
//       document.write(`${i + 1}.deger :${alinanDegerler[i]}<br>`);
//     }
//     break;
//   default:
//     document.write("yanlış işlem yaptınız!!!");
// }

// document.write(result);

// ------------------------------------------------------------------
// faktöriyel hesaplama

// let alinanDeger=Number(prompt("sayı gir!"));
// let faktoriyel=1;
// for(let i=1;i<=alinanDeger;i++)
// {
//   faktoriyel*=i;
// }
// window.alert(faktoriyel);

// ------------------------------------------------------------------
// girilen sayının asal olup olmadığını kontrol eden for

// let alinanDeger=Number(prompt("sayı gir!"));
// let sayac=true;
// for(let i =2;i<alinanDeger;i++)
// {
//   if(alinanDeger%i==0)
//   {
//     sayac=false;
//   }

// }

// if(sayac==true)
// {
//   document.write("asal sayıdır");
// }
// else document.write("asal sayı değilidir");

// ------------------------------------------------------------------
// girilen sayıya kadar kaç asal sayı olduğunu kontrol eden for döngüsü

//  let alinanDeger = Number(prompt("sayı gir!"));

// let sayi=alinanDeger;
// let sayac=0;
// for (let i = 2; i <= sayi; i++) {
//   let asal = true;
//   for (let j = 2; j < i; j++)
//    {
//       if (i % j == 0) {
//         asal = false;
//       }

//   }
//   if (asal == true) {
//     document.write(i+"asal sayıdır <br>");
//     sayac++;
//   }
// }
// document.write(sayac+" tane asal sayı vardır <br>");

// ------------------------------------------------------------------
//for in ile string iterable içerisinde tek tek gezinip her elemanın index numarısını alıp bununla her itemı ekrana yazdırma

// let isim="Murat OKUR"
// for(let deger in isim)
// {
//   document.write(isim[deger]+"<br>");
// }

// ------------------------------------------------------------------
//for of ile dizi içerisinde tek tek gezinip her elemanı ekrana yazdırma
// let dizi=["murat","okur","izmir",123,13,34,35];

// for(let deger of dizi)
// {
//   document.write(deger+"<br>");
// }

// ------------------------------------------------------------------
// rastgele üretilen bir sayıyı kullanıcıdan aynısını alana dek kullanıcıdan değer alan while döngüsü,
// kullanıcı doğru bildiğinde tekrar başlamak istemesi veya bitirmesi için cevap lana kadar while ile dönen,
// en az denemede bulanı farklı bir mesaj ile tebrik eden

// let rastgeleSayi = Math.floor(Math.random() * 100 + 1);
// // window.alert(rastgeleSayi);
// let esitmMi = false;
// let denemeSayaci=0;
// let rekorBasari=100;
// let kullaniciSayi = 0;
// while (esitmMi == false) {
//   kullaniciSayi = Number(
//     prompt("1-100 arası rastgele üretilen sayıyı tahmin et!")
//   );
//   denemeSayaci++;
//   if (kullaniciSayi == rastgeleSayi)
//    {
//     if(denemeSayaci<=rekorBasari)
//     {
//     window.alert(`tebrikler ${denemeSayaci}. denemede tutturarak en başarılı oyuncu oldunuz.`);
//     rekorBasari=denemeSayaci;
//     }
//     else  window.alert(` ${denemeSayaci}. denemede tutturdunuz.`);
//     denemeSayaci=0;
//     let yeniden=false;
//     while (yeniden==false)
//      {
//       let devamMi = prompt("yeniden oynamak isterseniz yes yazınız <br> bitirmek için no yazınız" );
//       if (devamMi == "yes")
//        {
//         rastgeleSayi = Math.floor(Math.random() * 100 + 1);
//         // window.alert(rastgeleSayi);
//         yeniden=true;
//       } 
//       else if
//        (devamMi == "no") 
//        {
//         esitmMi = true;
//         yeniden=true;
//       }
//        else window.alert("lütfen doğru bir değer giriniz");
//     }
//   }
//   else
//     if(kullaniciSayi<rastgeleSayi)
//     {
//       window.alert("daha büyük bir sayı girmelisin");
//     }
//     else window.alert("daha küçük bir sayı girmelisin");
// }

// ------------------------------------------------------------------
//kullanı taradından alınan bilgilerle kullanıcı adı ve şifre ile kayıt olup doğrus kullanıcı adı ve şifre girilene kadar dönen while döngüsü

// let isLogin=false;
// let userName=prompt("sign up username");
// let password=prompt("sign up password");

// while(isLogin==false){
// let isUserName=prompt("login username?");
// let isPassword=prompt("login password?");
// if(userName==isUserName && isPassword==password)
// {
//   window.alert(`Hoşgeldin ${userName}`);
//   document.write(`Hoşgeldin ${userName}`)
//   isLogin=true;
// } else window.alert("Hatalı kullanıcı adı veya şifre!!");
// }

// ------------------------------------------------------------------
//kullanıcı menu içeriklerini bitir diyene kadr oluşturur
// menuden istediği içeriği içerik sırasına göre ister


//// let menu=["Türk Kahvesi","Latte","Çay","kola","Ayran"];



// let menu=[];
// let deger="";
// let bitir="";
// sayac=0;
// do{
// deger=prompt("lütfen menu içeriği için öğe giriniz. bitirmek için bitir yazabilirsiniz");
// if(deger!="bitir"&& deger!="")
// {
//   menu[sayac]=deger;
// sayac++;
// } 

// }while(deger!="bitir")

// let isSection=false;
// for(let section in menu){
//  document.write((Number(section)+1)+" "+menu[section]+"<br>");
// }
// do{
// let musteriIStegi= prompt("Lütfen istediğiniz içeceğin numarasını giriniz");
// if(musteriIStegi>0&&musteriIStegi<=menu.length){
// document.write(`${menu[musteriIStegi-1]} siparişiniz en kısa sürede geliyor`)
// isSection=true;
// }
// }while(isSection==false)


// ------------------------------------------------------------------
// doviz


// let dolar=25,euro=30,sterlin=50,tl=1,islem='',sonuc=0,alinanDeger="";
// alinanDeger=Number(prompt("değeri giriniz"));
// islem=prompt("döviz türünü seçiniz");

// switch(islem){
//   case '$':
//     sonuc=alinanDeger*dolar;
//     document.write(sonuc);
//     sonuc=0;
//   break;
//   case '£':
//     sonuc=alinanDeger*euro;
//     document.write(sonuc);
//     sonuc=0;
//   break;
//   case '#':
//     sonuc=alinanDeger*sterlin;
//     document.write(sonuc);
//     sonuc=0;
//   break;
//   case '₺':
//     sonuc=alinanDeger*tl;
//     document.write(sonuc);
//     sonuc=0;
//   break;
//   default:
//     document.write("doğru işlem seçemediniz");
//   break;
// }

// ------------------------------------------------------------------

