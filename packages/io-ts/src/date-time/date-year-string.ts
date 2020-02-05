// # Date Year String

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface DateYearStringBrand {
    readonly DateYearString: unique symbol
}

/**
 * Decode, encode and validate an ISO 8601 date year format (YYYY) as defined in
 * RFC 3339.
 *
 * @example
 * import { DateYearString } from '@tsboost/io-ts/date-time'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(DateYearString.decode('1973'), right('1973'))
 * assert.deepStrictEqual(PathReporter.report(
 *     DateYearString.decode('20200')),
 *     ['Invalid value "20200" supplied to : DateYearString']
 * )
 *
 * @since 0.3.0
 */
export const DateYearString = t.brand(
    t.string,
    (s: string): s is t.Branded<string, DateYearStringBrand> => /^[0-9]{4}$/gi.test(s),
    'DateYearString',
)

export type DateYearString = t.TypeOf<typeof DateYearString>
