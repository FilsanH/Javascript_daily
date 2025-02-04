// not using noded instead using CDN and browser so no require is necessary
// colorThief = require('color-thief')
//place CDN at the bottom of html

// default pallet
let colours = [
  '#C2185B',
  '#F8BBD0',
  '#FFFFFF',
  '#757575',
  '#BDBDBD',
  '#795548',
  '#F57C00',
]

//click button to get pallet
//click image to chnage image
const imgs = ['sky1', 'sky2', 'sky3', 'sky7', 'sky8']

let count = 0

document.querySelector('.button').addEventListener('click', () => {
  console.log(count)
  document.body.style.backgroundColor = `${colours[count]}`
  count === colours.length - 1 ? (count = 0) : count++
})

const colorThief = new ColorThief()

document.querySelector('img').addEventListener('click', (e) => {
  const img = e.target
  // Make sure image is finished loading
  if (img.complete) {
    //change image displayed
    if (imgs[count]) {
      document.querySelector('img').src = `img/${imgs[count]}.jpg`
    }
    //get the colours in the pallet
    const color = colorThief.getColor(img)
    urs = colorThief.getPalette(img, 6)
    console.log(colours)
  }
})
