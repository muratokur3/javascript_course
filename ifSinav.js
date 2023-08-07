
// Manuel sınav girişi
var sinavOrtalma;
var sinav1=prompt("1. sınavın notunu giriniz: ")
var sinav2=prompt("2. sınavın notunu giriniz: ")
var sinav3=prompt("2. sınavın notunu giriniz: ")

sinavOrtalma=(Number(sinav1)+Number(sinav2)+Number(sinav3))/3;
if(sinavOrtalma>49){
    document.write("geçtiniz");
}
else if(sinavOrtalma==0){
    document.write("sınavdan bir puan alamadınız veya geçersiz sayıldı!");
}
else document.write("geçemediniz!");


document.write("<br> geçme durumu: ")


if(sinavOrtalma==100){
    document.write("sınavı 100 alarak geçtiniz");
}
else if(sinavOrtalma>84){
    document.write("sınavı başarılı alarak geçtiniz");
}
else if(sinavOrtalma>64 && sinavOrtalma<85){
    document.write("sınavı iyi bir puan alarak geçtiniz");
}
else if(sinavOrtalma>49 && sinavOrtalma<65){
    document.write("sınavı geçtiniz");
}
else if(sinavOrtalma!=0 && sinavOrtalma<50){
    document.write("sınavı geçemediniz!");
}
else document.write("sınavı 0 alarak geçemediniz!!!");
