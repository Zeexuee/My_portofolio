// Animasi untuk mengetik teks
let i = 0;
let text = "I Am Into Web Development";
function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = function() {
    typeWriter();
};
