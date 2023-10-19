async function login_sub(event){
    event.preventDefault();
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    
    if ( !password || !email) {
        alert("Please fill all the fields");
        return;
    };

    var dataTBC = {
        email: email,
        password: password
    };

    try{
        const response = await fetch('/login_sub', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataTBC)
        });
        const data = await response.json();
        if(data.length == 0){
            alert("Wrong password or email");
            return;
        } else {
            const pseudo = data[0].pseudo;
            alert("You are now logged in as "+pseudo);
            return;
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }catch(e){
        alert("Error: "+e);
        return;
    }
}