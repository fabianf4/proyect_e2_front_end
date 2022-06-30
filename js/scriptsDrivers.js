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
            <td>${button(data.identyCard)}</td>
        </tr>
        `
    })

    document.getElementById('tableBody').innerHTML = bodyTable
}
let button = (ic) => {
    return `
    <a class="btn btn-success" onclick="update('${ic}')" href="#update">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
    </a>
    <a class="btn btn-danger" onclick="deletee('${ic}')">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
    </a>
    `
}

async function update(ic){
    document.getElementById("update").className =""

    const pet = await fetch(`http://localhost:3000/driver/${ic}`)
    let info = await pet.json()

    console.log(info.data)

    document.getElementById('identyCard').value = info.data.identyCard
    document.getElementById('name').value = info.data.names
    document.getElementById('lastName').value = info.data.lastName
    document.getElementById('birth').value = info.data.birth.split('T')[0]
    document.getElementById('cellphone').value = info.data.cellPhone
}

const updateDriver = async ()=>{
    const response = await fetch("http://localhost:3000/driver/"+document.getElementById('identyCard').value,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            "names": document.getElementById('name').value,
            "lastName": document.getElementById('lastName').value,
            "birth" : document.getElementById('birth').value,
            "cellPhone" : document.getElementById('cellphone').value
        })
    })

    const result = await response.json()

    const res=document.getElementById('response');
    res.innerHTML=result.result?"Update driver":"Error Updating driver"
    res.className=result.result?'alert alert-success':'alert alert-danger'

    getTable()
}
document.getElementById('btn').addEventListener('click',updateDriver)

async function deletee(ic){

    const response = await fetch("http://localhost:3000/driver/"+ic,{
        method:'DELETE'
    })
    const result = await response.json()
    console.log(result.result)

    const res=document.getElementById('response');
    res.innerHTML=result.result?"Delete driver":"Error deleting driver"
    res.className=result.result?'alert alert-success':'alert alert-danger'

    getTable()
}

getTable()