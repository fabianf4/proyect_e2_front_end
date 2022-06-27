let getTable = async ()=> {
    let pet = await fetch("http://localhost:3000/truck/")
    let info = await pet.json()



    let bodyTable=""
    info.data.forEach((data)=>{
        bodyTable +=`<tr>
            <th>${data.plate}</th>
            <td>${data.brand}</td>
            <td>${data.model.split('T')[0]}</td>
            <td>${data.weight}</td>
        </tr>
        `
    })

    document.getElementById('tableBody').innerHTML = bodyTable
}

getTable()


