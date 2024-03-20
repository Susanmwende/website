let slideIndex = 0;
slideShows();

function slideShows() {
    let s;
    let slide = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot")
    for (s = 0;s<slide.length; s++){
        slide[s].style.display ="none"
}

slideIndex++;
if (slideIndex > slide.length) {slideIndex= 1}
    for(s = 0; s<dots.length; s++) {
        dots[s].className= dots[s].className.replace("active","" );
    }


slides[slideIndex -1].stle.display ="block";
dots[slideIndex-1].className+= "active";
setTimeout(slideShows,2000);
}