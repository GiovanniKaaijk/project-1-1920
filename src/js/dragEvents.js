import elementEvents from './elementEvents'

export default function () { 
    const contentWrapper = document.querySelector('.content .container')
    const optionElements = document.querySelectorAll('.options div')
    let currentElement, oldElement;
    // remove active class when clicked on other component
    document.onclick = function(e){
        
        if(currentElement !== oldElement) {
            if(oldElement) {
                oldElement.classList.remove('active')
                oldElement.replaceWith(oldElement);
            }
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
        
        contentWrapper.appendChild(nodeCopy);
      
        event
          .dataTransfer
          .clearData();
        
        nodeCopy.addEventListener('click', function() {
            currentElement = this
        })
        elementEvents(nodeCopy)
      }
}