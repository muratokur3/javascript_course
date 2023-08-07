// swicth ile rakamlara karşılık ay ismi yazdırma

let monthIndex = prompt("Lütfen bir sayı giriniz");
monthIndex = Number(monthIndex);
ayIsmi = "";

// if (monthIndex < 0 && monthIndex!=0) {
//   monthIndex *= -1;
// }

if (monthIndex > 0) {
  switch (monthIndex % 12) {
    case 1:
      ayIsmi = "Ocak";
      break;
    case 2:
      ayIsmi = "Şubat";
      break;
    case 3:
      ayIsmi = "Mart";
      break;
    case 4:
      ayIsmi = "Nisan";
      break;
    case 5:
      ayIsmi = "Mayıs";
      break;
    case 6:
      ayIsmi = "Haziran";
      break;
    case 7:
      ayIsmi = "Temmuz";
      break;
    case 8:
      ayIsmi = "Ağustos";
      break;
    case 9:
      ayIsmi = "Eylül";
      break;
    case 10:
      ayIsmi = "Ekim";
      break;
    case 11:
      ayIsmi = "Kasım";
      break;
    case 0:
      ayIsmi = "Aralık";
      break;
  }
  window.alert(ayIsmi);
} else window.alert("0' dan büyük bir rakam giriniz!");
