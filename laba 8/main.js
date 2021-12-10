let res1 = document.querySelectorAll('#result1'),
    res2 = document.querySelectorAll('#result2'),
    res3 = document.querySelectorAll('#result3'),
    res4 = document.querySelectorAll('#result4'),
    count = document.getElementById('count'),
    teacher = document.getElementById('teacher'),
    res = document.getElementById('res'),
    clear = document.getElementById('clear')


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

function check () {
  let count = 0
  for (let i = 0; i < res1.length; i++) {
    if (res1[i].checked === true) {
      count++
    }
  }
  for (let i = 0; i < res2.length; i++) {
    if (res2[i].checked === true) {
      count++
    }
  }
  for (let i = 0; i < res3.length; i++) {
    if (res3[i].checked === true) {
      count++
    }
  }
  for (let i = 0; i < res4.length; i++) {
    if (res4[i].checked === true) {
      count++
    }
  }

  return count === 4
}

count.addEventListener('click', () => {
 if (teacher.value.trim() != '' && check()) {
  let lineTwo = []
  let all = 0

  for (let i = 0; i < res1.length; i++) {
    if (res1[i].checked === true) {
      lineTwo.push(i + 2)
    }
  }
  for (let i = 0; i < res2.length; i++) {
    if (res2[i].checked === true) {
      lineTwo.push(i + 2)
    }
  }
  for (let i = 0; i < res3.length; i++) {
    if (res3[i].checked === true) {
      lineTwo.push(i + 2)
    }
  }
  for (let i = 0; i < res4.length; i++) {
    if (res4[i].checked === true) {
      lineTwo.push(i + 2)
    }
  }
  for (let i = 0; i < lineTwo.length; i++) {
    all += lineTwo[i]
  }

    res.value = `Преподаватель: ${teacher.value}
  Полученные оценки: ${lineTwo.join(' ')}
  Общее количество баллов: ${all}
  Качество преподавания: ${(all/4).toFixed(2)}`
 } else {
   alert('заполните данные полностью')
 }
})

clear.addEventListener('click', () => {
  for (let i = 0; i < res1.length; i++) {
    if (res1[i].checked === true) {
      res1[i].checked = false
    }
  }
  for (let i = 0; i < res2.length; i++) {
    if (res2[i].checked === true) {
      res2[i].checked = false
    }
  }
  for (let i = 0; i < res3.length; i++) {
    if (res3[i].checked === true) {
      res3[i].checked = false
    }
  }
  for (let i = 0; i < res4.length; i++) {
    if (res4[i].checked === true) {
      res4[i].checked = false
    }
  }

  res.value = ''
  teacher.value = ''
})
