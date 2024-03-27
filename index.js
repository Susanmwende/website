const slides = document.querySelectorAll(".slides img") //variable  stores data of the of the images 
let slideIndex = 0;// start index point
let intervalId = null; // the slides were not in motion

document.addEventListener("DOMContentLoaded",initializeSlider); //responds to the click

    

  function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide,5000); // 5000 is time in miliseconds(5 seconds)
    
  } 
}
  function showSlide(index){ // the if statement is for if the images get to the last slide itgoes back to the first slide

    if(index >= slides.length){ 
        slideIndex = 0;
    }

    else if(index < 0){
        slideIndex = slides.length -1;
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); // compiles all the images to the slider
    });

    slides[slideIndex].classList.add("displaySlide"); // enables the images to slide to the next

  }
  function prevSlide(){
    clearInterval(intervalId);// set each call time to fixed time delay
    slideIndex--; // enables onee to tap on the prev button which should take them to the previous photo
    showSlide(slideIndex) // links the previous button to the actual slider so that one is able to slide successfully
  }
function nextSlide(){
slideIndex++ // enables one to tap on the next button which should  take one to the next image
showSlide(slideIndex) // links the next button to next slider so that it is

}
