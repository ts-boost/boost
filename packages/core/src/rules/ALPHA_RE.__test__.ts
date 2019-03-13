import { describe, given, it, Test } from '@typed/test'
import { ALPHA_RE } from './ALPHA_RE'

export const t: Test = describe('ALPHA_RE', [
    it('matches "A"', ({ ok }) => {
        const a = 'A'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    it('matches "H"', ({ ok }) => {
        const a = 'H'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    it('matches "O"', ({ ok }) => {
        const a = 'O'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    it('matches "V"', ({ ok }) => {
        const a = 'V'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    it('matches "d"', ({ ok }) => {
        const a = 'd'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    it('matches "k"', ({ ok }) => {
        const a = 'k'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    it('matches "r"', ({ ok }) => {
        const a = 'r'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    it('matches "z"', ({ ok }) => {
        const a = 'z'
        const expectedResult = ALPHA_RE.test(a)
        ok(expectedResult)
    }),
    given('a string of more than one character', [
        it('it doesn’t match', ({ notOk }) => {
            const a = 'ABC'
            const expectedResult = ALPHA_RE.test(a)
            notOk(expectedResult)
        }),
    ]),
])
