let res1 = document.querySelectorAll('#result1'),
    res2 = document.querySelectorAll('#result2'),
    res3 = document.querySelectorAll('#result3'),
    res4 = document.querySelectorAll('#result4'),
    count = document.getElementById('count')

for (let i = 0; i < res1.length; i++) {
  res1[i].addEventListener('click', () => {
    for (let x = 0; x < res1.length; x++) {
      if (res1[x] != res1[i] && res1[x].checked === true) {
        res1[x].checked = false
      }
    }
  })
}
for (let i = 0; i < res2.length; i++) {
  res2[i].addEventListener('click', () => {
    for (let x = 0; x < res2.length; x++) {
      if (res2[x] != res2[i] && res2[x].checked === true) {
        res2[x].checked = false
      }
    }
  })
}
for (let i = 0; i < res3.length; i++) {
  res3[i].addEventListener('click', () => {
    for (let x = 0; x < res3.length; x++) {
      if (res3[x] != res3[i] && res3[x].checked === true) {
        res3[x].checked = false
      }
    }
  })
}
for (let i = 0; i < res4.length; i++) {
  res4[i].addEventListener('click', () => {
    for (let x = 0; x < res4.length; x++) {
      if (res4[x] != res4[i] && res4[x].checked === true) {
        res4[x].checked = false
      }
    }
  })
}

count.addEventListener('click', () => {
  
})