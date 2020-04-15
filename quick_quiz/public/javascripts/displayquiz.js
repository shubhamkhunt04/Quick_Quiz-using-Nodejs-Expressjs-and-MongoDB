// function addquiz()
// {
//     let  url = 'http://localhost:3000/addquiz';
//     fetch(url)
//     .then((res)=> res.json())
//     .then((json)=>{
//         html = "";
//         json.forEach(element => {
//             console.log(element)
        
//             html+= `<div id="nav">
//             <b>Qustion :</b>
//             <p>${element.qustion}</p>
//             <br>
//             <div>
//             <p>options</p>
//             <br>
//             <b>A : </b>${element.options[0].A}
//             <br>
//             <b>B : </b>${element.options[1].B}
//             <br>
//             <b>C : </b>${element.options[2].C}
//             <br>
//             <b>D : </b>${element.options[3].D}
//             </div>
//         </div>  `
        
//         });
        
//     document.getElementById("show").innerHTML = html;
//     });
// }

let token = localStorage.getItem("token");
document.getElementById('startid').addEventListener('click',(e)=>{

    
let  url = 'http://localhost:3000/addquiz';

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
    html = "";
    json.forEach(element => {
        console.log(element)
        html+= `<div id="nav">
        <b>Qustion :</b>
        <p>${element.qustion}</p>
        <br>
        <div>
        <p>options</p>
        <br>
        <b>A : </b>${element.options[0].A}
        <br>
        <b>B : </b>${element.options[1].B}
        <br>
        <b>C : </b>${element.options[2].C}
        <br>
        <b>D : </b>${element.options[3].D}
        </div>
    </div>  `
    
    });
    // console.log(typeof(json),"jasondata ",json);

    sessionStorage.setItem('mydata',JSON.stringify(json));
    location = "../quiz.html"
    
// document.getElementById("show").innerHTML = html;
console.log(html)
});

})
//addquiz()
