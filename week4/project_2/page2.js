var btn2 = document.getElementById('btn3')
btn2.addEventListener('click', function(){
    const pokemon = axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response=>{
        console.log(response.data)
       list(response.data)
       })
    .catch(error=>{console.log(error)})
   function list(data){
       console.log(data)
       for (let i = 0; i < data.results.length; i++) {
           const li = document.createElement('li')
           li.textContent = data.results[i].name
           document.body.appendChild(li)
       }
   }
})

