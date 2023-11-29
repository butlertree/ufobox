// import logo from '../logo.svg';
import logo from '../flying-saucer.svg'
import './App.css';
import Sightings from '../Sightings/Sightings';
import Form from '../Form/Form';
import { useState, useEffect } from 'react'


//Hello
function App () {
const dummySightings = [
  {
    "id": 1,
    "location": "Denver, CO",
    "description": "Bright lights over Cheesman Park"
    },
    {
    "id": 2,
    "location": "Chicago, IL",
    "description": "Silver shape hovering low over the Chicago River, darted away with no sound"
    },
    {
    "id": 3,
    "location": "Louisville, KY",
    "description": "Bright light and humming noise accompanied by high atmospheric pressure, localized over one house"
    }
]

const [showFavorites, setShowFavorites] = useState(false)

const [sightings, setSightings] = useState([])

function addSighting(newSighting){
fetch('http://localhost:3001/sightings',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newSighting),
})
.then(response => response.json())
.then(data => setSightings([...sightings, data]))
.catch(error => console.log(error.message))
}

function deleteSighting(id){
  const filteredSightings = sightings.filter(sighting => sighting.id !== id)
  setSightings(filteredSightings)
}

function getSightings(){
  fetch('http://localhost:3001/sightings')
  .then(response => response.json())
  .then(data => setSightings(data))
  .catch(error => console.log(error.massage))
}
useEffect(() => {
getSightings();

}, [])

function toggleFavorite(id) {
  // Find the sighting with the given ID and toggle its favorite status
  const updatedSightings = sightings.map((sighting) => {
    if (sighting.id === id) {
      return {
        ...sighting,
        isFavorite: !sighting.isFavorite, // Toggle the favorite status
      };
    }
    return sighting;
  });

  setSightings(updatedSightings); //changed the favorite state of the sightings array
}

// Filter sightings based on the showFavorites state if showFavorites true filter if false show all sightings.  
const filteredSightings = showFavorites ? sightings.filter((sighting) => sighting.isFavorite) : sightings;

  return (

  <main className='App'>
      <h1 className='bigHeading'>SIGHTINGS</h1>
      <img src={logo} alt='App Logo' className='App-logo'/>
      <Form addSighting={addSighting}/>
      <button onClick={() => setShowFavorites(!showFavorites)}>
      {showFavorites ? 'Show All Sightings' : 'Show Favorites Only'}
      </button>
      {!sightings.length && <h2>No Sightings yet -- add some!</h2> }
      <Sightings sightings={filteredSightings} deleteSighting={deleteSighting} toggleFavorite={toggleFavorite}/>


  </main>
  )

}




export default App;
