// * ile dalgalı dağ

// for (let i = 1; i <= 10; i++) {
//   for (j = i; j > 0; j--) {
//     document.write(" *");
//   }
//   document.write("<br>");
// }
// for (let i = 1; i <= 10; i++) {
//   for (j = i; j < 10; j++) {
//     document.write(" *");
//   }
//     document.write("<br>");
// }




// * ile baklava dilimi



document.write("<br>");

for (let i = 0; i < 10; i++) {
    
  for (let j = i; j < 100; j++) {
    document.write("&nbsp;");
  }

  for (let k = 0; k < i; k++) {
    document.write("*");
  }
  document.write("<br>");
}



for (let i = 0; i< 19; i++) {
    
  for (let j = 0; j < i+90; j++) {
    document.write("&nbsp;");
  }

  for (let k = 10; k > i; k--) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("________________________________________________________________________________________________");






