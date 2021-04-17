const addtopButton = document.getElementById('addtopButton')
const addmidButton = document.getElementById('addmidButton')
const addbotbutton = document.getElementById('addmidButton')
const remButton = document.getElementById('remButton')
const cookie = document.getElementById('cookie')
cookie.childNodes[0].remove()
cookie.childNodes[1].remove()
cookie.childNodes[2].remove()
const title = document.getElementById('title')

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
    const newLayer = document.createElement('img')
    if (type == 'top')
    {
        newLayer.src = '/img/oreo-top.png'
        newLayer.classList = 'oreo-top oreo-layer'
        title.textContent = 'o' + title.textContent
        cookieLayers.push('top')
    }
    else if (type == 'mid')
    {
        newLayer.src = '/img/oreo-middle.png'
        newLayer.classList = 'oreo-middle oreo-layer'
        title.textContent = 're' + title.textContent
        cookieLayers.push('mid')
    }
    else if (type == 'bot')
    {
        newLayer.src = '/img/oreo-bottom.png'
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
