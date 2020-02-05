// # Zero

// ## Dependecies

// ### io-ts
import * as t from 'io-ts'

// A unique brand for zero.
export interface ZeroBrand {
    readonly Zero: unique symbol
}

/**
 * Decode, encode and validate a zero.
 *
 * @example
 * import { Zero } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(Zero.decode(0), right(0))
 * assert.deepStrictEqual(PathReporter.report(
 *     Zero.decode(-9.5)),
 *     ['Invalid value -9.5 supplied to : Zero']
 * )
 * assert.deepStrictEqual(PathReporter.report(
 *     Zero.decode(3.14)),
 *     ['Invalid value3.14 supplied to : Zero']
 * )
 *
 * @since 0.2.0
 */
export const Zero = t.brand(t.number, (x: number): x is t.Branded<number, ZeroBrand> => !x, 'Zero')

export type Zero = t.TypeOf<typeof Zero>
