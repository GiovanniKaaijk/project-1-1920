import elementEvents from "./elementEvents";
import rgbHex from 'rgb-hex';

export default function(pickr) {
  const contentWrapper = document.querySelector(".content .container");
  const optionElements = document.querySelectorAll(".options > div");

  let currentElement, oldElement;
  // remove active class when clicked on other component
  document.onclick = function(e) {
    if (currentElement !== oldElement) {
      if (oldElement) {
        oldElement.replaceWith(oldElement);
      }
      resetEditor(false);
    }
    oldElement = currentElement;
  };

  optionElements.forEach(option => {
    option.addEventListener("dragstart", onDragStart);
  });

  contentWrapper.addEventListener("click", function(e) {
    if (e.target.classList.contains("container")) {
      if (oldElement) {
        oldElement.classList.remove("activeEl", "active");
      }
      resetEditor(true);
    }
  });
  contentWrapper.addEventListener("dragover", onDragOver);
  contentWrapper.addEventListener("drop", onDrop);

  function resetEditor(bool) {
    if (bool) {
      document
        .querySelector(".customize_component")
        .classList.remove("visible");
    } else {
      reset(true);
    }
  }

  function reset() {
    const activeEl = document.querySelector(".activeEl");

    // inputs
    const inputs = document.querySelectorAll(".customize_component input");
    inputs.forEach(input => {
      if (input.type === "checkbox") {
        input.checked = false;
      } else if (input.type === "number") {
        if (activeEl.dataset.fontsize) {
          input.value = activeEl.dataset.fontsize;
        } else {
          input.value = "";
        }
      }
    });
    // check

    const checkboxChecked = activeEl.dataset.absolute
    if (checkboxChecked) {
      document.querySelector(".checkbox").checked = true;
    }

    // textarea
    const textArea = document.querySelector(".customize_component textarea")
    const activeChildren = activeEl.childNodes
    const activeContent = activeChildren[1].textContent
    textArea.value = activeContent;

    //pickr passed by param
    let activeColor = activeChildren[1].style.color
    if(activeColor) {
        activeColor = activeColor.substring(4)
        activeColor = activeColor.split(')') 
        activeColor = activeColor[0].split(',')
        const rgb = {
            r: parseInt(activeColor[0]),
            g: parseInt(activeColor[1]),
            b: parseInt(activeColor[2])
        }
        console.log(rgb)
        const hexColor = rgbHex(rgb.r, rgb.g, rgb.b)
        pickr.setColor(hexColor ? hexColor : '#000000')
    } else {
        pickr.setColor('#000000')
    }
  }

  function onDragStart(event) {
    // the dataTransfer object’s property setData
    // first param declares the format
    // second param declares the actual data
    event.dataTransfer.setData("text/plain", event.target.classList[0])
  }

  function onDragOver(event) {
    // the browser prevents dropping by default
    event.preventDefault();
  }

  function onDrop(event) {
    // the data set before in $onDragStart
    const className = event.dataTransfer.getData("text");
    const draggableElement = document.querySelector(`.${className}`);
    // since the element should stay in the option container, the element gets cloned
    let nodeCopy = draggableElement.cloneNode(true);
    // set the same class for upcoming functions
    nodeCopy.className = className;

    contentWrapper.appendChild(nodeCopy);

    event.dataTransfer.clearData();

    nodeCopy.addEventListener("click", function() {
      currentElement = this;
    });
    const coords = contentWrapper.getBoundingClientRect();
    elementEvents(nodeCopy, coords);
  }
}
