// # Unit Tests for `Negative`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './negative'

export const negativeTestSuite: test.Test = test.describe('Negative', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Negative.is(3.14), false)
            assert.equal(Sut.Negative.is(0), false)
            assert.equal(Sut.Negative.is(-1.68), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.Negative.decode(-3.14), -3.14 as Sut.Negative)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.Negative, undefined, [
                'Invalid value undefined supplied to : Negative',
            ])
            assertionUtilities.failure(Sut.Negative, null, [
                'Invalid value null supplied to : Negative',
            ])
            assertionUtilities.failure(Sut.Negative, '', [
                'Invalid value "" supplied to : Negative',
            ])
            assertionUtilities.failure(Sut.Negative, '-3.14', [
                'Invalid value "-3.14" supplied to : Negative',
            ])
            assertionUtilities.failure(Sut.Negative, {}, [
                'Invalid value {} supplied to : Negative',
            ])
            assertionUtilities.failure(
                Sut.Negative,
                [],
                ['Invalid value [] supplied to : Negative'],
            )
            assertionUtilities.failure(
                Sut.Negative,
                [-3.14],
                ['Invalid value [-3.14] supplied to : Negative'],
            )
            assertionUtilities.failure(Sut.Negative, 9.5, [
                'Invalid value 9.5 supplied to : Negative',
            ])
            assertionUtilities.failure(Sut.Negative, 0, ['Invalid value 0 supplied to : Negative'])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Negative.encode(-6.28 as Sut.Negative), -6.28)
        }),
    ]),
])
