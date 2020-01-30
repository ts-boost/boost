// # Unit Tests for `Nonnegative`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './nonnegative'

export const nonnegativeTestSuite: test.Test = test.describe('Nonnegative', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Nonnegative.is(-3.14), false)
            assert.equal(Sut.Nonnegative.is(0), true)
            assert.equal(Sut.Nonnegative.is(1.68), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.Nonnegative.decode(0), 0 as Sut.Nonnegative)
            assertionUtilities.success(Sut.Nonnegative.decode(3.14), 3.14 as Sut.Nonnegative)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.Nonnegative, undefined, [
                'Invalid value undefined supplied to : (Zero | Positive)/0: Zero',
                'Invalid value undefined supplied to : (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.Nonnegative, null, [
                'Invalid value null supplied to : (Zero | Positive)/0: Zero',
                'Invalid value null supplied to : (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.Nonnegative, '', [
                'Invalid value "" supplied to : (Zero | Positive)/0: Zero',
                'Invalid value "" supplied to : (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.Nonnegative, '3.14', [
                'Invalid value "3.14" supplied to : (Zero | Positive)/0: Zero',
                'Invalid value "3.14" supplied to : (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.Nonnegative, {}, [
                'Invalid value {} supplied to : (Zero | Positive)/0: Zero',
                'Invalid value {} supplied to : (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(
                Sut.Nonnegative,
                [],
                [
                    'Invalid value [] supplied to : (Zero | Positive)/0: Zero',
                    'Invalid value [] supplied to : (Zero | Positive)/1: Positive',
                ],
            )
            assertionUtilities.failure(
                Sut.Nonnegative,
                [0],
                [
                    'Invalid value [0] supplied to : (Zero | Positive)/0: Zero',
                    'Invalid value [0] supplied to : (Zero | Positive)/1: Positive',
                ],
            )
            assertionUtilities.failure(Sut.Nonnegative, -9.63, [
                'Invalid value -9.63 supplied to : (Zero | Positive)/0: Zero',
                'Invalid value -9.63 supplied to : (Zero | Positive)/1: Positive',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Nonnegative.encode(3.14 as Sut.Nonnegative), 3.14)
            assert.equal(Sut.Nonnegative.encode(0 as Sut.Nonnegative), 0)
        }),
    ]),
])
