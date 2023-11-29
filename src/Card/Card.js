import './Card.css'
import alien from '../alien.svg'


function Card({location, description, id, isFavorite, toggleFavorite, deleteSighting}){

return(

    

    <div className='card'>
        <div className='card-header'>
            <div className='logo-container'>
                <img src={alien} alt='App Logo' className='Alien-logo'/> 
            </div>
            <h3 className='location'>{location}</h3> 
            <button onClick={toggleFavorite}>{isFavorite ? 'Unfavorite' : 'Please Favorite'}</button>
        </div>
        <p>{description}</p>
        <button onClick={()=> deleteSighting(id)}>Trash</button>


    </div>
)

}

export default Card












