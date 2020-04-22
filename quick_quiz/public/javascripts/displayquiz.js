let token = localStorage.getItem("token");
// document.getElementById('startid').addEventListener('click',(e)=>{

let url = 'http://localhost:3000/addquiz';

let params = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
}

fetch(url, params)
    .then((res) => res.json())
    .then((json) => {

        sessionStorage.setItem('jsonquizdata',JSON.stringify(json));// storing all qustion into session storage

        var index = 1;
        let html = "";
        html1 = `<hr><div class="container my-5 table-responsive">
    <table class="table table-hover table-primary" id="outline">
      <thead>
        <tr>
          <th scope="col">Sr.No.</th>
          <th scope="col">Topic</th>
          <th scope="col">Total Qustion</th>
          <th scope="col">Total Marks</th>
          <th scope="col">Let's GO</th>
        </tr>
      </thead>
      <tbody>
  `;
        html2 = ``;
        html3 = ` </tbody>
  </table>
  </div>`;

        json.forEach(element => {

            html2 += `
      <tr>
        <th scope="row">${index}</th>
        <th>${element.quizname}</th>
        <th>${element.qusans.length}</th>
        <th>${element.qusans.length}</th>
        <th class="zoom"><button type="button" id="startbtn${index}" class="btn btn-dark" value="${element.quizname}">START</button></th>
      </tr>`;
            index++;
        });

        html = html1 + html2 + html3;
        // console.log(html)
        document.getElementById('quiztable').innerHTML = html;

        for(let i=1;i<index;i++)
        {
            document.getElementById(`startbtn${i}`).addEventListener('click',(e)=>{
                console.log(e.target.value);
                sessionStorage.setItem('targetquiz',e.target.value);
                location = "../quiz.html"
            })
        }

        
// document.getElementById(`startbtn${index}`).addEventListener('click',(e)=>{
//     console.log(`clicked ${index}`);
// })
    })


// fetch(url,params)
// .then((res)=> res.json())
// .then((json)=>{
//     html = "";
//     json.forEach(element => {
//         console.log(element)
//         html+= `<div id="nav">
//         <b>Qustion :</b>
//         <p>${element.qustion}</p>
//         <br>
//         <div>
//         <p>options</p>
//         <br>
//         <b>A : </b>${element.options[0].A}
//         <br>
//         <b>B : </b>${element.options[1].B}
//         <br>
//         <b>C : </b>${element.options[2].C}
//         <br>
//         <b>D : </b>${element.options[3].D}
//         </div>
//     </div>  `

//     });

//     sessionStorage.setItem('mydata',JSON.stringify(json));
//     location = "../quiz.html"

// console.log(html)
// });
// })