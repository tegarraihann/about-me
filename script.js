
document.addEventListener('DOMContentLoaded', function () {
    var h2Text = 'TEGAR RAIHAN AKMALI';
    var pText =
      'Hi perkenalkan nama saya Tegar Raihan Akmali\nSaya mahasiswa aktif di salah satu perguruan tinggi swasta Islam\nDi Pekanbaru - Riau, saya sedang menempuh pendidikan S1 Di Fakultas Teknik\nProgram Studi Teknik Informatika.';
  
    var pElement = document.querySelector('.image-profile p');
  
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
  