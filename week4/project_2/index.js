
var btn = document.getElementById('list')
btn.addEventListener('click', function(){
    const swapi = axios.get('https://swapi.dev/api/people')
    .then(response=>{
        console.log(response.data)
       list(response.data)
       })
    .catch(error=>{console.log(error)})
   function list(data){
       console.log(data)
      // console.log(response.data,response.data.length)
       for (let i = 0; i < data.results.length; i++) {
           const li = document.createElement('li')
           li.textContent = data.results[i].name
           document.body.appendChild(li)
       }
   }
})
var btn2 = document.getElementById('list')
btn2.addEventListener('click', function(){
    const pokemon = axios.get('https://swapi.dev/api/people')
    .then(response=>{
        console.log(response.data)
       list(response.data)
       })
    .catch(error=>{console.log(error)})
   function list(data){
       console.log(data)
      // console.log(response.data,response.data.length)
       for (let i = 0; i < data.results.length; i++) {
           const li = document.createElement('li')
           li.textContent = data.results[i].name
           document.body.appendChild(li)
       }
   }
})


