import React, { useEffect, useState } from 'react';

function useFetchPokemon(){
    const [data,fetchPokemon] = useState({
      nameFr : [],
    })
  
    useEffect(()=>{async function fetchAllPokemon(){
      const pokeData = []
      for (let index = 1; index < 800; index++) {
        const reqName = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`);
        const resName = await reqName.json();
        const nameArray = resName.names;
        let nameFr = ''
        nameArray.forEach(name => {
          if(name.language.name==='fr'){
            nameFr = name.name
          }
        });
        pokeData.push({
          id : resName.id,
          nameFr: nameFr,
          imageFront : `https://pokeres.bastionbot.org/images/pokemon/${resName.id}.png`
        })
      fetchPokemon({
                nameFr : pokeData
            }) 
      }
    }fetchAllPokemon()    
    },[])
  
    return [
      data.nameFr,
    ]
  
  }

  export default useFetchPokemon;