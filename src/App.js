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

  console.log(characters)


  // useEffect(() => {
  //   fetch(`${API}`)
  //     .then((response) => {
  //       const data = response.json();
  //       return data;
  //     })
  //     .then((data) => {
  //       const results = data.pokemon_entries.map( item => {
  //         return { 
  //           name: item.pokemon_species.name,
  //           id: item.entry_number
  //         }
  //       }) 
  //       setCharacter(results) 
  //     });
  //   }, []);


  return (
    <div className="App"></div>
  );
}

export default App;
