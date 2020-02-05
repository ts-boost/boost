// # Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface IntegerBrand {
    readonly Integer: unique symbol
}

/**
 * Decode, encode and validate an integer.
 *
 * @example
 * import { Integer } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(Integer.decode(-42), right(-42))
 * assert.deepStrictEqual(Integer.decode(0), right(0))
 * assert.deepStrictEqual(Integer.decode(117), right(117))
 * assert.deepStrictEqual(PathReporter.report(
 *     Integer.decode(3.14)),
 *     ['Invalid value 3.14 supplied to : Integer']
 * )
 *
 * @since 0.2.0
 */
export const Integer = t.brand(
    t.number,
    (x: number): x is t.Branded<number, IntegerBrand> => Number.isInteger(x),
    'Integer',
)

export type Integer = t.TypeOf<typeof Integer>
