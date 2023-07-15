// döngü halinde diziyi yazırmak için dizi.foreach parantez içine sayi vererek console log içinde sayi değerini yazarak dizideki rakkamları yazdırıyoruz
const dizi = [1, 2, 3, 4, 5];

dizi.forEach(sayi => {
    console.log(sayi);
});



// karelerini aldırmak için

const dizi = [1, 2, 3, 4, 5];
const kareDizisi = [];

dizi.forEach(sayi => {
    kareDizisi.push(sayi * sayi);

});
console.log(kareDizisi);




//map   ile yeni bir dizi olarak ortaya çıkarıyoruz map yazarken çoklu yazamayız şeklli parantezleri birden çok değer yazmak için kullanıyoruz
// eğer tek değer yazıcaksak şekilli parantezleri aşağıdaki gibi silebiliriz map'te şekilli parantezide kabul etme

const dizi = [1, 2, 3, 4, 5];
const mapDizi = dizi.map(sayi =>
    sayi*3

);
console.log(mapDizi);




//filter  filitre aparak 2den büyük olanları getir dedik  ve consoldan baktığımızda dizide 2 den büyük olanları getirdi
const dizi = [1, 2, 3, 4, 5];
const filtreDizi = dizi.filter(sayi => sayi > 2);
console.log(filtreDizi);




//reduce   toplama işlemleri  dizi içindekileri toplayarak sonucu gösterdi
const dizi = [1, 2, 3, 4, 5];
const toplam = dizi.reduce((acc, sayi) => {
    return acc + sayi;

});
console.log(toplam);