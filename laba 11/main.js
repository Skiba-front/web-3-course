let defaultText = document.getElementById('defaultText'),
    arrGla = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'],
    arrSog = ['б','в','г','д','ж','з','й','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'],
    duplicateSymbol = document.getElementById('duplicate'),
    count = document.getElementById('count'),
    submitRes = document.getElementById('submitRes'),
    result = document.getElementById('result'),
    leftCheck = document.querySelectorAll('#left'),
    radioBtn = document.querySelectorAll('#right'),
    pick = document.getElementById('pick')


function duplicateCount (arr) {

}

function replacement () {

}


submitRes.addEventListener('click', () => {
  if (pick.checked === true) {
    let arrDuplicate = []
    let arrDef = defaultText.value.split('')
    let sym = duplicateSymbol.value

    for (let i = 0; i < arrDef.length; i++) {
      arrDef[i] = arrDef[i].toLowerCase()
    }

    if (leftCheck[1].checked == true) {
      for(let i = 0; i < arrDef.length; i++) {
        for (let x = 0; x < arrGla.length; x++) {
          if (arrGla[x] === arrDef[i]) {
            arrDuplicate.push(arrDef[i])
            arrDef.splice(i,1,sym.toLowerCase())
            i--
          }
        }
      }
    }

    if (leftCheck[2].checked == true) {
      for (let i = 0; i < arrDef.length; i++) {
        if (arrDef[i] === ' ') {
          arrDef.splice(i,1)
          arrDuplicate.push(' ')
          i--
        }
      }
    }

    let countRes = Array.from(new Set (arrDuplicate))
    if (leftCheck[0].checked == true) {
      count.value = countRes.length
    } else {
      count.value = ''
    }
    result.value = arrDef.join('')
  } else {
    for(let i = 0; i < radioBtn.length; i++) {
      if (radioBtn[0].checked == true) {
        let res = ''
        let arr = defaultText.value.split(' ')
        for(let i = 0; i < arr.length; i++) {
          if(res.length < arr[i].length) {
            res = arr[i]
          }
        }
        result.value = res
      }
      if (radioBtn[1].checked == true) {
        let arr = defaultText.value.split(' ')
        let res = arr[0]
        for(let i = 0; i < arr.length; i++) {
          if(res.length > arr[i].length) {
            res = arr[i]
          }
        }
        result.value = res
      }
      if (radioBtn[2].checked == true) {
        let arr = defaultText.value.split(' ')
        let resA = 0
        let resX = 0
        for(let i = 0; i < arr.length; i++) {
          let newArr = arr[i].split('')
          for(let i = 0; i < newArr.length; i++) {
            for(let x = 0; x < arrGla.length; x++) {
              if (arrGla[x] === newArr[i]) {
                resA++
              }
            }
            for(let x = 0; x < arrSog.length; x++) {
              if (arrSog[x] === newArr[i]) {
                resX++
              }
            }
          }
          if (resA === resX) {
            result.value = newArr.join('')
          }
        }

      }
    }
  }
})
