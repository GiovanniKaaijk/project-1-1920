import dragEvents from './dragEvents'
import colorPicker from './colorPicker'
import createImage from './createImage'

async function init() {
    colorPicker('color_picker', 'main_picker')
    const optionPickr = colorPicker('text_color', 'changeActive')
    dragEvents(optionPickr)
    createImage()
}


init()