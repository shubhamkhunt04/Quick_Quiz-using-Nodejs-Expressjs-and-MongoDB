let name = document.getElementById('name');
let email = document.getElementById('email');
let country = document.getElementById('country');
let subject = document.getElementById('subject');


// document.getElementById('ssignup').addEventListener('click', (e) => {

//     // console.log("signup clicked")

//     let url = "http://localhost:3000/users/signup";

//     let data = {

//         "username": susername.value,
//         "password": spassword.value,
//         "email": semail.value,
//         "mobile": smobile.value,
//         "college": scollege.value
//     }

//     let params = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }

//     // console.log("now fetch call");
//     fetch(url, params)
//         .then((res) => {
//             return res.json();
//         })

//         .then((json) => {
//             console.log(json);
//             if (json.success == true) {
//                location = "../login.html"
//             }

//         })

//         .catch((err) => console.log("Error occure"));

// })


// console.log(name.value);
// console.log(email);
// console.log(country);
// console.log(subject);

// let co = document.getElementById('consub');
// console.log(co);

document.getElementById('consub').addEventListener('click',(e)=>{

    let urls = "http://localhost:3000/contactus";

    let datas = {
        "name":name.value,
        "email":email.value,
        "country":country.value,
        "subject":subject.value
    }
    let paramss =  {
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
            console.log(json);
        })

        .catch((err) => console.log("Error occure",err));

        name.value = "",
        email.value = "",
        country.value = "",
        subject.value = ""
});
