import pokemon from './img/pokemon.png';
import './App.css';

function Header(){
        return (
        <img src={pokemon} alt="logoPokemon" className='logoPokemon'/>
    )
        }

export default Header