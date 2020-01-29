// # Unit Tests for `Zero`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './zero'

export const zeroTestSuite: test.Test = test.describe('Zero', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Zero.is(-3.14), false)
            assert.equal(Sut.Zero.is(1.68), false)
            assert.equal(Sut.Zero.is(0), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.Zero.decode(0), 0 as Sut.Zero)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.Zero, undefined, [
                'Invalid value undefined supplied to : Zero',
            ])
            assertionUtilities.failure(Sut.Zero, null, ['Invalid value null supplied to : Zero'])
            assertionUtilities.failure(Sut.Zero, null, ['Invalid value null supplied to : Zero'])
            assertionUtilities.failure(Sut.Zero, '', ['Invalid value "" supplied to : Zero'])
            assertionUtilities.failure(Sut.Zero, '3.14', [
                'Invalid value "3.14" supplied to : Zero',
            ])
            assertionUtilities.failure(Sut.Zero, {}, ['Invalid value {} supplied to : Zero'])
            assertionUtilities.failure(Sut.Zero, [], ['Invalid value [] supplied to : Zero'])
            assertionUtilities.failure(Sut.Zero, [0], ['Invalid value [0] supplied to : Zero'])
            assertionUtilities.failure(Sut.Zero, -9.5, ['Invalid value -9.5 supplied to : Zero'])
            assertionUtilities.failure(Sut.Zero, 3.14, ['Invalid value 3.14 supplied to : Zero'])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Zero.encode(0 as Sut.Zero), 0)
        }),
    ]),
])
