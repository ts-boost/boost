// # Unit tests for `Positive`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './positive'

export const positiveTestSuite: test.Test = test.describe('Positive', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Positive.is(-1.68), false)
            assert.equal(Sut.Positive.is(0), false)
            assert.equal(Sut.Positive.is(3.14), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.Positive.decode(3.14), 3.14 as Sut.Positive)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.Positive, undefined, [
                'Invalid value undefined supplied to : Positive',
            ])
            assertionUtilities.failure(Sut.Positive, null, [
                'Invalid value null supplied to : Positive',
            ])
            assertionUtilities.failure(Sut.Positive, '', [
                'Invalid value "" supplied to : Positive',
            ])
            assertionUtilities.failure(Sut.Positive, '3.14', [
                'Invalid value "3.14" supplied to : Positive',
            ])
            assertionUtilities.failure(Sut.Positive, {}, [
                'Invalid value {} supplied to : Positive',
            ])
            assertionUtilities.failure(
                Sut.Positive,
                [],
                ['Invalid value [] supplied to : Positive'],
            )
            assertionUtilities.failure(
                Sut.Positive,
                [3.14],
                ['Invalid value [3.14] supplied to : Positive'],
            )
            assertionUtilities.failure(Sut.Positive, -9.5, [
                'Invalid value -9.5 supplied to : Positive',
            ])
            assertionUtilities.failure(Sut.Positive, 0, ['Invalid value 0 supplied to : Positive'])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Positive.encode(6.28 as Sut.Positive), 6.28)
        }),
    ]),
])
