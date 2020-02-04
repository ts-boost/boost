// # Negative Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Integer } from './integer'
import { Negative } from './negative'

export const NegativeInteger = t.intersection([Integer, Negative])

export type NegativeInteger = t.TypeOf<typeof NegativeInteger>
