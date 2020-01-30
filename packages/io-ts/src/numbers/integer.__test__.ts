// # Unit Tests for `Integer`

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './integer'

export const negativeTestSuite: test.Test = test.describe('Integer', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Integer.is(3.14), false)
            assert.equal(Sut.Integer.is(0), true)
            assert.equal(Sut.Integer.is(42), true)
            assert.equal(Sut.Integer.is(-117), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(Sut.Integer.decode(42), 42 as Sut.Integer)
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.Integer, undefined, [
                'Invalid value undefined supplied to : Integer',
            ])
            assertionUtilities.failure(Sut.Integer, null, [
                'Invalid value null supplied to : Integer',
            ])
            assertionUtilities.failure(Sut.Integer, '', ['Invalid value "" supplied to : Integer'])
            assertionUtilities.failure(Sut.Integer, '-3.14', [
                'Invalid value "-3.14" supplied to : Integer',
            ])
            assertionUtilities.failure(Sut.Integer, {}, ['Invalid value {} supplied to : Integer'])
            assertionUtilities.failure(Sut.Integer, [], ['Invalid value [] supplied to : Integer'])
            assertionUtilities.failure(
                Sut.Integer,
                [-3.14],
                ['Invalid value [-3.14] supplied to : Integer'],
            )
            assertionUtilities.failure(Sut.Integer, 9.5, [
                'Invalid value 9.5 supplied to : Integer',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.Integer.encode(42 as Sut.Integer), 42)
        }),
    ]),
])
