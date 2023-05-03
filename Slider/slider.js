function changeImage() {
    var slider = document.getElementById('slider');
    var images = slider.getElementsByTagName('img');
    var currentIndex = 0;
    
    return function() {
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = 'block';
    }
  }
  
  var interval = setInterval(changeImage(), 3000);
  
  document.addEventListener('DOMContentLoaded', function() {
    interval;
  });
  