const input = document.querySelector(".caixa-digitacao")
const nomeDigitado = input.value

const alimento = alimentos[0]
const carboidratos = alimento.carboidratosPor100g
console.log(
  "O alimento " +
    alimento.nome +
    " possui " +
    carboidratos +
    " g de carboidratos por 100 g.",
)
