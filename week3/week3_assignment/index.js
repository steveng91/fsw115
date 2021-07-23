const xhr = new XMLHttpRequest()

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true)
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        pokeList(data.results)
        console.log(data)
    }
}

function pokeList(data) {
    for(i = 0; i < data.length; i++){
         const pokemon = document.createElement('h3')
         pokemon.textContent = "pokemon: " +data[i].name
         document.body.appendChild(pokemon)
    }
}
