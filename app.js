let btn = document.body.querySelector('.change')

let bgrcChanger = ()=>{
    let colors = ['red', 'yellow', 'blue', 'green']
    let random = Math.floor(Math.random * 4)
    document.body.style.backgroundColor = colors[random]
}

btn.addEventListener('click', bgrcChanger)