// # Nonnegative

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Zero } from './zero'
import { Positive } from './positive'

/**
 * Decode, encode and validate a nonnegative number.
 *
 * @example
 * import { Nonnegative } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(Nonnegative.decode(0), right(0))
 * assert.deepStrictEqual(Nonnegative.decode(42.61), right(42.61))
 * assert.deepStrictEqual(PathReporter.report(
 *     Nonnegative.decode(-7)),
 *     [
 *         'Invalid value -7 supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/0: Zero',
 *         'Invalid value -7 supplied to : (Integer & (Zero | Positive))/1: (Zero | Positive)/1: Positive'
 *     ]
 * )
 *
 * @since 0.2.0
 */
export const Nonnegative = t.union([Zero, Positive])

export type Nonnegative = t.TypeOf<typeof Nonnegative>
