// # Full Date String

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface FullDateStringBrand {
    readonly FullDateString: unique symbol
}

/**
 * Decode, encode and validate an ISO 8601 calendar date format (YYYY-MM-DD) as
 * defined in RFC 3339.
 *
 * @example
 * import { FullDateString } from '@tsboost/io-ts/date-time'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(FullDateString.decode('1973-01-30'), right('1973-01-30'))
 * assert.deepStrictEqual(PathReporter.report(
 *     FullDateString.decode('2020-02-40')),
 *     ['Invalid value "2020-02-40" supplied to : FullDateString']
 * )
 *
 * @since 0.3.0
 */
export const FullDateString = t.brand(
    t.string,
    (s: string): s is t.Branded<string, FullDateStringBrand> =>
        /^([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$/gi.test(s),
    'FullDateString',
)

export type FullDateString = t.TypeOf<typeof FullDateString>
