import './App.css';

function Card({imageFront,name}){
    return(
     <div className="card" style={{backgroundColor: `hsl(0, 0%, 95%)`}}>
       <img className="card-img-top" src={imageFront} alt="Cardimage-cap"></img>
       <div className="card-body">
         <h5 className="card-title">{name}</h5>
       </div>
     </div>
    )
         
 }

 export default Card