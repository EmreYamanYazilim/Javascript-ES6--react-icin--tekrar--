
//
// var node = document.getElementById("agac");// değişkenkerimizi oluşturduk
// alert(nod.childNodes[0].nodeValue);  // p içinde yazan değeri almak için agac id li ilk value değerini almak için yazdık



var baslikEkledik = document.createElement("h2");
var node = document.createTextNode("Yazı ekleme")

baslikEkledik.appendChild(node);

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2") // değişkenkerimizi oluşturduk

div1.insertBefore(baslikEkledik,p2)  // baslikEkledik diyerek node oluşutruduk div1 içinde p2 den önce başlıkEkledik ekle

alert("p2 siliniyor"); //p2 idli olanı sildirme
div1.removeChild(p2);

alert("değiştriliyor");
var p1 = document.getElementById("p1");
div1.replaceChild(baslikEkledik, p1); // başlığı p1'in yerine koy



