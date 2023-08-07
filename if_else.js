
let isim="";
isim=prompt("Lütfen isim giriniz! ")

let isimUzunluk=isim.length;

if(isimUzunluk<4)
{
    console.log("İsim çok kısa!");
}
else if(isimUzunluk<6)
{
    console.log("İsim uzunluğu iyi");
}
else if(isimUzunluk<9)
{
    console.log("İsim uzun!");
}
else if(isimUzunluk<13)
{
    console.log("İsim çok uzun!");
}
else console.log("doğru değer giriniz")




let haftaGunu=0;
haftaGunu=prompt("1-7 arasında değer giriniz: ")
if(haftaGunu==1)
{
    console.log("Pazartesi");
}
else if(haftaGunu==2)
{
    console.log("Salı");
}
else if(haftaGunu==3)
{
    console.log("Çarşamba");
}
else if(haftaGunu==4)
{
    console.log("Perşembe");
}
else if(haftaGunu==5)
{
    console.log("Cuma");
}
else if(haftaGunu==6)
{
    console.log("Cumartesi");
}
else if(haftaGunu==7)
{
    console.log("Pazar");
}
else console.log("Doğru değer giriniz");


