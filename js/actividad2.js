let timerInterval; // Variable para almacenar el intervalo del timer (delta de tiempo)
let seconds = 0;
let minutes = 0;
let hours = 0;
const timer = document.getElementById("timer"); // timer se obtiene como un elemento html

function startTimer() {
    clearInterval(timerInterval); // Limpiar el intervalo (1 segundo)
    timerInterval = setInterval(() => { // setInterval ejecuta una función cada cierto tiempo (1000 milisegundos), funcion lambda para definir el comportamiento cada que se ejecuta el "tick"
        seconds++; // Incrementar los segundos en 1 "tick"
        if (seconds === 60) { // Si los segundos llegan a 60, reiniciarlos a 0 y aumentar 1 minuto
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) { // Si los minutos llegan a 60, reiniciarlos a 0 y aumentar 1 hora
            minutes = 0;
            hours++;
        }
        // hora:minuto:segundo
        timer.textContent = `${hours // paddingStart es para agregar un 0 a la izquierda si el numero es menor a 10 (2 digitos)
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`;
    }, 1000); // Aca acaba la funcion setInterval, definimos 1000ms = 1s para el tick de ejecucion de la funcion lambda
}

// Funcion para detener el cronometro
function stopTimer() {
    clearInterval(timerInterval); // limpia el delta de tiempo que haya transcurrido en ms
}

// Funcion para reiniciar el cronometro
function resetTimer() {
    clearInterval(timerInterval); // limpia el delta de tiempo que haya transcurrido en ms
    // Reiniciar las variables de tiempo y cambiar el texto del elemento html
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = "00:00:00";
}