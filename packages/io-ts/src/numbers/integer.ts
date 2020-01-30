// # Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

export interface IntegerBrand {
    readonly Integer: unique symbol
}

export const Integer = t.brand(
    t.number,
    (x: number): x is t.Branded<number, IntegerBrand> => Number.isInteger(x),
    'Integer',
)

export type Integer = t.TypeOf<typeof Integer>
