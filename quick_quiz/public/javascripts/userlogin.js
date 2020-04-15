let lusername = document.getElementById('lusername');
let lpassword = document.getElementById('lpassword');


document.getElementById('llogin').addEventListener('click', (e) => {

    // console.log("login clicked")

    let url = "http://localhost:3000/users/login";

    let data = {
        "username": lusername.value,
        "password": lpassword.value
    }

    let params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    // console.log("now fetch call");
    fetch(url, params)
        .then((res) => {
            return res.json();
        })

        .then((json) => {
            console.log(json);
            if (json.success == true) {
               location = "../dash.html";
               localStorage.setItem('token',json.token);
            }
            else
            {
                alert("Unauthorized user");
            }
        })
        .catch((err) => alert("Unauthorized user"));
        lusername.value = "";
        lpassword.value = "";
})


