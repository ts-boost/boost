// # Zero

// ## Dependecies

// ### io-ts
import * as t from 'io-ts'

// A unique brand for zero.
export interface ZeroBrand {
    readonly Zero: unique symbol
}

/**
 * @example
 * import { Zero } from '@tsboost/io-ts/numbers/zero'
 *
 * Zero.decode(0) // Either.right(0)
 */
export const Zero = t.brand(t.number, (x: number): x is t.Branded<number, ZeroBrand> => !x, 'Zero')

export type Zero = t.TypeOf<typeof Zero>
