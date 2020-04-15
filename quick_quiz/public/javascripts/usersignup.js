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

    // console.log("now fetch call");
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




// let lusername = document.getElementById('lusername');
// let lpassword = document.getElementById('lpassword');


// document.getElementById('llogin').addEventListener('click', (e) => {

//     // console.log("login clicked")

//     let url = "http://localhost:3000/users/login";

//     let data = {

//         "username": lusername.value,
//         "password": lpassword.value
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
//                location = "../dash.html";
//                localStorage.setItem('token',json.token);
//             }
//             else
//             {
//                 console.log("Unauthorized user");
//             }

//         })

//         .catch((err) => console.log("Error occure"));

// })



// logout baki 6

// document.getElementById('llogin').addEventListener('click', (e) => {

//     // console.log("login clicked")

//     let url = "http://localhost:3000/users/login";

//     let data = {

//         "username": lusername.value,
//         "password": lpassword.value
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
//                location = "../about.html";
//                localStorage.setItem('token',json.token);
//             }

//         })

//         .catch((err) => console.log("Error occure"));

// })