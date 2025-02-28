import { useEffect, useState } from "react";
import { getMarvelCharacters } from "../api/marvelApi";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getMarvelCharacters().then(setCharacters);
  }, []);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} width="100" />
            <h3>{char.name}</h3>
            <p>{char.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
