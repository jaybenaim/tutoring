window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  // Create click button 
  const button = document.querySelector('.button')

  button.addEventListener('click', function (event) {

    console.log(event.target)
  })


  button.addEventListener('mouseover', function (event) {
    // console.log(event.target)
    button.style.color = 'blue'
  })


  const btn = document.querySelector('.btn2')
  btn.innerText = 'button'

  // btn.addEventListener('click', function (event) {
  //   alert('works')

  // })

  // create new element 
  const newElement = document.createElement('h1')
  // assign attributes 
  newElement.style.color = 'red'
  newElement.innerText = 'h1 content'
  // add to the DOM 
  const mainElement = document.querySelector('main')
  mainElement.appendChild(newElement)

});


const runSome = () => {

  // Get the input field 
  const input = document.querySelector('input')

  // Get the H1 
  const h1 = document.querySelector('h1')

  // Create event listener 
  input.addEventListener('change', (event) => {
    event.preventDefault()

    h1.innerText = event.target.value
  })
}

