//array of clients
const clients = [
  ['John', 'This was an amazing experience', 2],
  ['Frank', 'Best quality products around', 3],
  ['Teddy', 'This was dissapointing', 4],
]

/*

//inital attempt was to define a class but in the end will end up having to use lists so go from there instead 
class Client {
  constructor(name, description, img) {
    this.name = name
    this.description = description
    this.img = `./img/customer-${img}.jpg` //check for valid inputs
  }

  showClient() {
    document.getElementById('customer-name').innerHTML = this.name
    document.getElementById('customer-text').innerHTML = this.description
    document.getElementById('customer-img').src = this.img
  }
}
now create mutliple clients
const clientOne = new Client('john', 'Lorem20', 4)

*/

//using list of lists and function
function showClient(num) {
  document.getElementById('customer-name').innerHTML = clients[num][0]
  document.getElementById('customer-text').innerHTML = clients[num][1]
  document.getElementById(
    'customer-img'
  ).src = `./img/customer-${clients[num][2]}.jpg`
}

let num = 0

document.querySelector('.nextBtn').addEventListener('click', () => {
  //console.log(`here ${num}`)
  showClient(num)
  num < 2 ? num++ : (num = 0)
  //console.log(`here ${num}`)
})

document.querySelector('.prevBtn').addEventListener('click', () => {
  //console.log(`here 2 ${num}`)
  num < 1 ? (num = 2) : (num = num - 1)
  console.log(`here 2 ${num}`)
  showClient(num)
})
console.log(clients)

// Another way would be to use querySelectorAll and then only have one event listener and distill event by using e.target.parent to see which button was pressed

/* e.g 

 buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
            }
*/
