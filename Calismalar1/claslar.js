// sürdürülebilir adımlar atabilmek için clasları kullanıcaz
// claslar ilk harfleri büyük yazılır
// yazdırmak için sadece console.log yetmez  const  yaparak yeni bir değer oluştutrarak new diyerek clas adını vererek sonra değeri personeller.kaydet diyerek
// kaydedildi yazısını verdiririz

class Personel{
    kaydet() {
        console.log("personel kaydedildi");
    }
}
const personeller = new Personel();
personeller.kaydet();





//constructor  oluşturmak manasında  bunu oluştururken buna ad soyad vermek istiyorum demektir
class Personel{
    constructor(ad, soyad) {

        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet() {
        console.log("personel kaydedildi " + this.ad); // kaydediln personelin adını yazdırmak için
    }
}
const personeller = new Personel("emre","yaman");
personeller.kaydet();
console.log(personeller.ad); // sadece adı yazdırmak için