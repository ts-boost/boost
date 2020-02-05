// # Iso Date

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface IsoCalendarDateStringBrand {
    readonly IsoCalendarDateString: unique symbol
}

/**
 * Decode, encode and validate an ISO 8601 calendar date format (YYYY-MM-DD) as
 * defined in RFC 3339.
 *
 * @example
 * import { IsoCalendarDateString } from '@tsboost/io-ts'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(IsoCalendarDateString.decode('1973-01-30'), right('1973-01-30'))
 * assert.deepStrictEqual(PathReporter.report(
 *     IsoCalendarDateString.decode('2020-02-40')),
 *     ['Invalid value "2020-02-40" supplied to : IsoCalendarDateString']
 * )
 *
 * @since 0.3.0
 */
export const IsoCalendarDateString = t.brand(
    t.string,
    (s: string): s is t.Branded<string, IsoCalendarDateStringBrand> =>
        /^([0-9]{4})-?(1[0-2]|0[1-9])-?(3[01]|0[1-9]|[12][0-9])$/gi.test(s),
    'IsoCalendarDateString',
)

export type IsoCalendarDateString = t.TypeOf<typeof IsoCalendarDateString>
