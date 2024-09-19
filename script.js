
document.addEventListener('DOMContentLoaded', function () {
    var h2Text = 'as';
    var pText ='Hi perkenalkan nama saya Tegar Raihan Akmali Saya mahasiswa aktif di salah satu perguruan tinggi swasta Islam di Pekanbaru - Riau, saya sedang menempuh pendidikan S1 Di Fakultas Teknik, Program Studi Teknik Informatika.';
  
    var pElement = document.querySelector('#tentang-saya');
  
    var speed = 50; 
  
    function typeWriter(element, text, speed) {
      var i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }
  
    setTimeout(function () {
      pElement.innerHTML = ''; 
      typeWriter(pElement, pText, speed);
    }, h2Text.length * speed + 500);
  });
  