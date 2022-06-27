let getTable = async ()=> {
    let pet = await fetch("http://localhost:3000/driver/")
    let info = await pet.json()



    let bodyTable=""
    info.data.forEach((data)=>{
        bodyTable +=`<tr>
            <th>${data.identyCard}</th>
            <td>${data.names}</td>
            <td>${data.lastName}</td>
            <td>${data.birth.split('T')[0]}</td>
            <td>${data.cellPhone}</td>
        </tr>
        `
    })

    document.getElementById('tableBody').innerHTML = bodyTable
}

getTable()