export default function() {
    const overlay = document.querySelector('.step_overlay')
    overlay.classList.add('show')
    let stepCount = 0;
    const buttons = document.querySelectorAll('.step_overlay button')
    const steps = document.querySelectorAll('.step_overlay .step')
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if(stepCount <= 7) {
                steps[stepCount].classList.remove('show')
                stepCount++
                steps[stepCount].classList.add('show')
                if(stepCount === 2) {
                    document.querySelector('.customize_component').classList.add('visible')
                }
                if(stepCount === 6) {
                    document.querySelector('.customize_component').classList.remove('visible')
                }
                if(stepCount === 7) {
                    document.querySelector('.searchBook').classList.add('visible')
                }
            } else {
                document.querySelector('.searchBook').classList.remove('visible')
                overlay.classList.remove('show')
                // document.querySelector('.drag_wrapper_list').classList.add('show')
            }
        })
    })
}