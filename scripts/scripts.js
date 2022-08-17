let nomesSom = ['Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', 'Kick n\' Hat', 'Kick', 'Close HH'];
let tocador = "";

function playSound(soundId) {
    tocador = document.getElementById(soundId);
    tocador.play();
    document.getElementById('display').innerHTML = nomesSom[0];
}


