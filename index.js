const id = document.querySelector('#typeId')
const pw = document.querySelector('#typePw')

function saveData(text) {
  const userData = localStorage.setItem(id.value, pw.value)
}