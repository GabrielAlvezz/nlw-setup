const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const buttonNew = document.querySelector("#buttonNew")

buttonNew.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists == true) {
    alert("Esse dia já está incluso! 🔴")
  } else {
    nlwSetup.addDay(today)
    alert("Dia incluído com sucesso! 🟢")
  }
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

/*const data = {
  run: ["01-01", "01-02", "01-06"],
  water: ["01-01", "01-02", "01-06"],
  food: ["01-02", "01-06"],
  journal: ["01-06"],
  takePills: ["01-01", "01-06", "01-11"],
}*/
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
