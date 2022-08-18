let nomesSom = ['Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', 'Kick n\' Hat', 'Kick', 'Close HH'];
let tocador = "";

function playSound(soundId) {
    tocador = document.getElementById(soundId);
    tocador.play();
    displaySound(soundId.toLowerCase());
}

document.addEventListener("keyup", function(event) {
    displaySound(event.key);
    playSound(event.key.toUpperCase());
});

function displaySound(valor) {
    switch (valor) {
        case "q":
            document.getElementById('display').innerHTML = nomesSom[0];
            break;
        case "w":
            document.getElementById('display').innerHTML = nomesSom[1];
            break;
        case "e":
            document.getElementById('display').innerHTML = nomesSom[2];
            break;
        case "a":
            document.getElementById('display').innerHTML = nomesSom[3];
            break;
        case "s":
            document.getElementById('display').innerHTML = nomesSom[4];
            break;
        case "d":
            document.getElementById('display').innerHTML = nomesSom[5];
            break;
        case "z":
            document.getElementById('display').innerHTML = nomesSom[6];
            break;
        case "x":
            document.getElementById('display').innerHTML = nomesSom[7];
            break;
        case "c":
            document.getElementById('display').innerHTML = nomesSom[8];
            break;
        default:
            break;
    }
}
