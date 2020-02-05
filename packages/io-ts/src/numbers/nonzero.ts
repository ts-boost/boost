// # Nonzero

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Positive } from './positive'
import { Negative } from './negative'

/**
 * Decode, encode and validate a nonzero number.
 *
 * @example
 * import { Nonzero } from '@tsboost/io-ts/numbers'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(Nonzero.decode(3.14), right(3.14))
 * assert.deepStrictEqual(Nonzero.decode(-6.283), right(6.283))
 * assert.deepStrictEqual(PathReporter.report(
 *     Nonzero.decode(0)),
 *     [
 *         'Invalid value 0 supplied to : (Positive | Negative)/0: Positive',
 *         'Invalid value 0 supplied to : (Positive | Negative)/1: Negative'
 *     ]
 * )
 *
 * @since 0.2.0
 */
export const Nonzero = t.union([Positive, Negative])

export type Nonzero = t.TypeOf<typeof Nonzero>
