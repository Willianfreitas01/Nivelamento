const prompti = (texto) => {
    return Number(prompt(texto))
}

const doisNumeros = () => {
    const numero1 = prompti("Escreva seu valor")
    const numero2 = prompti("Escreva seu valor")
    return numero1 - numero2
}
const trêsNumeros = () => {
    const num1 = prompti("Escreva seu valor")
    const num2 = prompti("Escreva seu valor")
    const num3 = prompti("Escreva seu valor")
    return num1 * num2 * num3
}
const numerosInteiros = () => {
    const numeros1 = prompti("Escreva seu valor")
    const numeros2 = prompti("Escreva seu valor")
    const numeros3 = prompti("Escreva seu valor")
    const numeros4 = prompti("Escreva seu valor")
    return numeros1 + numeros2 + numeros3 + numeros4
}
const aritimética = () => {
    const somador = (val, val2) => {
        return val + val2
    }
    const valor1 = prompti("Escreva seu valor")
    const valor2 = prompti("Escreva seu valor")
    const valor3 = prompti("Escreva seu valor")
    const valores = [valor1, valor2, valor3]
    const somatório = valores.reduce(somador)
    const extençãoDoArray = valores.length
    return somatório / extençãoDoArray
}
const peso = () => {
    const kg = prompti("Escreva seu valor")
    return kg * 1000
}
const calculoDeProduto = () => {
    const etiqueta = prompti("Escreva seu valor")
    const aVista = etiqueta - 0.10
    const parceladoDuas = etiqueta
    const parceladoQuatro = etiqueta + 0.05
    if (etiqueta === aVista) {
        return aVista
    }
    else if (etiqueta === parceladoDuas) {
        return parceladoDuas
    }
    return parceladoQuatro
}