// # Unit Tests for `NegativeInteger`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './negative-integer'

export const negativeTestSuite: test.Test = test.describe('NegativeInteger', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.NegativeInteger.is(42), false)
            assert.equal(Sut.NegativeInteger.is(0), false)
            assert.equal(Sut.NegativeInteger.is(-7), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.NegativeInteger.decode(-7), -7 as Sut.NegativeInteger)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.NegativeInteger, undefined, [
                'Invalid value undefined supplied to : (Integer & Negative)/0: Integer',
                'Invalid value undefined supplied to : (Integer & Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.NegativeInteger, null, [
                'Invalid value null supplied to : (Integer & Negative)/0: Integer',
                'Invalid value null supplied to : (Integer & Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.NegativeInteger, '', [
                'Invalid value "" supplied to : (Integer & Negative)/0: Integer',
                'Invalid value "" supplied to : (Integer & Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.NegativeInteger, '-7', [
                'Invalid value "-7" supplied to : (Integer & Negative)/0: Integer',
                'Invalid value "-7" supplied to : (Integer & Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.NegativeInteger, {}, [
                'Invalid value {} supplied to : (Integer & Negative)/0: Integer',
                'Invalid value {} supplied to : (Integer & Negative)/1: Negative',
            ])
            assertionUtilities.failure(
                Sut.NegativeInteger,
                [],
                [
                    'Invalid value [] supplied to : (Integer & Negative)/0: Integer',
                    'Invalid value [] supplied to : (Integer & Negative)/1: Negative',
                ],
            )
            assertionUtilities.failure(
                Sut.NegativeInteger,
                [-7],
                [
                    'Invalid value [-7] supplied to : (Integer & Negative)/0: Integer',
                    'Invalid value [-7] supplied to : (Integer & Negative)/1: Negative',
                ],
            )
            assertionUtilities.failure(Sut.NegativeInteger, 42, [
                'Invalid value 42 supplied to : (Integer & Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.NegativeInteger, 0, [
                'Invalid value 0 supplied to : (Integer & Negative)/1: Negative',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.NegativeInteger.encode(-7 as Sut.NegativeInteger), -7)
        }),
    ]),
])
