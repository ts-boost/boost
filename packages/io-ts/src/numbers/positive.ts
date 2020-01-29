// # Positive

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// A unique brand for positive numbers.
export interface PositiveBrand {
    readonly Positive: unique symbol
}

/**
 * @example
 * import { Positive } from '@tsboost/io-ts/numbers/positive'
 *
 * Positive.decode(3.14) // right(3.14)
 */
export const Positive = t.brand(
    t.number,
    (n: number): n is t.Branded<number, PositiveBrand> => n > 0,
    'Positive',
)

export type Positive = t.TypeOf<typeof Positive>
