export default function (node) {
    let active = document.querySelector('.activeEl')
    if(active) {
        let dataset = active.dataset
        console.log(dataset)

        if(dataset.absolute) {
            if(JSON.parse(dataset.absolute) === true) {
                node.classList.add('float')
            } else {
                node.classList.remove('float')
            }
        }

        if(dataset.fontsize) {
            const children = active.childNodes
            console.log(children)
            children[1].style.fontSize = dataset.fontsize + 'px'
        }
    }
}