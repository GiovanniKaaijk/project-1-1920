import Pickr from '@simonwep/pickr'
import hsvToRgb from '@fantasy-color/hsv-to-rgb'
import getIndex from './getIndex';

export default function(element, className) {
    // Simple example, see optional options for more configuration.
const container = document.querySelector('.container')
const pickr = Pickr.create({
    el: `.${element}`,
    theme: 'classic',// or 'monolith', or 'nano'
    padding: 20,
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)',
        'rgba(0,0,0,1)',
        'rgba(0,0,0,0)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});
pickr.on('init', instance => {
    const picker = instance._root.root
    picker.classList.add(className)
    pickr.setHSVA(235, 0, 100, 1)
}).on('hide', instance => {
    console.log('hide', instance);
}).on('show', (color, instance) => {
    console.log('show', color, instance);
}).on('save', (color, instance) => {
    console.log('save', color, instance);
}).on('clear', instance => {
    console.log('clear', instance);
}).on('change', (color, instance) => {
    const picker = instance._root.root
    pickr.setHSVA(color.h, color.s, color.v, color.a)
    const convertedColor = hsvToRgb({
        hue: color.h,
        saturation: color.s,
        value: color.v
        })
    console.log(convertedColor)
    const opacity = color.a
    if(picker.classList.contains('main_picker')) {
        container.style.backgroundColor = `rgba(${convertedColor.red},${convertedColor.green},${convertedColor.blue},${opacity})`
    } else if(picker.classList.contains('changeActive')) {
        const active = document.querySelector('.activeEl')
        const activeChilds = active.childNodes
        activeChilds[1].style.color = `rgba(${convertedColor.red},${convertedColor.green},${convertedColor.blue},${opacity})`
    }
    
}).on('changestop', instance => {
    console.log('changestop', instance);
}).on('cancel', instance => {
    console.log('cancel', instance);
}).on('swatchselect', (color, instance) => {
    
});
return pickr;
}