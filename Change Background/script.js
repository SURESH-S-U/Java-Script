let btn = document.getElementById('myBtn')
let wrap = document.getElementById('wrapper')
let color_name = document.getElementById('color_name')
let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click', function () {
  let hexColor = genRandom('#', 0)  // get returned value
  wrap.style.backgroundColor = hexColor
  color_name.innerHTML = hexColor
})

function genRandom(hexColor, i) {
  if (i == 6) return hexColor;  // 6 hex digits needed
  return genRandom(hexColor + arr[Math.floor(Math.random() * 16)], i + 1)
}
