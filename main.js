const keySongs = [
    {
        key: 7,
        song: 'pad7',
        down: false
    },
    {
        key: 8,
        song: 'pad8',
        down: false
    },
    {
        key: 9,
        song: 'pad9',
        down: false
    },
    {
        key: 4,
        song: 'pad4',
        down: false
    },
    {
        key: 5,
        song: 'pad5',
        down: false
    },
    {
        key: 6,
        song: 'pad6',
        down: false
    },
    {
        key: 1,
        song: 'pad1',
        down: false
    },
    {
        key: 2,
        song: 'pad2',
        down: false
    },
    {
        key: 3,
        song: 'pad3',
        down: false
    }
]

function tocaSom(seletorAudio) {
    seletorAudio.currentTime = 0
    seletorAudio.play()
}

keySongs.forEach(song => {
    let keyElement = document.querySelector(`.tecla_${song.song}`)

    song.keyElement = keyElement
    song.seletorAudio = document.getElementById(`som_tecla_${song.song}`)

    keyElement.addEventListener('click', () => {
        tocaSom(song.seletorAudio)
    })   

})

document.onkeydown = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {

        keySong.keyElement.classList.add('ativa')

        if(!keySong.down) {
            tocaSom(keySong.seletorAudio)
        }
    
        keySong.down = true

    }

}

document.onkeyup = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {
    
        keySong.keyElement.classList.remove('ativa')
        keySong.down = false

    }

}