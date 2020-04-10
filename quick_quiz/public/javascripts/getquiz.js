let data = sessionStorage.getItem("mydata");        // read data from session storage;

let jsondata = JSON.parse(data);
console.log("After parsing");
console.log(typeof (jsondata));;

let x = 0;     // for generating different name field
let qustionindex = 1;   // for qustion indexing
html = "";
(jsondata).forEach(element => {

    console.log("Elemetn ", element);

    html += `   <div class="container-fluid bg-dark">

    <div class="container bg-dark my-4">

    <div class="card-group">
        <div class="card">
          <div class="card-body mx-3">
            <h5 class="card-title"><pre>(${qustionindex}) ${element.qustion}</h5> </pre>
            <hr>
            
                    <input type="radio" id="male" name="gender${x}" value="${element.options[0].A}">
                    <label for="male">${element.options[0].A}</label><br>
                    <input type="radio" id="female" name="gender${x}" value="${element.options[1].B}">
                    <label for="female">${element.options[1].B}</label><br>
                    <input type="radio" id="other" name="gender${x}" value="${element.options[2].C}">
                    <label for="other">${element.options[2].C}</label><br>
                    <input type="radio" id="temp" name="gender${x}" value="${element.options[3].D}">
                    <label for="other">${element.options[3].D}</label>
                  

          </div>
        </div>
      </div>
      </div>
      </div> `

    x++;
    qustionindex++;

})



document.getElementById('anssub').addEventListener('click', (e) => {    // user submit answer
    console.log("clilcked bhai")

    var userans = [];

    document.getElementById("mychoice").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    console.log(ele);

    for (i = 0; i < ele.length; i++) {

        if (ele[i].type = "radio") {

            if (ele[i].checked) {                                       // geting user checked answer and push into userans[]
                    userans.push(ele[i].value);
              
            }
        }
    }

    let score = 0;
    let actualans = []
    jsondata.forEach((element)=>{ 
            actualans.push(element.answer);
    })

    //comparing useranswer and actual answer
    for(let it=0;it<userans.length;it++){
        if(userans[it]===actualans[it])
            score++;
    }
    console.log(score);

    // location = "../about.html";

});

document.getElementById('show').innerHTML = html;


