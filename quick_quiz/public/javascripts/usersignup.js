let susername = document.getElementById('susername');
let spassword = document.getElementById('spassword');
let semail = document.getElementById('semail');
let smobile = document.getElementById('smobile');
let scollege = document.getElementById('scollege');


document.getElementById('ssignup').addEventListener('click', (e) => {

    // console.log("signup clicked")

    let url = "http://localhost:3000/users/signup";

    let data = {

        "username": susername.value,
        "password": spassword.value,
        "email": semail.value,
        "mobile": smobile.value,
        "college": scollege.value
    }

    let params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    fetch(url, params)
        .then((res) => {
            return res.json();
        })

        .then((json) => {
            console.log(json);
            if (json.success == true) {
                location = "../login.html"
            }

        })

        .catch((err) => console.log("Error occure"));


    susername.value = ""
    spassword.value = ""
    semail.value = ""
    smobile.value = ""
    scollege.value = ""
})


/*
created by Shubham Khunt

============contact============

Email   :-   shubhamkhunt08@gmail.com
github  :-   https://github.com/shubhamkhunt04
linkdin :-   https://www.linkedin.com/in/shubhamkhunt
*/