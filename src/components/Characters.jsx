import React, {useState, useEffect} from 'react';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
       fetch('https://rickandmortyapi.com/api/character')
       .then(res =>res.json())
       .then(data=> setCharacters(data.results))
    }, []);


    return (
        <div className='Characters'>
            {characters.map((character, index)=>(
            <div>
                <p key={index}>{character.name}</p>
                <p>{character.species}</p>
                <p>-------------------</p>
            </div>
            ))}
        </div>
    );
}

export default Characters;
