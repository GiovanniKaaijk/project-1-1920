import {createData} from './data/getData'

export default async function() {
    const getDataInput = document.querySelector('.searchBook input')
    getDataInput.addEventListener('input', async function() {
        getData(getDataInput.value)
    })
}

const data = createData()
let toggle = true
async function getData(input) {
    if(toggle) {
        toggle = false
        console.log(await data.getData(input))
        toggle = true
    }
    console.log('run')
}