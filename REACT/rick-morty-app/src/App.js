import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  // Estado para manejar si se muestra la lista o el detalle
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Función para seleccionar un personaje
  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  // Función para volver a la lista
  const handleBackToList = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onBack={handleBackToList} />
      ) : (
        <CharacterList onSelectCharacter={handleCharacterSelect} />
      )}
    </div>
  );
}

export default App;

