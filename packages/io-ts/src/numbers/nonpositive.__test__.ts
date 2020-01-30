// # Unit Tests for `Nonpositive`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './nonpositive'

export const nonnegativeTestSuite: test.Test = test.describe('Nonpositive', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Nonpositive.is(3.14), false)
            assert.equal(Sut.Nonpositive.is(0), true)
            assert.equal(Sut.Nonpositive.is(-1.68), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.Nonpositive.decode(0), 0 as Sut.Nonpositive)
            assertionUtilities.success(Sut.Nonpositive.decode(-3.14), -3.14 as Sut.Nonpositive)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.Nonpositive, undefined, [
                'Invalid value undefined supplied to : (Zero | Negative)/0: Zero',
                'Invalid value undefined supplied to : (Zero | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonpositive, null, [
                'Invalid value null supplied to : (Zero | Negative)/0: Zero',
                'Invalid value null supplied to : (Zero | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonpositive, '', [
                'Invalid value "" supplied to : (Zero | Negative)/0: Zero',
                'Invalid value "" supplied to : (Zero | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonpositive, '-3.14', [
                'Invalid value "-3.14" supplied to : (Zero | Negative)/0: Zero',
                'Invalid value "-3.14" supplied to : (Zero | Negative)/1: Negative',
            ])
            assertionUtilities.failure(Sut.Nonpositive, {}, [
                'Invalid value {} supplied to : (Zero | Negative)/0: Zero',
                'Invalid value {} supplied to : (Zero | Negative)/1: Negative',
            ])
            assertionUtilities.failure(
                Sut.Nonpositive,
                [],
                [
                    'Invalid value [] supplied to : (Zero | Negative)/0: Zero',
                    'Invalid value [] supplied to : (Zero | Negative)/1: Negative',
                ],
            )
            assertionUtilities.failure(
                Sut.Nonpositive,
                [0],
                [
                    'Invalid value [0] supplied to : (Zero | Negative)/0: Zero',
                    'Invalid value [0] supplied to : (Zero | Negative)/1: Negative',
                ],
            )
            assertionUtilities.failure(Sut.Nonpositive, 9.63, [
                'Invalid value 9.63 supplied to : (Zero | Negative)/0: Zero',
                'Invalid value 9.63 supplied to : (Zero | Negative)/1: Negative',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Nonpositive.encode(0 as Sut.Nonpositive), 0)
            assert.equal(Sut.Nonpositive.encode(0.6801 as Sut.Nonpositive), 0.6801)
        }),
    ]),
])
