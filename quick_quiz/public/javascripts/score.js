
    let token = localStorage.getItem("token")
    let  url = 'http://localhost:3000/score';

    let params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }


    fetch(url,params)
    .then((res)=> res.json())
    .then((json)=>{
        console.log(json);  // getting user score
        let tq = sessionStorage.getItem('totalqustion');
       var htmls = `


       <em><h1 id="demo" class="text-center my-3 display-2 border border-dark rounded-circle zoom">Result<h1></em>
  
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
                       <td>${json}</td>
                     </tr>
                     <tr class="table-secondary">
                       <td scope="row">Wrong Answer</td>
                       <td>${tq-json}
                     </tr>
                     <tr class="table-success zoom">
                       <td scope="row">Score</td>
                       <td>${json}</td>
                     </tr>
                   </tbody>
                 </table>    
           </div>
       </div>
   <div class="container">
       <div class="row">
       
        <img src="./images/certificate.jpg" class="w-25 zoom" alt="certificate">
        <h1 class="my-5 zoom" id="textsize">Congretulations</h1>
       </div>
       </div>
       `
    console.log(htmls)
    
    document.getElementById('myscores').innerHTML = htmls;
    })
    .catch((err)=>console.log(err));

    