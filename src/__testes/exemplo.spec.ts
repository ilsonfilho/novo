import { describe, expect, it, test } from 'vitest'
import { somar, subtrair, multiplicar, dividir } from '../utils/funcoes'

describe('A truthy statement', () => {

    it('Somar', () => {
        expect(somar(10, 2)).toEqual(12)
    })

    test('Subtrair', () => {
        expect(subtrair(10, 2)).toEqual(8)
    })

    it('Multiplicar', () => {
        expect(multiplicar(10, 2)).toEqual(20)
    })

    test('Dividir', () => {
        expect(dividir(10, 2)).toEqual(5)
    })
})

