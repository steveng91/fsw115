var students = [
    {name: "John", city: " California"},
    {name: "Peter", city:" London"},
    {name: "Mathew", city:" Manchester"},
    {name: "Jane", city:" Phoenix"}
]
for(let i = 0; i < students.length; i++){
    console.log(students[i].name + students[i].city)
}
var student1 = [
    {state:" California",dateOfBirth:" 08/13/1976",payRate:" $12.50"},
    {state:" Southern England",dateOfBirth:" 10/10/85",payRate:" $10.00"},
    {state:" Northern England",dateOfBirth:" 12/16/1954",payRate:" $20.50"},
    {state:" Arizona",dateOfBirth:" 05/15/1950",payRate:" $22.00"}
]
for(let i = 0; i<student1.length;i++){
    console.log(students[i].name + students[i].city +student1[i].state + student1[i].dateOfBirth + student1/[i].payRate)
}

const gradStudents = [
    {name: "John", city: " California"},
    {name: "Peter", city:" London"},
    {name: "Mathew", city:" Manchester"},
    {name: "Jane", city:" Phoenix"}
]
for(let i = 0; i < gradStudents.length; i++){
    console.log(gradStudents[i].name + gradStudents[i].city)
}
const gradStudent1 = [
    {state:" California",dateOfBirth:" 08/13/1976",payRate:" $12.50"},
    {state:" Southern England",dateOfBirth:" 10/10/85",payRate:" $10.00"},
    {state:" Northern England",dateOfBirth:" 12/16/1954",payRate:" $20.50"},
    {state:" Arizona",dateOfBirth:" 05/15/1950",payRate:" $22.00"}
]
for(let i = 0; i<gradStudent1.length;i++){
    console.log(gradStudents[i].name + gradStudents[i].city +gradStudent1[i].state + gradStudent1[i]. dateOfBirth + gradStudent1[i].payRate)
}
//my expectation of the code was for loops would loop through the array's and display the string values in the console. output matched expectation

const multipliers = [1,2,3,4,5,6,7,8,9,10]
const multiplican = [1,2,3,4]
const tableStart = 1
const tableEnd = 12
const table = []

for (let i = 1; i < 13; i++){
    table.push(
        {"name":i,"values":[]}
    )
    for (let j = 1; j < 13; j++){
        table[i-1].values.push(
            {
                [j.toString()]:`${i} x ${j} = ${i * j}`
            }
        )
    }
  console.log(table[i-1])
}
