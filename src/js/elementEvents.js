export default function (node) {
    const coords = node.getBoundingClientRect()
    // get all childs
    const childNodes = node.childNodes
    node.addEventListener('click', function() {        
        // add active to block to display input
        node.classList.add('active')
        
        // get first tagname
        const targetElement = childNodes[1]
    
        const inputIndex = getIndex(node, 'input')
        if(inputIndex !== -1) {
            const inputField = childNodes[inputIndex]
            console.log(inputField, targetElement, childNodes)
            // change first tagname on input
            inputField.addEventListener('input', function() {
                const value = inputField.value
                targetElement.textContent = value
            })
        } else {
            console.log('not found')
        }
    })

    // position absolute
    const checkboxIndex = getIndex(node, 'checkbox')
    const checkboxEl = childNodes[checkboxIndex]
    if(checkboxEl ) {
        checkboxEl.addEventListener('click', function() {
            if(checkboxEl.checked) {
                node.classList.add('float')
            } else {
                node.classList.remove('float')
                node.style.left = 0;
                node.style.top = 0;
            }
            
        })   
        node.addEventListener('dragend', function(e) {
            let x = e.pageX - coords.x
            let y = e.pageY - coords.y
            if (x < 0) x = 0
            if (y < 0) y = 0
            event.currentTarget.style.left = x + 'px';
            event.currentTarget.style.top = y + 'px';
        })
    }

    function getIndex(el, className) {
        const children = el.childNodes
        let index;
        children.forEach((child, i) => {
            if(child.classList) {
                if (child.classList.contains(`${className}`)) {
                    index = i
                }
            }
        });    
        return index ? index : -1
    }
}