function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: "POST",    
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName, 
            email: userEmail
        })
    })
    .then(res => {return res.json()})
    .then(data => {
        console.log(data)
        document.body.innerHTML = data["id"]
    })
    .catch(err => {
        document.body.innerHTML = err.message
    })
}

submitData("test", "testEmail")