const addTruck = async ()=>{
    const response = await fetch("http://localhost:3000/truck/",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "plate": document.getElementById('plate').value,
            "brand": document.getElementById('brand').value,
            "model": document.getElementById('model').value,
            "weight" : document.getElementById('weight').value
        })
    })

    const result = await response.json()

    console.log(result)

    const res=document.getElementById('response');
    res.innerHTML=result.result?"Added truck":"Error adding truck"
    res.className=result.result?'alert alert-success':'alert alert-danger'
}

//Evento boton
document.getElementById('btn').addEventListener('click',addTruck)