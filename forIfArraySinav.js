// Oto sınav girişi
let sinavGectiMi = false;
let sinavOrtalma = 0;
let sinavs = [];
let sinavsayisi = 0;
sinavsayisi = prompt("kaç sınavınız var? ");
sinavsayisi = Number(sinavsayisi);
let toplamPuan = 0;

for (let i = 0; i < sinavsayisi; i++) {
  sinavs[i] = prompt(`${i + 1}. sınavın notunu giriniz: `);
  toplamPuan += Number(sinavs[i]);
}

sinavOrtalma = toplamPuan / sinavsayisi;
if (sinavOrtalma > 49) {
  document.write("geçtiniz");
  sinavGectiMi = true;
} else if (sinavOrtalma == 0) {
  document.write("sınavdan bir puan alamadınız veya geçersiz sayıldı!");
} else document.write("geçemediniz!");

if (sinavGectiMi == true) {
  document.write("<br> Tebrikler bu dersi tamamladınız");
} else document.write("<br> bu dersi tekrar almanız gerekiyor");


ogrenciismi=[];
sınavlar=[];


