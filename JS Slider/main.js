let pic = ['images/a1.jpg', 'images/a2.jpg', 'images/a3.jpg'];
let delay;
let delayImage;
let btn;
let activeDot;
let imageNumber = 0;
let dots = document.getElementsByClassName("dot"); 

// with class getElement is exchanged with onclick on anchor tag and linked with this function
function prev() {
  delay = 10000;
  clearTimeout(delayImage);
  previousImage();
}

// goes to next slide set delay to 10 sec and cancels previous setTimeout
function next() {
  btn = true;
  delay = 10000;
  clearTimeout(delayImage);
  nextImage();
}



// goes through the slide reverse order 
function previousImage() {
  clearDot(imageNumber);
  imageNumber = (imageNumber + 2) % pic.length;
  document.getElementById('slider').src = pic[imageNumber];
  dotsActive(imageNumber);
  delayImage = setTimeout(nextImage, delay)
}

// this is the main function the rotates through the array of images, it also 
// calls itself at the end 
function nextImage() {
  document.getElementById('slider').className += "fadeOut";
  clearDot(imageNumber);

  if (!(btn)) {
    delay = 4000;
  }
  btn = false;

  // for the fade in effect change to new image is delayed including removal of opacity
  setTimeout(function() {
    imageNumber = (imageNumber + 1) % pic.length;
    document.getElementById('slider').src = pic[imageNumber];
    document.getElementById('slider').classList.remove("fadeOut");
    dotsActive(imageNumber);
  }, 400);
  delayImage = setTimeout(nextImage, delay)
}


// button for dots that hold argument which button has been pressed
function dotBtn(btnNummer) {
  clearTimeout(delayImage);
  clearDot();
  for(let i = 0; i < dots.length; i++) {
    if(btnNummer === i) {
      imageNumber = i; 
    }
  }
  document.getElementById('slider').src = pic[imageNumber];
  dotsActive(imageNumber);
  delayImage = setTimeout(nextImage, 5000);
}

// activates the dots - adds css with active
function dotsActive(imageNumber) {
  for(let i = 0; i < dots.length; i++) {
    if(i === imageNumber) {
      dots[i].className += " active";
    }
  }
}

// clears the css on all buttons 
function clearDot() {
  for(let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
  }
}

nextImage();

