// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', () => {
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slider')
    video.pause()
  } else {
    btn.classList.remove('slide')
    video.play()
  }
})

// preloader
//to test code can preset netwrok to slow 3g

const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader')
})
