let token = localStorage.getItem("token")

let userscore = sessionStorage.getItem("myscore"); // fetching userscore from session storage
console.log(userscore);
let tq = sessionStorage.getItem('totalqustion');

var htmls = `

       <em><h1 id="demo" class="text-center my-3 display-2 border border-dark rounded zoom animate">Result<h1></em>
  
       <!-- table start -->
   
       <div class="container">
           <div class="mx-2 my-2">
               <table class="table">
                   <tbody>
                     <tr class="table-warning">
                       <td scope="row">Total Qustions</td>
                       <td>${tq}</td>
   
                     </tr>
                     <tr class="table-primary">
                       <td scope="row">Right Answer</td>
                       <td>${userscore}</td>
                     </tr>
                     <tr class="table-secondary">
                       <td scope="row">Wrong Answer</td>
                       <td>${tq-userscore}
                     </tr>
                     <tr class="table-success zoom">
                       <td scope="row">Score</td>
                       <td>${userscore}</td>
                     </tr>
                   </tbody>
                 </table>    
           </div>
       </div>
   <div class="container">
       <div class="row">
       
        <img src="./images/certificate.jpg" class="w-25 zoom" alt="certificate">
        <h1 class="my-5 scal" id="textsize">Congretulations</h1>
       </div>
       </div>
       `
console.log(htmls)

document.getElementById('myscores').innerHTML = htmls;

/*
created by Shubham Khunt

============contact============

Email   :-   shubhamkhunt08@gmail.com
github  :-   https://github.com/shubhamkhunt04
linkdin :-   https://www.linkedin.com/in/shubhamkhunt
*/