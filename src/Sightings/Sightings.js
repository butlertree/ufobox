import './Sightings.css';
import Card from '../Card/Card';


function Sightings({sightings, deleteSighting}){

    const sightingCards = sightings.map(sighting => {

        return (
            <Card
                location={sighting.location}
                description={sighting.description}
                id={sighting.id}
                key={sighting.id}
                deleteSighting={deleteSighting}


            />

        )


    })


    return(
        <div className='ideas-container'>
            {sightingCards}

        </div>
    )
}

export default Sightings;





