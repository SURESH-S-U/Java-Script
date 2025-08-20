function check()
{
    let str = document.getElementById("input").value
    if(str == (str.split("").reverse().join("")))
    {
        document.getElementById("result").innerHTML = "Its a Pallindrome";
    }
    else
    {
        document.getElementById("result").innerHTML = "Its not a Pallindrome";
    }
}