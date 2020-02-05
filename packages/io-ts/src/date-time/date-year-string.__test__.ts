// # Unit tests for 'DateYearString'

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './date-year-string'

export const isoDateTestSuite: test.Test = test.describe('DateYearString', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.DateYearString.is('20200'), false)
            assert.equal(Sut.DateYearString.is('1973'), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(
                Sut.DateYearString.decode('1973'),
                '1973' as Sut.DateYearString,
            )
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.DateYearString, undefined, [
                'Invalid value undefined supplied to : DateYearString',
            ])
            assertionUtilities.failure(Sut.DateYearString, null, [
                'Invalid value null supplied to : DateYearString',
            ])
            assertionUtilities.failure(Sut.DateYearString, 1973, [
                'Invalid value 1973 supplied to : DateYearString',
            ])
            assertionUtilities.failure(Sut.DateYearString, {}, [
                'Invalid value {} supplied to : DateYearString',
            ])
            assertionUtilities.failure(
                Sut.DateYearString,
                [],
                ['Invalid value [] supplied to : DateYearString'],
            )
            assertionUtilities.failure(
                Sut.DateYearString,
                ['1973'],
                ['Invalid value ["1973"] supplied to : DateYearString'],
            )
            assertionUtilities.failure(Sut.DateYearString, new Date('1973'), [
                'Invalid value "1973-01-01T00:00:00.000Z" supplied to : DateYearString',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.DateYearString.encode('1973' as Sut.DateYearString), '1973')
        }),
    ]),
])
