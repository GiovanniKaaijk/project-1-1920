import dragEvents from './dragEvents'
import colorPicker from './colorPicker'

function init() {
    colorPicker('color_picker', 'main_picker')
    const optionPickr = colorPicker('text_color', 'changeActive')
    dragEvents(optionPickr)
}


init()