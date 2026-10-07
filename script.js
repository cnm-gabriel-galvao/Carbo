const input = document.querySelector(".caixa-digitacao")
const sugestoes = document.querySelector("#sugestoes")

input.addEventListener("input", function () {
  sugestoes.innerHTML = ""

  if (input.value === "") return

  for (const alimento of alimentos) {
    if (alimento.nome.toLowerCase().includes(input.value.toLowerCase())) {
      const item = document.createElement("li")
      item.textContent = alimento.nome

      item.onclick = function () {
        input.value = alimento.nome
        sugestoes.innerHTML = ""
      }

      sugestoes.appendChild(item)
    }
  }
})
