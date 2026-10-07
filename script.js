const input = document.querySelector(".caixa-digitacao")
const sugestoes = document.querySelector("#sugestoes")

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

input.addEventListener("input", () => {
  const busca = normalizar(input.value)
  sugestoes.innerHTML = ""

  if (!busca) return

  const encontrados = alimentos
    .filter((alimento) => normalizar(alimento.nome).includes(busca))
    .slice(0, 6)

  if (encontrados.length === 0) {
    const item = document.createElement("li")
    item.className = "vazio"
    item.textContent = "Nenhum alimento encontrado"
    sugestoes.append(item)
    return
  }

  encontrados.forEach((alimento) => {
    const item = document.createElement("li")
    item.textContent = alimento.nome
    item.addEventListener("click", () => {
      input.value = alimento.nome
      sugestoes.innerHTML = ""
    })
    sugestoes.append(item)
  })
})
