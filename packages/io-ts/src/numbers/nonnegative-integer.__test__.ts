// # Unit Tests for `NonnegativeInteger`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './nonnegative-integer'

export const negativeTestSuite: test.Test = test.describe('NonnegativeInteger', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.NonnegativeInteger.is(-7), false)
            assert.equal(Sut.NonnegativeInteger.is(0), true)
            assert.equal(Sut.NonnegativeInteger.is(42), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(
                Sut.NonnegativeInteger.decode(0),
                0 as Sut.NonnegativeInteger,
            )
            assertionUtilities.success(
                Sut.NonnegativeInteger.decode(42),
                42 as Sut.NonnegativeInteger,
            )
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.NonnegativeInteger, undefined, [
                'Invalid value undefined supplied to : (Integer & (Zero | Positive))/0: Integer',
                'Invalid value undefined supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                'Invalid value undefined supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.NonnegativeInteger, null, [
                'Invalid value null supplied to : (Integer & (Zero | Positive))/0: Integer',
                'Invalid value null supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                'Invalid value null supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.NonnegativeInteger, '', [
                'Invalid value "" supplied to : (Integer & (Zero | Positive))/0: Integer',
                'Invalid value "" supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                'Invalid value "" supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.NonnegativeInteger, '7', [
                'Invalid value "7" supplied to : (Integer & (Zero | Positive))/0: Integer',
                'Invalid value "7" supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                'Invalid value "7" supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(Sut.NonnegativeInteger, {}, [
                'Invalid value {} supplied to : (Integer & (Zero | Positive))/0: Integer',
                'Invalid value {} supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                'Invalid value {} supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
            ])
            assertionUtilities.failure(
                Sut.NonnegativeInteger,
                [],
                [
                    'Invalid value [] supplied to : (Integer & (Zero | Positive))/0: Integer',
                    'Invalid value [] supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                    'Invalid value [] supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
                ],
            )
            assertionUtilities.failure(
                Sut.NonnegativeInteger,
                [42],
                [
                    'Invalid value [42] supplied to : (Integer & (Zero | Positive))/0: Integer',
                    'Invalid value [42] supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                    'Invalid value [42] supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
                ],
            )
            assertionUtilities.failure(Sut.NonnegativeInteger, -7, [
                'Invalid value -7 supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
                'Invalid value -7 supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.NonnegativeInteger.encode(42 as Sut.NonnegativeInteger), 42)
        }),
    ]),
])
