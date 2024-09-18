const taskButton = document.getElementById('task-btn').addEventListener('click', function(){
    const inputText = document.getElementById('input-value');
    const inputValue = inputText.value;
    
    const tBody = document.getElementById('content-container');
    const numberColum = document.createElement('tr');
    const th = document.createElement('th');
    th.innerText = inputValue;
    document.getElementById('input-value').value = "";
    const tr = numberColum.appendChild(th);
    tBody.appendChild(tr);
    const clearButton = document.getElementById('clear-btn').addEventListener('click', function(){
        tBody.removeChild(tr)
    })


})