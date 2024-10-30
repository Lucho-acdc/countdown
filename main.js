// Countdown logic
const countdown = () => {
    const countDate = new Date("Feb 15, 2025 17:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
};

setInterval(countdown, 1000);

// Función para generar burbujas continuamente
function createBubble() {
    const bubbleContainer = document.getElementById('bubble-container');
    
    // Crear una burbuja
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Posición aleatoria en el eje X
    bubble.style.left = Math.random() * 100 + 'vw';

    // Tamaño aleatorio de las burbujas
    const size = Math.random() * 50 + 20; // Burbujas de entre 20px y 70px
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // Añadir burbuja al contenedor
    bubbleContainer.appendChild(bubble);

    // Eliminar la burbuja después de que complete su animación
    setTimeout(() => {
        bubble.remove();
    }, 8000); // Las burbujas desaparecen después de 8 segundos
}

// Crear burbujas continuamente cada 100ms
setInterval(createBubble, 100);
