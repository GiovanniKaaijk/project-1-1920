import { createData } from "./data/getData";
import getIndex from "./getIndex";

export default async function() {
  const getDataInput = document.querySelector(".searchBook .query")
  getDataInput.addEventListener("input", async function() {
    getData(getDataInput.value)
  })

  const getWidthInput = document.querySelector(".searchBook .width")
  getWidthInput.addEventListener('input', function() {
      changeWidth(getWidthInput.value)
  })
}

const data = createData();
let toggle = true;
async function getData(input) {
  let returnData;
  if (toggle) {
    toggle = false;
    const articles = document.querySelectorAll('.results .img-wrapper')
    articles.forEach(article => {
        article.remove()
    })
    returnData = await data.getData(input);
    toggle = true;
    console.log(returnData)
    createRender(returnData);
  }
}

const createRender = data => {
  const el = document.querySelector('.searchBook .results');
  const results = data.results;

  results.forEach((item, i) => {
      if(item.coverimages.length === 1) {
          item.coverimages.push(item.coverimages[0])
      }
      if(item.coverimages[1].substring(0,9) === '~/assets/') {
          item.coverimages[1] = 'https://v111.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/853318751&token=c1322402'
      }
    const html = `${item.coverimages !== undefined ? `<div class="img-wrapper"><img src=${item.coverimages[1]}></div>` : null}`;
        //   <h2>${item.titles[0]}</h2>
        //     <p>${item.summaries ? item.summaries[0] : "Geen samenvatting"}</p>
    el.insertAdjacentHTML("afterbegin", html);
  });
  addEvents()
};

function addEvents() {
    const images = document.querySelectorAll('.results img')
    images.forEach(singleImage => {
        singleImage.addEventListener('click', function() {
            const active = document.querySelector('.activeEl')
            const childNodes = active.childNodes
            const imgIndex = getIndex(active, 'renderImg')
            const activeImg = childNodes[imgIndex]
            console.log(this)
            activeImg.src = this.src
            activeImg.style.border = 'none'
        })
    })
}

function changeWidth (value) {
    const active = document.querySelector('.activeEl')
    const childNodes = active.childNodes
    const imgIndex = getIndex(active, 'renderImg')
    const activeImg = childNodes[imgIndex]

    activeImg.style.width = value + 'px'
}