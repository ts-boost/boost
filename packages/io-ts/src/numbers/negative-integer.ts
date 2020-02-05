// # Negative Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Integer } from './integer'
import { Negative } from './negative'

/**
 * Decode, encode and validate a negative integer.
 *
 * @example
 * import { NegativeInteger } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(NegativeInteger.decode(-42), right(-42))
 * assert.deepStrictEqual(PathReporter.report(
 *     NegativeInteger.decode(42)),
 *     ['Invalid value 42 supplied to : (Integer & Negative)/1: Negative']
 * )
 *
 * @since 0.2.0
 */
export const NegativeInteger = t.intersection([Integer, Negative])

export type NegativeInteger = t.TypeOf<typeof NegativeInteger>
