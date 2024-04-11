const employeeArray = 
[
    { id: 1 , name: "Erős István", city: "Szeged", salery: 395},
    { id: 2 , name: "Próba Géza", city: "Szeged", salery: 394},
    { id: 3 , name: "Lantós Mária", city: "Pécs", salery: 398},
    { id: 4 , name: "Csibe Borbála", city: "Szolnok", salery: 398},
    { id: 5 , name: "Rendes Imre", city: "Szeged", salery: 391}
]

const empsBody = document.getElementById('empsBody')
var rows = ''
employeeArray.forEach((emp) => {
    var row = 
    `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.city}</td>
            <td>${emp.salery}</td>
        </tr>
    `
    rows += row
} )
empsBody.innerHTML = rows