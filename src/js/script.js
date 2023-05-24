let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
var slidePosition = 1;
var slides = document.getElementsByClassName("carousel-container");

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    
    slides[slidePosition-1].style.backgroundColor = colorInput.value;
});

SlideShow(slidePosition);

function plusSlides(n) {
  hexInput.value = slides[slidePosition-1].style.backgroundColor;
  colorInput.value = slides[slidePosition-1].style.backgroundColor;
  SlideShow(slidePosition += n);
}

function currentSlide(n) {
    hexInput.value = "";
    colorInput.value = "";
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-container");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }

  if (n < 1) {
    slidePosition = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 
  