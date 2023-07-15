

// [1,2]===[1,2]  aslında ture dönrürmesi gerekirkern false döndürüyor  nesne  onların referansları aynı mı diye sorgulacağız  nesneleri referanslarına göre  eşitliğini sağlacayaız

// var nesen1 = {deger:1}
// //ile
// var nesne2 = {deger:1}
// // ikisi  eşit değil falsedir  ayrı bir  nesnedir
//
// console.log(this)  // içinde bulunduğumuz nesnenin kendisini anlatır



// ekle içine sen bir functionsun dedik  bu function içinede yazdırma kodumuz console.log yazdık  altada urunServisi.ekle() yazdığımızda urun servisi içindeki ekle değeri içindeki function çalışır

const urunServisi = {
    ekle: function () {
        console.log(this);
    },
};
urunServisi.ekle();