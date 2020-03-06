import stepOverlay from './stepOverlay'

export default function() {
    const powerpoint = document.querySelector('.powerpoint')
    powerpoint.addEventListener('click', function() {
        document.querySelector('svg').classList.add('flow')
        powerpoint.style.pointerEvents = 'none'
        word.style.pointerEvents = 'none'
        document.querySelector('.overlay').onanimationend = () => {
            document.querySelector('.overlay').classList.add('fade')
            let firstInit;
            if(localStorage.getItem('hasBeenOnOba')){
                firstInit = JSON.parse(localStorage.getItem('hasBeenOnOba'))
            }else{
                firstInit = false
            }
            if(!firstInit) {
                stepOverlay()
                localStorage.setItem('hasBeenOnOba','true')
            }
            setTimeout(() => {
                document.querySelector('.overlay').classList.add('hide')
            }, 300)
        }
    })

    powerpoint.addEventListener('mouseover', function() {
        document.querySelector('svg').classList.add('red')
        document.querySelector('svg').classList.remove('blue')
    })

    const word = document.querySelector('.word')
    word.addEventListener('click', function() {
        powerpoint.style.pointerEvents = 'none'
        word.style.pointerEvents = 'none'
        document.querySelector('svg').classList.add('flow')
        document.querySelector('.overlay').onanimationend = () => {
            document.querySelector('.overlay').classList.add('fade')
            let firstInit;
            if(localStorage.getItem('hasBeenOnOba')){
                firstInit = JSON.parse(localStorage.getItem('hasBeenOnOba'))
            }else{
                firstInit = false
            }
            if(!firstInit) {
                stepOverlay()
                localStorage.setItem('hasBeenOnOba','true')
            }
            setTimeout(() => {
                document.querySelector('.overlay').classList.add('hide')
            }, 300)
        }
    })
    
    word.addEventListener('mouseover', function() {
        document.querySelector('svg').classList.add('blue')
        document.querySelector('svg').classList.remove('red')
    })
}