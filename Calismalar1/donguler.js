// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//  1, döngü  sonsolda sayfayı yenileyince hepsini yazacak

for (i = 1; i <= 10; i++) {  //  i 1 den 10a kadar attırıarak devam ediyor
    console.log(i);
}
console.log("bitti");



// sehirleri sıralı şekilde göstericek 0dan başlatıyoruz çünkü arraylar 0 dan başlıyor
var sehirler = ["ankara", "edirne", "istanbul", "bursa"];
console.log(sehirler[1]);  // edirneyi yazacak

for (i = 0; i < sehirler.length; i++) {
    console.log(sehirler[i]);
}

// 2. döngü while döngüsü  türkçede karşılığı iken manasındadır  for döngüğsünde içinde i tanıtılırken  whilede dışında tanıtılır

var i = 1;

while (i < 10) {
    console.log(i);
    i++
}

//3. döngü  foreach  sehire ulaşmanın mantığı avantaj meslea edirneye ulaştın şehrin ilçelerini çekmek için imkan sağlar
var sehirler = ["ankara", "edirne", "istanbul", "bursa"];

sehirler.forEach(function (sehir) {
    console.log(sehir);
});