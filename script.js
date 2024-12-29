function carregar() {
    let time = document.getElementById('time')
    let image = document.getElementById('image')
    let msg = document.getElementById('greeting')
    // hora do sistema
    let clock = new Date()
    let hora = clock.getHours()

    // mensagem do hora que irá aparecer para os três
    time.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        image.src = '/img/manha.png'
        document.body.style.background = '#EFD8BB'
        msg.innerHTML = 'Bom Dia!'
    } else if (hora < 18) {
        image.src = '/img/tarde.png'
        document.body.style.background = '#A8D4F1'
        msg.innerHTML = 'Boa Tarde!'
    } else {
        image.src = '/img/noite.png'
        document.body.style.background = '#372D49'
        msg.innerHTML = 'Boa noite!'
    }
}