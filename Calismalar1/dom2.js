var intro1 = document.getElementById("intro1");
var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML; //  mesaj yazan yerde intro1 deki 1.paragraf yazısını yazdırdı

var tumListeler = document.getElementsByTagName("ul");// bu bizi bütün ul'lere ulaştırır
var sehirler = tumListeler[0]; // bitane  ul olduğundan dolayı il ulyi bulabilmek için tumlisteler 0 diye sehirlere onu değer verdik

tumElemanlar = sehirler.getElementsByTagName("li"); //sehirlerdeki  ul içindeki li leri bulmak için yazdık

for (i = 0; i < tumElemanlar.length; i++) {
    alert(tumElemanlar[i].innerHTML); // önce tüm elemanları sırala döndür dedik  bunu yazı olarak göstermek içinde alert içine innerHTML yaptık
}
