const addDriver = async ()=>{
    const response = await fetch("http://localhost:3000/driver/",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "identyCard": document.getElementById('identyCard').value,
            "names": document.getElementById('name').value,
            "lastName": document.getElementById('lastName').value,
            "birth" : document.getElementById('birth').value,
            "cellPhone" : document.getElementById('cellphone').value

            
        })
    })

    const result = await response.json()

    console.log(result)

    const res=document.getElementById('response');
    res.innerHTML=result.result?"Added Driver":"Error adding driver"
    res.className=result.result?'alert alert-success':'alert alert-danger'
}

//Evento boton
document.getElementById('btn').addEventListener('click',addDriver)