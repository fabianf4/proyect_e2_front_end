const addDriverToTruck = async ()=>{
    const plate= document.getElementById("plate").value

    const response = await fetch(`http://localhost:3000/truck/addDriver/${plate}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        params: JSON.stringify({

        }),
        body: JSON.stringify({
            "identyCard": document.getElementById('identyCard').value,   
        })
    })

    const result = await response.json()

    console.log(result)

    const res=document.getElementById('response');
    res.innerHTML=result.result?"Added Driver to truck":"Error adding driver"
    res.className=result.result?'alert alert-success':'alert alert-danger'
}

//Evento boton
document.getElementById('btn').addEventListener('click',addDriverToTruck)