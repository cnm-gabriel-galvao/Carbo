const input = document.querySelector(".caixa-digitacao")
const nomeDigitado = input.value

const alimento = alimentos[0]
const carboidratos = alimento.carboidratosPor100g
prite(
  "O alimento " +
    alimento.nome +
    " possui " +
    carboidratos +
    " g de carboidratos por 100 g.",
)
