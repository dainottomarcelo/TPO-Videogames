//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData)

function getData() {

    //Get API
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            let author = data.results
            // console.log(author);

            //Get Data Value
            let output = "<h2><center>Gracias por sus aportes!!!</center></h2>"

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul style="list-style: none;">
                            <li class="list-group-item"><img src="${lists.picture.large}" ></li>
                            <li class="list-group-item"><h2>${lists.name.first}</h2></li>
                            <li class="list-group-item">Edad: ${lists.dob.age}</li>
                            <li class="list-group-item">${lists.email}</li>
                            <li class="list-group-item">${lists.location.country}</li>
                            </ul>
                    </div>
                </div> `
            })

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output
        })
}

