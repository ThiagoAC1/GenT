import React, { useState, useEffect } from 'react';
import { Card, Grid } from 'semantic-ui-react';

function CharacterList({ onSelectCharacter }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Llamada a la API de Rick and Morty para obtener la lista de personajes
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <Grid columns={4} stackable>
      {characters.map(character => (
        <Grid.Column key={character.id}>
          <Card
            onClick={() => onSelectCharacter(character)}
            image={character.image}
            header={character.name}
            meta={`Status: ${character.status}`}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default CharacterList;
