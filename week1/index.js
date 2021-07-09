//fetch('menu.json')
//    .then((Response) =>{
//        return Response.json()
//    })
//    .then((menu)=>{
//        console.log(menu)
//    })
//    .catch((err)=>{
//        return "menu unavailable"
//    })
var data = require("./menu.json")
console.log(data.menu)
//console.log(data.menu.appetizers)