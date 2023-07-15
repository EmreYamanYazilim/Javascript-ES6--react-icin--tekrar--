function selamFonksiyonu() {
    console.log("Selamun Aleyküm");
}

selamFonksiyonu();

 // değişkene atayarakta yazabiliriz  değişkene atadığımızda  değişken adıyla çağırıcaz

var selamFonksiyonu = function selam() {
    console.log("Aleyküm SELAM");
}
selamFonksiyonu();



// var ile tanımlamak yerine const ilede yapabiliriz
const selamFonksiyonu2 = () => {
    console.log("Constla okla gösterme");
};
selamFonksiyonu2();


//

const selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
};
selamFonksiyonu3("mesaj olarak böyle gönderebiliyorız");



// 
var topla = (sayi1, sayi2)=>{
    return sayi1 + sayi2;
}
let toplam = topla(3, 4);
console.log(toplam);