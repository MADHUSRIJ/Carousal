var slidePosition = 1;
var slides = document.getElementsByClassName("carousel-container");
var colorArray = ['#fff','#fff','#fff','#fff','#fff'];

SlideShow(slidePosition);

function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  
  document.body.style.backgroundColor = colorArray[n-1];
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
  slides[slidePosition-1].style.display = "flex";
  circles[slidePosition-1].className += " enable";

  
  let pickerElement = document.getElementsByClassName('colorpicker')[n - 1];
  let colorInput = pickerElement.querySelector('#color' + n);
  let hexInput = pickerElement.querySelector('#hex' + n);

  colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    colorArray[n-1] = color;
    document.body.style.backgroundColor = color;
  });

  
} 
  