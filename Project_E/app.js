//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll('.question-btn')
// //currentTarget gives you what you put the event listenr on where as target
// //target node

// btns.forEach(function (btn) {
//   btn.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle('show-text')
//   })
// })

//usinf selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
  //console.log(question)
  const btn = question.querySelector('.question-btn')
  // now can add the event handler to the specific btn rather than the document
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text')
      }
      question.classList.toggle('show-text')
    })
  })
})
