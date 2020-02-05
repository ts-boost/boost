// # Partial Time String Codec

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface PartialTimeStringBrand {
    readonly PartialTimeString: unique symbol
}

/**
 * Decode, encode and validate an ISO 8601 calendar date format (YYYY-MM-DD) as
 * defined in RFC 3339.
 *
 * @example
 * import { PartialTimeString } from '@tsboost/io-ts/date-time'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(PartialTimeString.decode('23:59:59'), right('23:59:59'))
 * assert.deepStrictEqual(PartialTimeString.decode('23:59:59.999'), right('23:59:59.999'))
 * assert.deepStrictEqual(PathReporter.report(
 *     PartialTimeString.decode('12:69:00')),
 *     ['Invalid value "12:69:00" supplied to : PartialTimeString']
 * )
 *
 * @since 0.3.0
 */
export const PartialTimeString = t.brand(
    t.string,
    (s: string): s is t.Branded<string, PartialTimeStringBrand> =>
        /^(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]{3})?$/gi.test(s),
    'PartialTimeString',
)

export type PartialTimeString = t.TypeOf<typeof PartialTimeString>
