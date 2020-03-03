import dragEvents from './dragEvents'
import colorPicker from './colorPicker'

function init() {
    dragEvents()
    colorPicker('color_picker', 'main_picker')
    colorPicker('text_color', 'changeActive')
}


init()