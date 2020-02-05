// # Unit tests for 'PartialTimeString'

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './partial-time-string'

export const partialTimeStringTestSuite: test.Test = test.describe('PartialTimeString', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.PartialTimeString.is('12:59:69'), false)
            assert.equal(Sut.PartialTimeString.is('23:59:59.9'), false)
            assert.equal(Sut.PartialTimeString.is('23:59:59.99'), false)
            assert.equal(Sut.PartialTimeString.is('12:59:59'), true)
            assert.equal(Sut.PartialTimeString.is('23:59:59.999'), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(
                Sut.PartialTimeString.decode('23:59:59'),
                '23:59:59' as Sut.PartialTimeString,
            )
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.PartialTimeString, undefined, [
                'Invalid value undefined supplied to : PartialTimeString',
            ])
            assertionUtilities.failure(Sut.PartialTimeString, null, [
                'Invalid value null supplied to : PartialTimeString',
            ])
            assertionUtilities.failure(Sut.PartialTimeString, 235959, [
                'Invalid value 235959 supplied to : PartialTimeString',
            ])
            assertionUtilities.failure(Sut.PartialTimeString, {}, [
                'Invalid value {} supplied to : PartialTimeString',
            ])
            assertionUtilities.failure(
                Sut.PartialTimeString,
                [],
                ['Invalid value [] supplied to : PartialTimeString'],
            )
            assertionUtilities.failure(
                Sut.PartialTimeString,
                ['23:59:59'],
                ['Invalid value ["23:59:59"] supplied to : PartialTimeString'],
            )
            assertionUtilities.failure(Sut.PartialTimeString, new Date('1973-01-30'), [
                'Invalid value "1973-01-30T00:00:00.000Z" supplied to : PartialTimeString',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(
                Sut.PartialTimeString.encode('23:59:59' as Sut.PartialTimeString),
                '23:59:59',
            )
        }),
    ]),
])
