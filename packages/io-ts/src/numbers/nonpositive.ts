// # Nonpositive

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Zero } from './zero'
import { Negative } from './negative'

/**
 * Decode, encode and validate a nonpositive number.
 *
 * @example
 * import { Nonpositive } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(Nonpositive.decode(0), right(0))
 * assert.deepStrictEqual(Nonpositive.decode(-3.14), right(-3.14))
 * assert.deepStrictEqual(PathReporter.report(
 *     Nonpositive.decode(9.63)),
 *     [
 *         'Invalid value 9.63 supplied to : (Zero | Negative)/0: Zero',
 *         'Invalid value 9.63 supplied to : (Zero | Negative)/1: Negative'
 *     ]
 * )
 *
 * @since 0.2.0
 */
export const Nonpositive = t.union([Zero, Negative])

export type Nonpositive = t.TypeOf<typeof Nonpositive>
