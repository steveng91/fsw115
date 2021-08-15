async function lukeInfo(){
    try{
    const lukeData = await axios.get('https://swapi.dev/api/people/1/')
    const homeworld = await axios.get(lukeData.data.homeworld)
    const starShip = await axios.get(lukeData.data.starships[0])
    const starShip2 = await axios.get(lukeData.data.starships[1])
       displayData(lukeData,homeworld,starShip,starShip2)
    }
    catch(error){
        console.log(error)
    }
}
lukeInfo() 

function displayData(lukeData, homeworld,starShip,starShip2) {
    const h1 = document.createElement('h1')
    h1.textContent =`Name: ${lukeData.data.name}`
    document.body.appendChild(h1)
    const hw = document.createElement('h2')
    hw.textContent = `Homeworld: ${homeworld.data.name}`
    document.body.appendChild(hw)
    const ship1 = document.createElement('h2')
    ship1.textContent = `Starship used by Luke in episode 4: ${starShip.data.name}`
    document.body.appendChild(ship1)
    const ship2 = document.createElement('h2')
    ship2.textContent = `Starship used by Luke in episode 6: ${starShip2.data.name}`
    document.body.appendChild(ship2)
    console.log(lukeData,homeworld,starShip,starShip2)
}

