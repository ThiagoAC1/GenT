import React from 'react';
import { Segment, Image, List, Button } from 'semantic-ui-react';

function CharacterDetail({ character, onBack }) {
  return (
    <Segment>
      <Button onClick={onBack} primary>Back to List</Button>
      <Image src={character.image} size='small' floated='left' />
      <List>
        <List.Item>
          <List.Header>Name</List.Header>
          {character.name}
        </List.Item>
        <List.Item>
          <List.Header>Status</List.Header>
          {character.status}
        </List.Item>
        <List.Item>
          <List.Header>Species</List.Header>
          {character.species}
        </List.Item>
        <List.Item>
          <List.Header>Gender</List.Header>
          {character.gender}
        </List.Item>
        <List.Item>
          <List.Header>Origin</List.Header>
          {character.origin.name}
        </List.Item>
      </List>
    </Segment>
  );
}

export default CharacterDetail;
