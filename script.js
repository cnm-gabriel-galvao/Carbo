const campoDeBusca = document.querySelector("#busca")
const listaDeSugestoes = document.querySelector("#sugestoes")

campoDeBusca.addEventListener("input", function () {
  listaDeSugestoes.innerHTML = ""

  const textoDigitado = campoDeBusca.value.toLowerCase()
  if (textoDigitado === "") return

  for (const alimento of alimentos) {
    const nomeDoAlimentoAtual = alimento.nome.toLowerCase()

    if (nomeDoAlimentoAtual.includes(textoDigitado)) {
      const sugestao = document.createElement("li")
      sugestao.textContent = alimento.nome

      sugestao.onclick = function () {
        campoDeBusca.value = alimento.nome
        listaDeSugestoes.innerHTML = ""
      }

      listaDeSugestoes.appendChild(sugestao)
    }
  }
})
