import updateItem from "./updateItem";

export default function(node, coords) {
    let currentNode = node
  const fontSize = document.querySelector(".customize_component .fontSize");
  fontSize.addEventListener("input", changeFontSize)

  const position = document.querySelector(".customize_component .checkbox")
  const imgPosition = document.querySelector('.searchBook .checkbox')
  //position.addEventListener("click", changePositionStyle);

  const inputField = document.querySelector(".customize_component .textInput")
  inputField.addEventListener("input", changeinput)

  function changePositionStyle() {
    this.checked
      ? document.querySelector('.activeEl').setAttribute("data-absolute", true)
      : document.querySelector('.activeEl').setAttribute("data-absolute", false)
    updateItem(document.querySelector('.activeEl'));
  }

  function changeinput() {
    const active = document.querySelector(".activeEl")
    const activeChilds = active.childNodes;
    const value = inputField.value;
    activeChilds[1].textContent = value;
  }

  function changeFontSize() {
    document.querySelector('.activeEl').setAttribute("data-fontsize", fontSize.value)
    updateItem(document.querySelector('.activeEl'));
  }

  node.addEventListener("click", runNodeEvents);

  function runNodeEvents() {
    let curr = document.querySelector('.activeEl')
    if(curr) curr.classList.remove('active', 'activeEl')

    // add active to block to display input
    node.classList.add("active", "activeEl")
    if(node.classList.contains('img')) {
      document.querySelector(".searchBook").classList.add("visible")
    } else {
      document.querySelector(".customize_component").classList.add("visible")
    }
    let checkboxClone;
    if(node.classList.contains('img')) {
        checkboxClone = imgPosition.cloneNode(true)
        imgPosition.replaceWith(checkboxClone)
    } else {
        checkboxClone = position.cloneNode(true)
        position.replaceWith(checkboxClone)
    }

    currentNode = document.querySelector('.activeEl')
    checkboxClone.addEventListener("click", changePositionStyle)
  }

  // position absolute
  let elPosition = {
    x: 0,
    y: 0
  };

  node.addEventListener("dragstart", function(e) {
    elPosition.x = e.pageX;
    elPosition.y = e.pageY;
  });

  node.addEventListener("dragend", changePosition)

  function changePosition(e) {
    if(node.classList.contains('img')) {
      let rect = this.getBoundingClientRect()
      console.log(rect)
      console.log(elPosition.x, elPosition.y)
      const xDiff = elPosition.x - rect.x;
      const yDiff = elPosition.y - rect.y;
      let x = e.pageX - coords.x - xDiff;
      let y = e.pageY - coords.y - yDiff;
      event.currentTarget.style.left = x + "px";
      event.currentTarget.style.top = y + "px";
    } else {
      let rect = this.getBoundingClientRect()
      console.log(rect)
      console.log(e.pageX, e.pageY)
      const xDiff = elPosition.x - rect.x;
      const yDiff = elPosition.y - rect.y;
      let x = e.pageX - coords.x - xDiff;
      let y = e.pageY - coords.y - yDiff;
      event.currentTarget.style.left = x + "px";
      event.currentTarget.style.top = y + "px";
    }
  }
}
