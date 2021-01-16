import React from 'react';


function Affichage({id}){
    return(
        <div className="container">
            <div>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="img"/>
            </div>
        </div>
    )
}

function PokemonDetails (){

    const id = window.location.pathname.substr(1)


    return(
        <Affichage id={id}/>
    )
}

export default PokemonDetails 