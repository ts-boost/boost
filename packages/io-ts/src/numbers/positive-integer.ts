// # Positive Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Integer } from './integer'
import { Positive } from './positive'

/**
 * Decode, encode and validate a positive integer.
 *
 * @example
 * import { PositiveInteger } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(PositiveInteger.decode(42), right(42))
 * assert.deepStrictEqual(PathReporter.report(
 *     PositiveInteger.decode(-7)),
 *     ['Invalid value -7 supplied to : (Integer & Positive)/1: Positive']
 * )
 *
 * @since 0.2.0
 */
export const PositiveInteger = t.intersection([Integer, Positive])

export type PositiveInteger = t.TypeOf<typeof PositiveInteger>
