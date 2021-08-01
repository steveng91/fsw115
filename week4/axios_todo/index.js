 axios.get("http://api.bryanuniversity.edu/stevensToDoList/list/")
 .then(response=> { for (let i = 0; i < response.data.length; i++) {
    const li = document.createElement('li')
    li.innerHTML =response.data[i].name
    if(response.data[i].isComplete == true){
         li.style.textDecoration = "line-through"
    }
    document.body.appendChild(li)         
}
})
 .catch(error => console.log(error))