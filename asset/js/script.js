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

//Responsive Navbar
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

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
// function submit() {
//     alert('Thankyou for contact AGEN-Z !');
// }
 
function regist(){
    var nomor = document.getElementById("nomor").value;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    
    var output =  
        "Name : " + nama + "\n"  +
        "Phone Number : " + nomor + "\n" +
        "Email : " + email + "\n";

    alert(output);
}