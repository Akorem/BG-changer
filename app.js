let btn = document.querySelector('.change')

let bgrcChanger = ()=>{
    let colors = ['red', 'yellow', 'blue', 'green', 'aqua']
    let random = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[random]

}

setInterval(bgrcChanger, 0010)
btn.addEventListener('click', bgrcChanger)