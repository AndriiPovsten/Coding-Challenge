let textInput = document.querySelector('#json-input')
textInput.addEventListener('paste', (e)=>{
    setTimeout(loadData, 500)
})
// Retrieve data from website
function loadData(){
    let url = 'https://www.springerprofessional.de/wasserwirtschaft-4-2019/16592584'+input.value;
    fetch(url)
        .then(response =>{
            if(response.ok)
                return response.json();
            else
                alert(response.status)
        })
        .then(data =>{
            for (let i = 0; i < data.results.length; i++){
                header1[i] = document.createElement('div');
                header1[i].className = 'text';
                header1[i].addEventListener('dblclick', function(){
                    window.open(data.results[i].links.download, '_blank');
                })
                grid.appendChild(header1[i]);
            }
        })}
//Put data inside table
async function createTable(){
    let jsonData = JSON.parse(loadData(header1))
    let table =document.querySelector('.header1')
    let col  = []
    for(let i = 0; i < jsonData.length; i++){
        for (let key in jsonData[i]){
            if(col.indexOf(key) === -1){
                col.push(key)
            }
        }
    }
    let tr = table.insertRow(-1)
    for(let  i = 0; i < col.length; i++){
        let th = document.createElement('th')
        th.innerHTML = col[i]
        tr.appendChild(th)
    }
    for(let i=0; i<col.length; i++){
        tr = table.insertRow(-1)

        for (let j = 0; j<col.length; j++){
            let tableCell = tr.insertCell(-1)
            tableCell.innerHTML = jsonData[i][col[j]]
        }
    }
}
createTable()

/*

    let responseUrl = await fetch('https://www.springerprofessional.de/en/wasserwirtschaft-4-2019/16592584')
    let content = await responseUrl.json()
    content = content.splice(0, 10)
    let key
    for(key in content){
        table.innerHTML+= `
<table class="header1"></table>`
    }

}
getResponse()
*/
