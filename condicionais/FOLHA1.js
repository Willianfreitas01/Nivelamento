const exercicio1 = () => {
    const soma = (num1, num2, num3) => {
        return num1 + num2 + num3
    }

    const divisão = (numero1, numero2) => {
        return numero1 / numero2
    }

    const validaçãoPessoa = (anoNascimento) => {
        const anoAtual = 2022
        const calculo = anoAtual - anoNascimento
        if (calculo > 18) {
            return 'maior de idade'
        }
        return 'menor de idade'
    }
    const aritimético = (nota1, nota2) => {
        const somação = (valor1, valor2) => {
            return valor1 + valor2
        }
        const array = [nota1, nota2]
        const extençãoArray = array.length
        const somar = array.reduce(somação)
        const calculoGeral = somar / extençãoArray
        if (calculoGeral >= 5) {
            return 'aprovado'
        }
        return 'reprovado'
    }
    console.log(validaçãoPessoa(2002))
    console.log(soma(1, 5, 7))
    console.log(divisão(5, 8))
    console.log(aritimético(5, 5))
}
const exercicio2 = () => {
    const divisão2num = (nums1, nums2) => {
        const divisãoo = nums1 / nums2
        if (nums2 === 0) {
            return 'não tem como dividir'
        }
        return divisãoo
    }
    const divisão2 = (numerador, divisor) => {
        const divisao = numerador / divisor
        if (divisor === 0) {
            return 'coloque outro divisor'
        }
        return divisao
    }
    const reajuste = (salario) => {
        const portantagemVinte = 0.20
        const portantagemDez = 0.10
        if (salario <= 2.500) {
            return salario + portantagemVinte
        }
        return salario + portantagemDez
    }
    const notas = (notas1, notas2, notas3, notas4) => {
        const somação = (valor1, valor2) => {
            return valor1 + valor2
        }
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
    console.log(divisão2num(5, 0))
    console.log(divisão2(5, 0))
    console.log(reajuste(2.600).toFixed(3))
    console.log(notas(5, 6, 8, 9))
}

exercicio2()
//exercicio1()