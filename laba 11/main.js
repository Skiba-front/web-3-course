let defaultText = document.getElementById('defaultText'),
    arrGla = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'],
    arrSog = ['б','в','г','д','ж','з','й','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'],
    duplicateSymbol = document.getElementById('duplicate'),
    count = document.getElementById('count'),
    submitRes = document.getElementById('submitRes'),
    result = document.getElementById('result'),
    leftCheck = document.querySelectorAll('#left')


function duplicateCount (arr) {

}

function replacement () {

}


submitRes.addEventListener('click', () => {
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

if (leftCheck[0].checked == true) {
  arrDuplicate.filter((item, index) => {
    return arrDuplicate.indexOf(item) === index
 })
}

let countRes = Array.from(new Set (arrDuplicate))
if (leftCheck[0].checked == true) {
  count.value = countRes.length
} else {
  count.value = ''
}
result.value = arrDef.join('')
})

