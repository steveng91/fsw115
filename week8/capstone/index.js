const getData = (url)=>{
    return new Promise( (resolve,reject) => {
          axios.get(url)
          .then(res => resolve(res.data.results))
          .catch(err => reject(err))
     })  
}
const sourceData = () => {
     let swapiUrl = 'https://swapi.dev/api/people?page='
     let newUrl;
     let pendingPromises = []

     for(let i = 1; i < 10; i++){

          newUrl = swapiUrl + i
          pendingPromises.push(getData(newUrl))
     }
     // console.log(pendingPromises)
     Promise.all(pendingPromises).then(data=>{
          // console.log(data)
          let cleanData = data.flat()
          charData(cleanData)
     })
}
sourceData()

const charData = (characters)=>{
     characters.forEach(people => {
          let name = `${people.name}` 
          // let description = `height: ${people.height} weight: ${people.mass}`
          let selector = document.getElementById('peopleId')
          let list = document.createElement('option')
          list.textContent = name
          selector.appendChild(list)
          
          // let selector2 = document.getElementById('description')
          // let list2 = document.createElement('option')
          // list2.textContent = description
          // selector2.appendChild(list2)                  
     })
}
const postItem = (e) =>{
     e.preventDefault()
     console.log("it works")
     let name1 = document.getElementById('peopleId').value
     let bounty = document.getElementById('bounty').value
     let isComplete = document.getElementById('isComplete').checked

     let data = {
          name: name1,
          price: bounty,
          isComplete: isComplete
     }
    axios.post("http://api.bryanuniversity.edu/stevensToDoList3/list/", data)
     .then( ()=>{
          location.reload()
     })
     .catch(error => console.log(error))
}
const form = document.getElementById('bountyPoster')
form.addEventListener('submit',postItem)

const getItems = ()=>{
     axios.get("http://api.bryanuniversity.edu/stevensToDoList3/list/")
     .then(res=>{
          displayItems(res.data)
     })
     .catch(err =>console.log(err))
}
getItems()
const displayItems =(items) =>{
     const container = document.getElementById('itemContainer')
     items.forEach(item=>{
          console.log(item)
          const card = document.createElement('div')
          card.classList.add('itemCard')
         
          const name = document.createElement('h1')
          name.textContent = item.name
          
          const price = document.createElement('h2')
          price.textContent = "bounty: " + item.price
          
          if(item.isComplete === true){
               name.style.textDecoration = 'line-through'
          }
          card.appendChild(name)
          card.appendChild(price)

          const deleteBtn = document.createElement('button')
          deleteBtn.textContent='Cancel Contract'
          deleteBtn.id = item._id
          deleteBtn.addEventListener('click', deleteItem)
          card.appendChild(deleteBtn)

          const completeBtn = document.createElement('button')
          completeBtn.addEventListener('click', updateItem)
          let btnText = ""
          item.isComplete === true ? btnText = 'Contract Incomplete':btnText='Contract Complete'
          completeBtn.id = item._id
          completeBtn.value = item.isComplete
          completeBtn.textContent = btnText
          card.appendChild(completeBtn)
          container.appendChild(card)
     })
}
const updateItem = (e)=>{
     const id = e.target.id
     let completed = e.target.value
     let completeData = null

     if (completed === 'false'){
          completeData = true
     }
     else{
          completeData = false
     }
     let updateData = {
          isComplete: completeData
     }
     axios.put(`http://api.bryanuniversity.edu/stevensToDoList3/list/${id}`, updateData)
     .then ( () =>{
          location.reload()
     })
     .catch(error => console.log(error))
}
const deleteItem = (e) =>{
     const id = e.target.id
     axios.delete(`http://api.bryanuniversity.edu/stevensToDoList/list/${id}`)
     .then ( () =>{
          location.reload()
     })
     .catch(error => console.log(error))
}