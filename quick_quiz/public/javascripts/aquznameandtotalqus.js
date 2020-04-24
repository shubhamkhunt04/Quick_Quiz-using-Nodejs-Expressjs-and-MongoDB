let quizname = document.getElementById('quizname')
let totalqustion = document.getElementById('totalqustion')

document.getElementById('nextbtn').addEventListener('click', (e) => {

    e.preventDefault();
    sessionStorage.setItem('quizname', quizname.value);
    sessionStorage.setItem('totalqustion', totalqustion.value);
    console.log("Set successfully");
    location = "../aaddquiz.html"
})

/*
created by Shubham Khunt

============contact============

Email   :-   shubhamkhunt08@gmail.com
github  :-   https://github.com/shubhamkhunt04
linkdin :-   https://www.linkedin.com/in/shubhamkhunt
*/