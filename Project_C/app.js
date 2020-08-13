let count = 0
// find all the buttons and adujust the count accordingly
// seeing as all of the event handlers are doing pretty much the same thing it is best to do query selector all and then filter through them accordingly

const btns = document.querySelectorAll('.btn')
const counter = document.querySelector('#value')

console.log(btns[0])
//want to filter out all the nodelist returned by class do this by using forEach method with .classlist

btns.forEach(function (cur, index, listObj) {
  console.log(cur + ', ' + index + ', ' + this)
  cur.addEventListener('click', () => {
    if (cur.classList.contains('decrease')) {
      count--
    } else if (cur.classList.contains('increase')) {
      count++
    } else {
      count = 0
    }
    counter.innerHTML = count
  })
})
