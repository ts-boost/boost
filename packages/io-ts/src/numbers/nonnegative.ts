// # Nonnegative

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Zero } from './zero'
import { Positive } from './positive'

export const Nonnegative = t.union([Zero, Positive])

export type Nonnegative = t.TypeOf<typeof Nonnegative>
