import {useState, useEffect} from 'react'
const PlanetSelector = ({planets})=> {
    const [colour, setColour] = useState("red")



const filteredPlanets = planets.filter((planet) => {
    planet.color.includes(colour) 

})

const handleColour = (event) => {
setColour(event.target.value)
console.log(filteredPlanets)
}

    return (
        <>
        <h2>Planet Selector</h2>
        <select onChange={handleColour}>
            <option value="blue">Blue</option>
            <option value="grey">grey</option>
            <option value="brown">brown</option>
            <option value="green">green</option>
            <option value="white">white</option>
            <option value="red">red</option>
            <option value="tan">tan</option>
            <option value="orange">orange</option>
            <option value="golden">golden</option>
        </select>
        
        

        </>
    )
}

export default PlanetSelector