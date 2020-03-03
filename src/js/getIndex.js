export default function(el, className) {
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