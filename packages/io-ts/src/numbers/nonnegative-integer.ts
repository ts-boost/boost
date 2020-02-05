// # Nonnegative Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Integer } from './integer'
import { Nonnegative } from './nonnegative'

/**
 * Decode, encode and validate a nonnegative integer.
 *
 * @example
 * import { NonnegativeInteger } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(NonnegativeInteger.decode(0), right(0))
 * assert.deepStrictEqual(NonnegativeInteger.decode(42), right(42))
 * assert.deepStrictEqual(PathReporter.report(
 *     NonnegativeInteger.decode(-7)),
 *     [
 *         'Invalid value -7 supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
 *         'Invalid value -7 supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive'
 *     ]
 * )
 *
 * @since 0.2.0
 */
export const NonnegativeInteger = t.intersection([Integer, Nonnegative])

export type NonnegativeInteger = t.TypeOf<typeof NonnegativeInteger>
