// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const submitBtn = document.querySelector('.submit-btn')
//const item = document.getElementById('grocery')
const form = document.querySelector('.grocery-form')
const input = document.querySelector('#grocery')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')
//submit event listern goes on the form not the btn
// edit option
let editElement
let editFlag = false
let editID = ''
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)

clearBtn.addEventListener('click', clearItems)

// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault()
  const value = input.value
  const id = new Date().getTime().toString()

  //if statemets allows you to call different callback fucntions on the same eventlister
  if (value && !editFlag) {
    //dynamically creating article html and setting calsses and data -id attribute
    //add item to the list
    const element = document.createElement('article')
    // add class to article
    element.classList.add('grocery-item')
    // add id
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
     <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
     </button>
     <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
     </button>
    </div>`
    // to delete items btn only exists here so select elemets and event listener here or can use eventbubbling

    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')
    deleteBtn.addEventListener('click', deleteItem)
    editBtn.addEventListener('click', editItem)
    //add to list
    list.appendChild(element) //add element rather than the html
    //display alert
    displayAlert('item add to the list', 'success')
    //show the container
    container.classList.add('show-container')
    // add to local storage
    addToLocalStorage(id, value)
    //set back to default
    setBacktoDefault()
  } else if (value && editFlag) {
    //editing
    editElement.innerHTML = value
    displayAlert('value changed', 'success')
    //edit local storage
    editLocalStorage(editId, value)
    setBacktoDefault()
  } else {
    //empty value
    displayAlert('Please enter a value', 'danger')
  }
}

// delete function

function deleteItem() {
  console.log('item deleted')
  const element = e.currentTarget.parentElement.parentElement //element has lots of classes so this may be easier
  const id = element.dataset.id
  list.removeChild(element)
  if (list.children.length === 0) {
    container.classList.remove('show-container')
  }
  displayAlert('item removed', 'danger')
  setBacktoDefault()
  //remove from local storage
  removefromLocalStorage(id)
}

// edit fucntion

function editItem(e) {
  console.log('edit item')
  const element = e.currentTarget.parentElement.parentElement // grocery item with dataset id
  //set global edit variables
  editElement = e.currentTarget.parentElement.previousElementSibling
  //set form Value
  input.value = editElement.innerHTML
  editFlag = true
  editID = element.dataset.id
  submitBtn.textContent = 'edit'
  console.log(editElement)
}
//display alert

function displayAlert(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  //remove alert by uing a set timer function
  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 1000)
}

//clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item')
  //if items exists then delete them
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item)
    })
  }
  container.classList.remove('show-container')
  displayAlert('empty list', 'danger')
  setBacktoDefault()
  localStorage.removeItem('list')
}
//set back to default
function setBacktoDefault() {
  console.log('set back to deafult')
  grocery.value = '' //delete text entry
  editFlag = false
  editID = ''
  submitBtn.textContent = 'submit'
}

// ****** LOCAL STORAGE **********
// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value }
  let items = getLocalStorage()
  items.push(grocery)
  localStorage.setItem('list', JSON.stringify(items))
}

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage()

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item
    }
  })

  localStorage.setItem('list', JSON.stringify(items))
}
function editLocalStorage(id, value) {
  let items = getLocalStorage()

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}

//localStorage API
//setitem
//getItem
//removeItem
// save as strings

// ****** SETUP ITEMS **********

function setupItems() {
  let items = getLocalStorage()

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value)
    })
    container.classList.add('show-container')
  }
}

function createListItem(id, value) {
  const element = document.createElement('article')
  let attr = document.createAttribute('data-id')
  attr.value = id
  element.setAttributeNode(attr)
  element.classList.add('grocery-item')
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector('.delete-btn')
  deleteBtn.addEventListener('click', deleteItem)
  const editBtn = element.querySelector('.edit-btn')
  editBtn.addEventListener('click', editItem)

  // append child
  list.appendChild(element)
}
