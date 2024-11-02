function seEjecutaEnEvento() {
    document.body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    
    document.body.classList.toggle('color');
}

document.getElementById('beepButton').addEventListener('click', seEjecutaEnEvento);