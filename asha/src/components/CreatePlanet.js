import { useState } from "react"

const CreatePlanet = ({createPlanet})=> {

    const [form, setForm] = useState({})

    const handleCreatePlanet = (event) => {
        event.preventDefault()
        setForm({
            "Planet": event.target.create1.value,
            "Color" : ["default", event.target.create2.value],
            "RingSystem" : event.target.create3.value,
            "MeanTemperatureC" : event.target.create4.value,
            "NumberOfMoons" : event.target.create5.value
        })
        createPlanet(form)
    }
    
    return (
        <form onSubmit={handleCreatePlanet}>
            <ul>
                <label id="create1">Give your planet a name</label>
                <input id="create1"/>
                <label id="create2"/>What colour is your planet?<label/>
                <select id="create2">
                    <option value=""></option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Grey">Grey</option>
                    <option value="Brown">Brown</option>
                    <option value="White">White</option>
                    <option value="Tan">Tan</option>
                    <option value="Golden">Golden</option>
                </select>
                <label id="create3"/>Does your planet have rings?<label/>
                <input id="create3" type="radio" name="hasRings" value="true" />
                <input id="create3" type="radio" name="hasRings" value="false" />
                <label id="create4"/>What is the average temperature on your planet?<label/>
                <input type="number" min="0" max="1000" id="create4" />
                <label id="create5"/>How many moons does your planet have?<label/>
                <input type="number" min="0" max="100" id="create5"/>
            </ul>
            <input type="submit"/>  
        </form>
    )
}

export default CreatePlanet