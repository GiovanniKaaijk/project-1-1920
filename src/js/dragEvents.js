export default function () { 
    const contentWrapper = document.querySelector('.content')
    const optionElements = document.querySelectorAll('.options div')
    let currentElement, oldElement;
    // remove active class when clicked on other component
    document.onclick = function(e){
        if(currentElement !== oldElement) {
            if(oldElement) oldElement.classList.remove('active')
        } 
        oldElement = currentElement
     };

    optionElements.forEach(option => {
        option.addEventListener('dragstart', onDragStart)
    })
    
    
    contentWrapper.addEventListener('dragover', onDragOver)
    contentWrapper.addEventListener('drop', onDrop)
    
    function onDragStart(event) {
        // the dataTransfer object’s property setData
        // first param declares the format
        // second param declares the actual data
        event
            .dataTransfer
            .setData('text/plain', event.target.classList[0]);
    }
    
    function onDragOver(event) {
        // the browser prevents dropping by default
        event.preventDefault();
    }
    
    function onDrop(event) {
        // the data set before in $onDragStart
        const className = event.dataTransfer.getData('text');
        const draggableElement = document.querySelector(`.${className}`);
        // since the element should stay in the option container, the element gets cloned
        let nodeCopy = draggableElement.cloneNode(true)
        // set the same class for upcoming functions
        nodeCopy.className = className
        const content = event.target;
        content.appendChild(nodeCopy);
      
        event
          .dataTransfer
          .clearData();
        
        setupElementEvents(nodeCopy)
      }
    
    function setupElementEvents (node) {
        node.addEventListener('click', function() {
            // add active to block to display input
            node.classList.add('active')
            // get all childs
            const childNodes = this.childNodes
            // get first tagname
            const tagName = childNodes[1].tagName

            // get input field
            const changeIndex = getIndex(node, tagName)
            const changeField = childNodes[changeIndex]
        
            const inputIndex = getIndex(node, 'input')
            const inputField = childNodes[inputIndex]
            
            // change first tagname on input
            inputField.addEventListener('input', function() {
                const value = inputField.value
                changeField.textContent = value
            })
            currentElement = node
        })
    }
    function getIndex(el, type) {
        const children = el.childNodes
        let index = Number
        children.forEach((child, i) => {
            if (child.tagName == type.toUpperCase()) {
                index = i
            }
        });    
        return index ? index : -1
    }
}