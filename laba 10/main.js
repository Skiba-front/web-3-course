let sel = document.querySelectorAll("#sel"),
    res = document.getElementById('res'),
    priceList = [400,400,500,500,600,800],
    roles = ['студент', 'аспирант', 'школьный преподаватель', 'преподаватель вуза', 'частный преподаватель', 'носитель языка'],
    clear = document.getElementById('clear')

res.addEventListener('click', () => {
  let role = sel[1].value
  let count = sel[3].value
  for (let i = 0; i < roles.length; i++) {
    if (role === roles[i]) {
      sel[2].value = priceList[i]
    }
  }
  sel[4].value = count*sel[2].value
})

clear.addEventListener('click', () => {
  sel[2].value = ""
  sel[4].value = ""
  sel[3].value = ""
})
