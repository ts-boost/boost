// # Unit Tests for `Nonzero`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './nonzero'

export const zeroTestSuite: test.Test = test.describe('Nonzero', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Nonzero.is(0), false)
            assert.equal(Sut.Nonzero.is(-3.14), true)
            assert.equal(Sut.Nonzero.is(1.68), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.Nonzero.decode(3.14), 0 as Sut.Nonzero)
            assertionUtilities.success(Sut.Nonzero.decode(-6.283), 0 as Sut.Nonzero)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.Nonzero, undefined, [
                'Invalid value undefined supplied to : (Positive | Negative)/0: Positive',
                'Invalid value undefined supplied to : (Positive | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonzero, null, [
                'Invalid value null supplied to : (Positive | Negative)/0: Positive',
                'Invalid value null supplied to : (Positive | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonzero, '', [
                'Invalid value "" supplied to : (Positive | Negative)/0: Positive',
                'Invalid value "" supplied to : (Positive | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonzero, '3.14', [
                'Invalid value "3.14" supplied to : (Positive | Negative)/0: Positive',
                'Invalid value "3.14" supplied to : (Positive | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonzero, {}, [
                'Invalid value {} supplied to : (Positive | Negative)/0: Positive',
                'Invalid value {} supplied to : (Positive | Negative)/1: Negative',
            ])
            assertionUtilities.failure(
                Sut.Nonzero,
                [],
                [
                    'Invalid value [] supplied to : (Positive | Negative)/0: Positive',
                    'Invalid value [] supplied to : (Positive | Negative)/1: Negative',
                ],
            )
            assertionUtilities.failure(
                Sut.Nonzero,
                [0],
                [
                    'Invalid value [0] supplied to : (Positive | Negative)/0: Positive',
                    'Invalid value [0] supplied to : (Positive | Negative)/1: Negative',
                ],
            )
            assertionUtilities.failure(Sut.Nonzero, 0, [
                'Invalid value 0 supplied to : (Positive | Negative)/0: Positive',
                'Invalid value 0 supplied to : (Positive | Negative)/1: Negative',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Nonzero.encode(3.14 as Sut.Nonzero), 3.14)
            assert.equal(Sut.Nonzero.encode(-0.6801 as Sut.Nonzero), -0.6801)
        }),
    ]),
])
