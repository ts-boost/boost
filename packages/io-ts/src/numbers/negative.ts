// # Negative

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface NegativeBrand {
    readonly Negative: unique symbol
}

/**
 * Decode, encode and validate a negative number.
 *
 * @example
 * import { Negative } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(Negative.decode(-3.14), right(-3.14))
 * assert.deepStrictEqual(PathReporter.report(
 *     Negative.decode(9.5)),
 *     ['Invalid value 9.5 supplied to : Negative']
 * )
 *
 * @since 0.2.0
 */
export const Negative = t.brand(
    t.number,
    (x: number): x is t.Branded<number, NegativeBrand> => x < 0,
    'Negative',
)

export type Negative = t.TypeOf<typeof Negative>
