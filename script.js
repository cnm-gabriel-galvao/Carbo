const campoDeBusca = document.querySelector("#busca")
const listaDeSugestoes = document.querySelector("#sugestoes")
const listaDeSelecionados = document.querySelector("#selecionados")

function semAcento(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}
campoDeBusca.addEventListener("input", function () {
  listaDeSugestoes.innerHTML = ""

  const textoDigitado = semAcento(campoDeBusca.value)
  if (textoDigitado === "") return

  for (const alimento of alimentos) {
    const nomeDoAlimentoAtual = semAcento(alimento.nome)

    if (nomeDoAlimentoAtual.includes(textoDigitado)) {
      const sugestao = document.createElement("li")
      sugestao.textContent = alimento.nome

      sugestao.onclick = function () {
        campoDeBusca.value = alimento.nome
        listaDeSugestoes.innerHTML = ""

        const itemSelecionado = document.createElement("li")
        itemSelecionado.textContent = `${alimento.nome} — ${alimento.carboidratosPor100g} g de carboidratos por 100g`

        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "×"
        botaoRemover.onclick = function () {
          itemSelecionado.remove()
        }

        itemSelecionado.appendChild(botaoRemover)
        listaDeSelecionados.appendChild(itemSelecionado)
      }

      listaDeSugestoes.appendChild(sugestao)
    }
  }
})
