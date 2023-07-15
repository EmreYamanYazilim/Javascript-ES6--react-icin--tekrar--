var clasElamanlari = document.getElementsByClassName("intro1");
alert(clasElamanlari[0].innerHTML); // 2 tane clas verdik intro 1 diye birisi ilk paragraf yazan yer diğeri ağac değeri yazan yer
// ama bunlardan birisini  alert olarak vermek istiyoruz o yüzden claselamanları değişkenine
//dizdeki ilk olanı yazdır dediğimiz zamanda  ilk paragraf yazan değeri yazdırmış olucaz


var queryElamanlari = document.querySelectorAll("p.intro1");
alert(queryElamanlari.length); //kaçtane query elemanı var onlara bkar sadece p ler  içinde kaçtane intro 1 var ona baktık