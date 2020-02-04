// # Positive Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Integer } from './integer'
import { Positive } from './positive'

export const PositiveInteger = t.intersection([Integer, Positive])

export type PositiveInteger = t.TypeOf<typeof PositiveInteger>
