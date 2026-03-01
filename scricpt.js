// Select pages
var homePage = document.getElementsByClassName("homepage")[0];
var aboutPage = document.getElementsByClassName("aboutpage")[0];
var timePage = document.getElementsByClassName("timepage")[0];
var locationPage = document.getElementsByClassName("locationpage")[0];
var cardPage = document.getElementsByClassName("invitationcard")[0];

// Function to hide all pages
function hideAll() {
    homePage.style.display = "none";
    aboutPage.style.display = "none";
    timePage.style.display = "none";
    locationPage.style.display = "none";
    cardPage.style.display = "none";
}

// Navigation Functions
function home() {
    hideAll();
    homePage.style.display = "block";
}

function abouutpage() {
    hideAll();
    var a = prompt("Enter your name");
    var b = a.charAt(0).toUpperCase();
    var c = a.slice(1,a.length).toLowerCase();
    aboutPage.style.display = "block";
    alert("You are invited for the Wedding function "+(b+c)+"!!")
    
}

function timeepage() {
    hideAll();
    timePage.style.display = "block";
}

function locationpage() {   // renamed from location()
    hideAll();
    locationPage.style.display = "block";
}

function card() {
    hideAll();
    cardPage.style.display = "block";
}

// Show home page by default
home();


// ================= CLOCK =================
function showTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds + " " + ampm;
}

setInterval(showTime, 1000);
showTime();


// ================= COUNTDOWN =================
const targetDate = new Date("March 08, 2026 07:30:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }

}, 1000);

function weds(){
    alert("Thank you for the wishes!")
}
function con(){
    alert("Thank you for the wishes!")
}
function redheart(){
    alert("Thanks for your ❤️")
}
function greenheart(){
    alert("Thanks for your 💚")
}
function claps(){
    alert("👏")

}







