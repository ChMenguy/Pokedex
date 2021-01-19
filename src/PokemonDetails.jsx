import React, { useEffect, useState } from 'react';
import useFetchPokemon from './FetchPokemon'
import axios from 'axios'

function useFetchDescription({id}){
    const [description, handleDescription] = useState()
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .then(res=>{
           console.log(res)
        })
    })
    return(
        'test'
    )
}

function Affichage({id}){

    const [data]=  useFetchPokemon();
    

    return(
        <div className="container pt-5">
            <div className="name mb-5">
               {data.map(data=>(
                    (data.id == id) ? <h1>{data.nameFr} N°{id}</h1> : ''
                    ))}     
            </div>
            <div className="species">
              <div className='img'>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="img"/>
            </div>
                <div className="details">
                    
                </div>   
            </div>
                      
        </div>
    )
}

function PokemonDetails (){

    const id = window.location.pathname.substr(1)
    const [description] = useFetchDescription({id})
    return(
        <Affichage id={id}/>
    )
}

export default PokemonDetails 