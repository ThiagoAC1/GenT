const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane', 
    'peppers', 'unlimited', 'arcadium', 'love', 'getaway', 'stadium', 
    'quixoticelixer', 'quarter', 'snow', 'dylan', 'zephyr', 'funky', 'chili'
  ];
  
  // Referenciar elementos del DOM
  const wordEl = document.getElementById('word');
  const textEl = document.getElementById('text');
  const scoreEl = document.getElementById('score');
  const timeEl = document.getElementById('time');
  const endgameEl = document.getElementById('end-game-container');
  const settingsBtn = document.getElementById('settings-btn');
  const settings = document.querySelector('.settings');
  const difficultySelect = document.getElementById('difficulty');
  
  // Variables globales
  let randomWord;
  let score = 0;
  let time = 10;
  let difficulty = localStorage.getItem('difficulty') !== null 
    ? localStorage.getItem('difficulty') 
    : 'medium';
  
  // Establecer dificultad seleccionada
  difficultySelect.value = difficulty;
  
  // Función para obtener una palabra aleatoria
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  // Función para agregar la palabra al DOM
  function addWordToDOM() {
    randomWord = getRandomWord();
    wordEl.innerHTML = randomWord;
  }
  
  // Función para actualizar el puntaje
  function updateScore() {
    score++;
    scoreEl.innerHTML = score;
  }
  
  // Función para actualizar el tiempo
  function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
  
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }
  
  // Función para el fin del juego
  function gameOver() {
    endgameEl.innerHTML = `
      <h1>Se acabó el tiempo</h1>
      <p>Tu puntaje final es: ${score}</p>
      <button onclick="location.reload()">Volver a jugar</button>
    `;
  
    endgameEl.style.display = 'flex';
  }
  
  // Evento para la entrada de texto
  textEl.addEventListener('input', e => {
    const insertedText = e.target.value;
  
    if (insertedText === randomWord) {
      addWordToDOM();
      updateScore();
  
      // Limpiar input
      e.target.value = '';
  
      // Incrementar tiempo según dificultad
      if (difficulty === 'hard') {
        time += 2;
      } else if (difficulty === 'medium') {
        time += 3;
      } else {
        time += 5;
      }
  
      updateTime();
    }
  });
  
  // Configuraciones
  settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));
  difficultySelect.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
  });
  
  // Iniciar juego
  addWordToDOM();
  textEl.focus();
  
  // Iniciar cuenta regresiva
  const timeInterval = setInterval(updateTime, 1000);
  