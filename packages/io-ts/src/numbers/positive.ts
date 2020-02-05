// # Positive

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// A unique brand for positive numbers.
export interface PositiveBrand {
    readonly Positive: unique symbol
}

/**
 * Decode, encode and validate a positive number.
 *
 * @example
 * import { Positive } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(Positive.decode(3.14), right(3.14))
 * assert.deepStrictEqual(PathReporter.report(
 *     Positive.decode(-9.5)),
 *     ['Invalid value -9.5 supplied to : Positive']
 * )
 * assert.deepStrictEqual(PathReporter.report(
 *     Positive.decode(0)),
 *     ['Invalid value 0 supplied to : Positive']
 * )
 *
 * @since 0.2.0
 */
export const Positive = t.brand(
    t.number,
    (n: number): n is t.Branded<number, PositiveBrand> => n > 0,
    'Positive',
)

export type Positive = t.TypeOf<typeof Positive>
