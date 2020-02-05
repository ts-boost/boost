// # Unit tests for 'IsoCalendarDateString'

// ## Dependencies

// ### @typed/test
import * as test from '@typed/test'

// ### Assertion Utilities
import * as assertionUtilities from '../../../../test/assertion-utilities'

// ### System under test
import * as Sut from './iso-calendar-date-string'

export const isoDateTestSuite: test.Test = test.describe('IsoCalendarDateString', [
    test.describe('is', [
        test.it('checks an isomorphic value', (assert: test.Assertions) => {
            assert.equal(Sut.IsoCalendarDateString.is('2020-02-40'), false)
            assert.equal(Sut.IsoCalendarDateString.is('19730130'), true)
            assert.equal(Sut.IsoCalendarDateString.is('1973-01-30'), true)
        }),
    ]),
    test.describe('decode', [
        test.it('succeeds validating a valid value', (assert: test.Assertions) => {
            assertionUtilities.success(
                Sut.IsoCalendarDateString.decode('1973-01-30'),
                '1973-01-30' as Sut.IsoCalendarDateString,
            )
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
        test.it('fails validating an invalid value', (assert: test.Assertions) => {
            assertionUtilities.failure(Sut.IsoCalendarDateString, undefined, [
                'Invalid value undefined supplied to : IsoCalendarDateString',
            ])
            assertionUtilities.failure(Sut.IsoCalendarDateString, null, [
                'Invalid value null supplied to : IsoCalendarDateString',
            ])
            assertionUtilities.failure(Sut.IsoCalendarDateString, '2020-02-40', [
                'Invalid value "2020-02-40" supplied to : IsoCalendarDateString',
            ])
            assertionUtilities.failure(Sut.IsoCalendarDateString, {}, [
                'Invalid value {} supplied to : IsoCalendarDateString',
            ])
            assertionUtilities.failure(
                Sut.IsoCalendarDateString,
                [],
                ['Invalid value [] supplied to : IsoCalendarDateString'],
            )
            assertionUtilities.failure(
                Sut.IsoCalendarDateString,
                ['1973-01-30'],
                ['Invalid value ["1973-01-30"] supplied to : IsoCalendarDateString'],
            )
            assertionUtilities.failure(Sut.IsoCalendarDateString, new Date('1973-01-30'), [
                'Invalid value "1973-01-30T00:00:00.000Z" supplied to : IsoCalendarDateString',
            ])
            // Hack to prevent `No Assertions used` error.
            assert.ok(true)
        }),
    ]),
    test.describe('encode', [
        test.it('encodes an isomorphic value', (assert: test.Assertions) => {
            assert.equal(
                Sut.IsoCalendarDateString.encode('1973-01-30' as Sut.IsoCalendarDateString),
                '1973-01-30',
            )
        }),
    ]),
])
