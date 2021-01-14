import React from 'react';

function PokemonDetails (){

    const id = window.location.pathname.substr(1)

    return(
        <div>
           {id}
        </div>
    )
}

export default PokemonDetails 