import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './PokemonsCards'
import useFetchPokemon from './FetchPokemon'
import { Link } from 'react-router-dom';

function TriPokemon({data}){

  const [search,handleSearch] = useState('')
  const [searchResult,setSearchResult] = useState({resultData : [],
                                                  resultVerif : false})
  const Search = (e) =>{
    handleSearch(e.target.value)
  }

  useEffect(()=>{
  
      let results = data.filter(data=>data.nameFr.toLowerCase().includes(search.toLowerCase()))
      if(search===''){
        setSearchResult({resultVerif : false})
      } else {
        setSearchResult ({resultData : results,
                        resultVerif: true})
      }

  },[search])

  return(<> <div className="search">
              <div className="searchBar container input-group mt-3">
                <input type="search" value = {search} onChange={Search} placeholder="Entrez le nom d'un pokemon" aria-describedby="button-addon1" class="form-control border-0 bg-light"></input>
                <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
              </div>
            </div>
            
          
          {(searchResult.resultVerif)?
            <div className="pokemons container">
            {searchResult.resultData.map(data=>(
            <Link className='link' to = {`/${data.id}`} key={data.nameFr}>
              <Card imageFront={data.imageFront} name={data.nameFr}/></Link>  
            ))}            
          </div> 
          : <div className="pokemons container">
            {data.map(data=>(
            <Link className='link' to = {`/${data.id}`} key={data.nameFr}>
              <Card imageFront={data.imageFront} name={data.nameFr}/>
            </Link>
          ))    
              .slice(0,8)}
            </div>}
        </div>
        </>
  )
}

function PokemonList (){
  const [data]= useFetchPokemon()
  return(
  <div className="container">
    <TriPokemon data={data}/>
  </div>
  )
}

export default PokemonList