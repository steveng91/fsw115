fetch('menu.json')
    .then((Response) =>{
        return Response.json()
    })
    .then((menu)=>{
        console.log(menu)
    })
    .catch((err)=>{
        return "menu unavailable"
    })