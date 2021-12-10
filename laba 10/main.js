let sel = document.querySelectorAll("#sel"),
    res = document.getElementById('res'),
    priceList = [400,400,500,500,600,800],
    roles = ['студент', 'аспирант', 'школьный преподаватель', 'преподаватель вуза', 'частный преподаватель', 'носитель языка'],
    clear = document.getElementById('clear')

res.addEventListener('click', () => {
  if (sel[3].value != '') {
  let role = sel[1].value
  let count = sel[3].value
  for (let i = 0; i < roles.length; i++) {
    if (role === roles[i]) {
      sel[2].value = priceList[i]
    }
  }
  sel[4].value = `Для изучения выбран:
${sel[0].value} язык по ${sel[2].value} в час
Стоимость ${count*sel[2].value}`
  } else {
    alert('не все поля заполнены')
  }
})

clear.addEventListener('click', () => {
  sel[2].value = ""
  sel[4].value = ""
  sel[3].value = ""
})
