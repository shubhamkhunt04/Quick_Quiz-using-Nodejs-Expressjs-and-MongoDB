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
        html1 = `<hr><div class="container my-5 w-75 table-responsive">
    <table class="table table-hover table-primary" id="outline">
      <thead>
        <tr>
          <th scope="col">Sr.No.</th>
          <th scope="col">Topic</th>
          <th scope="col">Let's GO</th>
          <th scope="col">Delete Quiz</th>
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
        <th class="zoom"><button type="button" id="startbtn${index}" class="btn btn-dark" value="${element.quizname}">START</button></th>
        <th class="zoom"><button type="button" id="deletebtn${index}" class="btn" value="${element.quizname}"><img src="./images/delete.svg" width="30" height="30" /></button></th>
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

        for(let i=1;i<index;i++)
        {
            document.getElementById(`deletebtn${i}`).addEventListener('click',(e)=>{
                // console.log(document.getElementById(`deletebtn${i}`).value);
                let targetquizForDelete =  document.getElementById(`deletebtn${i}`).value;
                
                let url = `http://localhost:3000/addquiz/${targetquizForDelete}`;
            
                console.log(url)
                let params = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
            
                fetch(url, params)
                    .then((res) => {
                        return res.json();
                    })
                    .then((json) => {
                       console.log("deleted ",json);
                       location.reload(); 
                    })
                    .catch((err) => alert("Unauthorized user",err));
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