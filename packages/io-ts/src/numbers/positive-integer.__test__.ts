// # Unit Tests for `PositiveInteger`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './positive-integer'

export const negativeTestSuite: test.Test = test.describe('PositiveInteger', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.PositiveInteger.is(-7), false)
            assert.equal(Sut.PositiveInteger.is(0), false)
            assert.equal(Sut.PositiveInteger.is(42), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.PositiveInteger.decode(42), 42 as Sut.PositiveInteger)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.PositiveInteger, undefined, [
                'Invalid value undefined supplied to : (Integer & Positive)/0: Integer',
                'Invalid value undefined supplied to : (Integer & Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.PositiveInteger, null, [
                'Invalid value null supplied to : (Integer & Positive)/0: Integer',
                'Invalid value null supplied to : (Integer & Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.PositiveInteger, '', [
                'Invalid value "" supplied to : (Integer & Positive)/0: Integer',
                'Invalid value "" supplied to : (Integer & Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.PositiveInteger, '42', [
                'Invalid value "42" supplied to : (Integer & Positive)/0: Integer',
                'Invalid value "42" supplied to : (Integer & Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.PositiveInteger, {}, [
                'Invalid value {} supplied to : (Integer & Positive)/0: Integer',
                'Invalid value {} supplied to : (Integer & Positive)/1: Positive',
            ])
            assertionUtilities.failure(
                Sut.PositiveInteger,
                [],
                [
                    'Invalid value [] supplied to : (Integer & Positive)/0: Integer',
                    'Invalid value [] supplied to : (Integer & Positive)/1: Positive',
                ],
            )
            assertionUtilities.failure(
                Sut.PositiveInteger,
                [42],
                [
                    'Invalid value [42] supplied to : (Integer & Positive)/0: Integer',
                    'Invalid value [42] supplied to : (Integer & Positive)/1: Positive',
                ],
            )
            assertionUtilities.failure(Sut.PositiveInteger, -7, [
                'Invalid value -7 supplied to : (Integer & Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.PositiveInteger, 0, [
                'Invalid value 0 supplied to : (Integer & Positive)/1: Positive',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.PositiveInteger.encode(42 as Sut.PositiveInteger), 42)
        }),
    ]),
])
