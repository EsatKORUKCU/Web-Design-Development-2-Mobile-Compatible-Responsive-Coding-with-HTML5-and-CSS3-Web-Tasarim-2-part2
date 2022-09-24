function formGonder(){
  var adiniz = document.getElementById("adiniz").value;
  var hosgeldin = document.getElementById("hosgeldin");
  hosgeldin.innerText = "Hos geldin "+ adiniz;
} 

var baslik = document.getElementById("menu");
var links = baslik.getElementsByClassName("link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(){
    var aktif = document.getElementsByClassName("active");
    aktif[0].className = aktif[0].className.replace(" active", "");
    this.className += " active";
    aktif[0].style.border = "thin solid #0000FF";
  });
}

