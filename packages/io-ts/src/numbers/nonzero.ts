// # Nonzero

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Positive } from './positive'
import { Negative } from './negative'

export const Nonzero = t.union([Positive, Negative])

export type Nonzero = t.TypeOf<typeof Nonzero>
