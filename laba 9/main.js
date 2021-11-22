let res = document.getElementById('result'),
    arrCost = [451000, 1200, 4500, 12000, 16000],
    arrCheckBox = document.querySelectorAll('.check'),
    cost = 0,
    but = document.getElementById('button'),
    labels = document.querySelectorAll('label'),
    result = []

for (let i = 0; i < arrCheckBox.length; i++) {
  arrCheckBox[i].addEventListener('click', () => {
    if (arrCheckBox[i].checked == true) {
      for (let x = 0; x < arrCheckBox.length; x++) {
        cost = x === i ? cost + arrCost[x] : cost = cost;
        }
        result.push(labels[i].textContent)
    } else {
      cost -= arrCost[i]
      result.pop()
    }
      res.textContent = `Цена: ${cost}`
  })
}

but.addEventListener('click', () => {
  if (cost == 484700) {
    res.textContent = `Цена: ${cost * 0.9}`
    alert(`Ваш заказ успешно обработан
Стоимость со скидкой: ${cost * 0.9}
${result}
  `)
  } else {
    alert(`Ваш заказ успешно обработан
Стоимость: ${cost}
${result}
  `)
  }
})

