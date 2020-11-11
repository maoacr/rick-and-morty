import React, { useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
    })
  }, [])

  console.log(characters);

  const card = characters.map(character => {
    console.log(character)
    return (
      <React.Fragment>
        <div className="Card">
          <img src={character.image} />
        </div>
      </React.Fragment>
    )
  } ) 

  return (
    <div className="App">
      {card}
    </div>
  );
}

export default App;
