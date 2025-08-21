let btn = document.createElement('button');
btn.innerHTML = "Click Me"
btn.id = "myBtn";
btn.addEventListener('click' , clicked)
document.body.appendChild(btn);

let d = document.createElement('div')
d.id = "result"
document.body.appendChild(d);

function clicked()
{
    let selected = document.getElementById('selector')
    let city = selected.options[selected.selectedIndex].value
    
    document.getElementById('result').innerHTML = city
}



