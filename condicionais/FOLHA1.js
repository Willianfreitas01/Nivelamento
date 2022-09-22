export const prompti = (texto) => {
    return Number(prompt(texto))
}

const exercicio1 = () => {
    const soma = () => {
        const valor1 = prompti("Escreva o primeiro valor")
        const valor2 = prompti("Escreva o segundo valor")
        const valor3 = prompti("Escreva o valor 3")
        return valor1 + valor2 + valor3
    }

    const divisão = () => {
        const numero1 = prompti("Escreva o primeiro valor")
        const numero2 = prompti("Escreva o segundo valor")
        return numero1 / numero2
    }

    const validaçãoPessoa = () => {
        const anoAtual = prompti("Escreva o primeiro valor")
        const anoNascimento = prompti("Escreva o primeiro valor")
        const calculo = anoAtual - anoNascimento
        if (calculo > 18) {
            return 'maior de idade'
        }
        return 'menor de idade'
    }
    const aritimético = () => {
        const somação = (valor1, valor2) => {
            return valor1 + valor2
        }
        const nota1 = prompti("Escreva seu valor")
        const nota2 = prompti("Escreva seu valor")
        const array = [nota1, nota2]
        const extençãoArray = array.length
        const somar = array.reduce(somação)
        const calculoGeral = somar / extençãoArray
        if (calculoGeral >= 5) {
            return 'aprovado'
        }
        return 'reprovado'
    }
}
const exercicio2 = () => {
    const divisão2num = () => {
        const nums1 = prompti("Escreva seu valor")
        const nums2 = prompti("Escreva seu valor")
        const divisãoo = nums1 / nums2
        if (nums2 === 0) {
            return 'não tem como dividir'
        }
        return divisãoo
    }
    const divisão2 = () => {
        const numerador = prompti("Escreva seu valor")
        const divisor = prompti("Escreva seu valor")
        const divisao = numerador / divisor
        if (divisor === 0) {
            return 'coloque outro divisor'
        }
        return divisao
    }
    const reajuste = () => {
        const salario = prompti("Escreva seu valor")
        const portantagemVinte = 0.20
        const portantagemDez = 0.10
        if (salario <= 2.500) {
            return salario + portantagemVinte
        }
        return salario + portantagemDez
    }
    const notas = () => {
        const somação = (valor1, valor2) => {
            return valor1 + valor2
        }
        const notas1 = prompti("Escreva seu valor")
        const notas2 = prompti("Escreva seu valor")
        const notas3 = prompti("Escreva seu valor")
        const notas4 = prompti("Escreva seu valor")

        const todasNotas = [notas1, notas2, notas3, notas4]
        const extençãoArray = todasNotas.length
        const somar = todasNotas.reduce(somação)
        const calculoAritimetico = somar / extençãoArray
        console.log(`esse é o calculo aritimético ${calculoAritimetico}`)
        if (calculoAritimetico >= 7) {
            return 'Aluno aprovado'
        }
        else if (calculoAritimetico >= 4 && calculoAritimetico < 7) {
            return 'Aluno em exame'
        }
        return 'Aluno reprovado'
    }
}

exercicio2()
//exercicio1()