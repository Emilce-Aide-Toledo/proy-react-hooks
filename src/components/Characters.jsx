import React, {useState, useEffect, useReducer} from 'react';

const initialState ={
     favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state; 
    }
}

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch]= useReducer(favoriteReducer, initialState)

    useEffect(() => {
       fetch('https://rickandmortyapi.com/api/character')
       .then(res =>res.json())
       .then(data=> setCharacters(data.results))
    }, []);

    const handleClick = favorite =>{
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
    }


    return (
        <div className='Characters'>

             {favorites.favorites.map(favorite => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
             ))}

            {characters.map((character)=>(
            <div className='Item' key={character.id}>
                <p>{character.name}</p>
                <p>{character.species}</p>
                <button type='button' onClick={()=> handleClick(character)}>Agregar a favorito</button>
                <p>-------------------</p>
            </div>
            ))}
        </div>
    );
}

export default Characters;
