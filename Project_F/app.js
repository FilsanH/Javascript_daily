const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'pigs',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]
//queryselectorall returns a node list whereas queryselector doesnt
//adding items dynamically means that item doesnt exist in loading therfore plae queryselector after elements have been added
//using map , map returns and array
const sectionCenter = document.querySelector('.section-center')

const btnsContainer = document.querySelector('.btn-container')

// onloading the page
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu)

  //SETUP
  //need to ensure that buttons load dynamically
  //get only the unique catgories and itterate over categories return buttons
  //could use map then filter but instead can use reduce
  const categories = menu.reduce(
    function (acc, item) {
      if (!acc.includes(item.category)) {
        acc.push(item.category)
      }
      return acc
    },
    ['all']
  )
  //delete options
  btnsContainer.innerHTML = ''
  //create button for each option
  // categories.forEach((item) => {
  //   btnsContainer.insertAdjacentHTML(
  //     'beforeend',
  //     `<button type="button" class="filter-btn" data-id=${item}>${item}</button>`
  //   )
  // })
  //use map instead where map returns an array of html btns then use join to make a long html text

  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    })
    .join('')
  btnsContainer.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll('.filter-btn')
  console.log(filterBtns)
  //if button is pressed check which button is pressed and filter out menus accorsdingly

  filterBtns.forEach((item) => {
    item.addEventListener('click', (e) => {
      const option = e.currentTarget.dataset.id
      //rather than using if statement use filter option
      let filterdMenu = menu
      if (option !== 'all') {
        filterdMenu = menu.filter((item) => {
          return item.category === option
        })
      }
      displayMenuItems(filterdMenu)
    })
  })
})

function displayMenuItems(menusItems) {
  let displaymenu = menusItems.map((item) => {
    return `<article class="menu-item">
          <img src="${item.img}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">4${item.price}/h4>
            </header>
            <p class="item-text">
             ${item.desc}
            </p>
          </div>
        </article>`
  })
  //now join all elements in the array into a string so that you can then add it all in one go
  displayMenu = displaymenu.join('')
  sectionCenter.innerHTML = displaymenu
}
