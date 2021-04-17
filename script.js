const addtopButton = document.getElementById('addtopButton')
const addmidButton = document.getElementById('addmidButton')
const addbotbutton = document.getElementById('addmidButton')
const remButton = document.getElementById('remButton')
const cookie = document.getElementById('cookie')
cookie.childNodes[0].remove()
cookie.childNodes[1].remove()
cookie.childNodes[2].remove()
const title = document.getElementById('title')
const audio = [
    new Audio('https://aqlexdev.github.io/Oreo/sounds/rempop.wav'),
    new Audio('https://aqlexdev.github.io/Oreo/sounds/pop (1).wav'),
    new Audio('https://aqlexdev.github.io/Oreo/sounds/pop (2).wav'),
    new Audio('https://aqlexdev.github.io/Oreo/sounds/pop (3).wav'),
    new Audio('https://aqlexdev.github.io/Oreo/sounds/pop (4).wav'),
    new Audio('https://aqlexdev.github.io/Oreo/sounds/pop (5).wav'),
    new Audio('https://aqlexdev.github.io/Oreo/sounds/pop (6).wav'),
    new Audio('https://aqlexdev.github.io/Oreo/sounds/pop (7).wav'),
]

var cookieLayers = ['bot', 'mid', 'top']
var lastLayerIndex = 2

addtopButton.onclick = () => {
    addlayer('top')
}

addmidButton.onclick = () => {
    addlayer('mid')
}

addbotButton.onclick = () => {
    addlayer('bot')
}

remButton.onclick = () => {
    removeLayer()
}

function addlayer(type) {
    audio[Math.floor(Math.random() * 7 + 1)].play()
    const newLayer = document.createElement('img')
    if (type == 'top')
    {
        newLayer.src = 'https://aqlexdev.github.io/Oreo/img/oreo-top.png'
        newLayer.classList = 'oreo-top oreo-layer'
        title.textContent = 'o' + title.textContent
        cookieLayers.push('top')
    }
    else if (type == 'mid')
    {
        newLayer.src = 'https://aqlexdev.github.io/Oreo/img/oreo-middle.png'
        newLayer.classList = 'oreo-middle oreo-layer'
        title.textContent = 're' + title.textContent
        cookieLayers.push('mid')
    }
    else if (type == 'bot')
    {
        newLayer.src = 'https://aqlexdev.github.io/Oreo/img/oreo-bottom.png'
        newLayer.classList = 'oreo-bottom oreo-layer'
        title.textContent = 'o' + title.textContent
        cookieLayers.push('bot')
    }

    newLayer.draggable = false
    newLayer.style = 'z-index: ' + (lastLayerIndex + 1) + ';'

    cookie.insertBefore(newLayer, cookie.childNodes[0]);

    lastLayerIndex++
}

function removeLayer() {
    if (lastLayerIndex >= 0)
    {
        audio[0].play()
        cookie.childNodes[0].classList += ' removing'
        setTimeout(() => {
            cookie.childNodes[0].remove()
        }, 290)
        if (cookieLayers.pop() == 'mid')
            title.textContent = title.textContent.substring(2)
        else
            title.textContent = title.textContent.substring(1)
            
        lastLayerIndex--
    }
}
