let images = document.querySelectorAll('#images'),
    start = document.getElementById('start'),
    end = document.getElementById('end'),
    res = document.getElementById('res')


for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', () => {
    res.value = images[i].alt
  })
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseout', () => {
    res.value = ''
  })
}

function timer() {
  let end = images[0].src

  for (let i = 0; i < images.length; i++) {
    if (i != 3) {
      images[i].src = images[i+1].src
    } else {
      images[i].src = end
    }
  }
}

start.addEventListener('click', () => {
  window.int = setInterval(timer, 500)
})

end.addEventListener('click', () => {
  clearInterval(int)
})


