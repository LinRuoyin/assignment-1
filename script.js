let add = document.querySelector('#increment');
let minus = document.querySelector('#decrement');
let num = document.querySelector('#number')
let integer = 0

add.addEventListener('click', function () {
  integer++
  num.innerHTML = integer
})

minus.addEventListener('click', function () {
  if (integer <= 0) {
    alert(`It is already '0'!`); integer = 0
  } else {
    integer--
    num.innerHTML = integer
  }
}
)


let reset = document.createElement('button')
document.querySelector('#container').append(reset)
reset.innerHTML = 'Reset'
reset.classList.add('reset')
reset.addEventListener('click', function () {
  num.innerHTML = 0
  integer = 0
})
