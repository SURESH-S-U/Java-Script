function count()
{
    let words = document.getElementById("input").value;
let arr = []
arr = words.split(" ");

document.getElementById("result").innerHTML = arr.length
}