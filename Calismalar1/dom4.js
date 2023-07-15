var isimElemanlari = document.getElementsByName("musteriAdi");
alert(isimElemanlari[0].value); //input içindeki value değerini okudu

var naga = document.getElementById("naga").addEventListener("click",rengiDegistir);  // h1 de id içindeki naga olan yerde emre yaman yazıyor
// oraya tıkladığımız zaman alltaki function ile div1 deki yazıları  kırımıza çevierecek

function rengiDegistir() {
    document.getElementById("div1").style.color="red"; // tıkladığında yazıyı kırmızıya çevirir
    var isimElamanlari = document.getElementsByName("musteriAdi"); //tıklandığında isim elamanlarının 1. dizisinde olan value değerini alyadua olarka değiştirmesi için
    isimElamanlari[0].value="ALYADUA"
}

// click yerine mauseover yaptığımızda mause üzerine geldiğinde direk işlem gerçekleşir 