var kullanicilar = [
    { email: "alya@hotmail.com",sifre:"12345"},
    {email: "naga@gmail.com",sifre:"12345"}
]

var tivitler = [
    {email:"alya@hotmail.com", tivit: "Bu gün hava güzel"},
    {email:"alya@hotmail.com", tivit: "Bu gün hava  kötü"},
    {email:"alya@hotmail.com", tivit: "kapılar boyandı"}

]

var email = prompt("email");
var sifre = prompt("sifre?");

function giris() {
    if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre || email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
        console.log(tivitler);
    } else {
        console.log("Kullanici adi veya şifresi hatalı");
    }
}

giris(email,sifre);
// sayfayı açtığımızda consolda  şifreyi yanlış girisek hatayı göstericek  ama şifreyi parloayı doğru giererswsek bize gelen arrayları göstericek