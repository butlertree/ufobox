import { useState } from 'react';
import './Form.css' 


function Form({addSighting}){

const [location, setLocation] =useState("")
const [description, setDescription] =useState("")


function submitSightings(event){
event.preventDefault()

const newSighting = {
    id: Date.now(),
    location,
    description
}
addSighting(newSighting)
clearInput()
}
function clearInput(){
    setLocation('')
    setDescription('')
}




return (

    <form>
        <input
            type='text'
            placeholder='Location'   
            name='location' 
            value={location}
            onChange={event => setLocation(event.target.value)}
        />

        <input
            type='text'    
            placeholder='Description'
            name='description'
            value={description}
            onChange={event => setDescription(event.target.value)}
        />

        <button onClick = { event => submitSightings(event)}>Submit</button>    

    </form>
)
}

export default Form