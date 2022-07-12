// animation slide splashscreen
setTimeout(function() {
    $('.preloader').slideUp(2000);
    $('.loading-img').delay(150).slideUp('fast')
}, 4000);
// animation slide splashscreen

// automatic slider carousel
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 7000);

//Carousel
var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("image-slide");

    if(n > slides.length){
        slideIndex = 1
    }

    if(n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Button Onclick function //
function submit() {
    alert('Thankyou for contact AGEN-Z !');
}