// # Negative

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface NegativeBrand {
    readonly Negative: unique symbol
}

export const Negative = t.brand(
    t.number,
    (x: number): x is t.Branded<number, NegativeBrand> => x < 0,
    'Negative',
)

export type Negative = t.TypeOf<typeof Negative>
