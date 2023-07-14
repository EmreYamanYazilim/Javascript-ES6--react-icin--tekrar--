var kullanicilar = [
    { email: "alya@hotmail.com",sifre:"12345"},
    {email: "naga@gmail.com",sifre:"12345"}
]

var tivitler = [
    {email:"alya@hotmail.com", tivit: "Bu gün hava güzel"},
    {email:"alya@hotmail.com", tivit: "Bu gün hava  kötü"},
    {email:"naga@gmail.com", tivit: "kapılar boyandı"}

]

var email = prompt("email?")
var sifre = prompt("sifre?")

function KullaniciVarmi(email, sifre) {

    //console.log(email);  bu değerlerin düzgün gelip gelmediğini kontrol ettirmek için consola yazdırma taktiğidir  bu değerler geliyorsa  sorun burda değil sonraki döngüde demektir
    //console.log(sifre);

    for (i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true;
        }
    }
    return false;
}

function giris() {
    if (KullaniciVarmi(email,sifre)) { // giriş yaptıktan sonra tviterleri vermemesini istedik
        console.log(tivitler);
    } else {
        console.log("Kullanici adi veya şifresi hatalı");// giriş yapamadığında hata bastırmasını istedik
    }
}

giris(email,sifre);
// sayfayı açtığımızda consolda  şifreyi yanlış girisek hatayı göstericek  ama şifreyi parloayı doğru giererswsek bize gelen arrayları göstericek