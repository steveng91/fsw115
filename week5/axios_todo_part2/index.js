const getItems  = () =>{
     axios.get("http://api.bryanuniversity.edu/stevensToDoList/list/")
     .then (response =>{
          displayItems(response.data)
     })
     .catch(error => console.log(error))
}
getItems()

const displayItems = (items)=>{
     const container = document.getElementById("itemContainer")
     items.forEach(item =>{
          console.log(item)
          const card = document.createElement('div')
          card.classList.add('itemCard')

          const name = document.createElement('h1')
          name.textContent = item.name
         
          if(item.isComplete == true){
               name.style.textDecoration = 'line-through'
          }
          card.appendChild(name)

          const deleteBtn = document.createElement('button')
          deleteBtn.textContent = 'delete me'
          deleteBtn.id = item._id
          deleteBtn.addEventListener('click', deleteItem)
          card.appendChild(deleteBtn)

          const completeBtn = document.createElement('button')
          completeBtn.addEventListener('click',updateItem)
          let btnText = ""
          item.isComplete === true ? btnText = 'Mark incomplete' : btnText = 'Mark Complete'
          completeBtn.id = item._id
          completeBtn.value =  item.isComplete
          completeBtn.textContent = btnText
          
          card.appendChild(completeBtn)
          container.appendChild(card)
     })
}

const postItem = (e) => {
     e.preventDefault()

     let name = document.getElementById('nameInput').value
     let description = document.getElementById('descriptionInput').value
     let price = document.getElementById('priceInput').value
     let isComplete = document.getElementById('completedInput').checked

     let data = {
          name: name,
          description: description,
          price: price,
          isComplete: isComplete
     }

     axios.post("http://api.bryanuniversity.edu/stevensToDoList/list/", data)
     .then ( () =>{
          location.reload()
     })
     .catch(error => console.log(error))
}
const form = document.getElementById('todoForm')
form.addEventListener('submit', postItem)

const deleteItem = (e) =>{
     const id = e.target.id
     axios.delete(`http://api.bryanuniversity.edu/stevensToDoList/list/${id}`)
     .then ( () =>{
          location.reload()
     })
     .catch(error => console.log(error))
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
     axios.put(`http://api.bryanuniversity.edu/stevensToDoList/list/${id}`, updateData)
     .then ( () =>{
          location.reload()
     })
     .catch(error => console.log(error))
}