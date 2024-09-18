const button = document.getElementById('submit-btn');
const textArea = document.getElementById('text-area');

button.addEventListener('click', function(){
       const inputValue = textArea.value;

       const container = document.getElementById('review');
       const p = document.createElement('p');
       p.innerText = inputValue;
       container.appendChild(p);
       document.getElementById('text-area').value = "";
       p.style.fontSize = '2rem';
       p.style.fontWeight = '400';
})