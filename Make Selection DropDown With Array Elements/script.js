let arr = ['ECE','EEE','CS','AIDS','AIML','CSD']

arr.forEach(val => {
    let op = document.createElement('option')
    op.value = val
    op.innerHTML = val
    document.getElementById('selector').appendChild(op)
})

let ch = document.getElementById('selector')
ch.addEventListener('click' , () => 
{
    let dept = ch.options[ch.selectedIndex].value
    
    document.getElementById('result').innerHTML = dept

})