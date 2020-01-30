// # Nonpositive

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Zero } from './zero'
import { Negative } from './negative'

export const Nonpositive = t.union([Zero, Negative])

export type Nonpositive = t.TypeOf<typeof Nonpositive>
