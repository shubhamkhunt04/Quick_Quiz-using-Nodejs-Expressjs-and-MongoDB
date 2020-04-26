let name = document.getElementById('name');
let email = document.getElementById('email');
let country = document.getElementById('country');
let subject = document.getElementById('subject');

document.getElementById('consub').addEventListener('click', (e) => {

    let urls = "http://localhost:3000/contactus";

    let datas = {
        "name": name.value,
        "email": email.value,
        "country": country.value,
        "subject": subject.value
    }
    let paramss = {
        method: 'POST',
        body: JSON.stringify(datas),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(urls, paramss)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
           // console.log(json);
        })

        .catch((err) => console.log("Error occure", err));

    name.value = "",
        email.value = "",
        country.value = "",
        subject.value = ""
});

/*
created by Shubham Khunt

============contact============

Email   :-   shubhamkhunt08@gmail.com
github  :-   https://github.com/shubhamkhunt04
linkdin :-   https://www.linkedin.com/in/shubhamkhunt
*/