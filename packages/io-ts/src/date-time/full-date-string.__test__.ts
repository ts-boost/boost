// # Unit tests for 'FullDateString'

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './full-date-string'

export const fullDateStringTestSuite: test.Test = test.describe('FullDateString', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.FullDateString.is('2020-02-40'), false)
            assert.equal(Sut.FullDateString.is('19730130'), true)
            assert.equal(Sut.FullDateString.is('1973-01-30'), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(
                Sut.FullDateString.decode('1973-01-30'),
                '1973-01-30' as Sut.FullDateString,
            )
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.FullDateString, undefined, [
                'Invalid value undefined supplied to : FullDateString',
            ])
            assertionUtilities.failure(Sut.FullDateString, null, [
                'Invalid value null supplied to : FullDateString',
            ])
            assertionUtilities.failure(Sut.FullDateString, '2020-02-40', [
                'Invalid value "2020-02-40" supplied to : FullDateString',
            ])
            assertionUtilities.failure(Sut.FullDateString, {}, [
                'Invalid value {} supplied to : FullDateString',
            ])
            assertionUtilities.failure(
                Sut.FullDateString,
                [],
                ['Invalid value [] supplied to : FullDateString'],
            )
            assertionUtilities.failure(
                Sut.FullDateString,
                ['1973-01-30'],
                ['Invalid value ["1973-01-30"] supplied to : FullDateString'],
            )
            assertionUtilities.failure(Sut.FullDateString, new Date('1973-01-30'), [
                'Invalid value "1973-01-30T00:00:00.000Z" supplied to : FullDateString',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(
                Sut.FullDateString.encode('1973-01-30' as Sut.FullDateString),
                '1973-01-30',
            )
        }),
    ]),
])
