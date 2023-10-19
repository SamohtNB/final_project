async function create_sub(event) {
    event.preventDefault();
    var pseudo = document.getElementById("pseudo").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    if (!pseudo || !password || !email) {
        alert("Please fill all the fields");
        return;
    }
    var data = {
        pseudo: pseudo,
        password: password,
        email: email
    };
    
    try{
        const response = await fetch('/create_sub', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        alert('your account has been created, you can now log in!');
    }catch(e){
        alert("Error: "+e);
        return;
    }
}
