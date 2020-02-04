// # Nonnegative Integer

// ## Dependencies

// ### io-ts
import * as t from 'io-ts'

// ### numbers
import { Integer } from './integer'
import { Nonnegative } from './nonnegative'

export const NonnegativeInteger = t.intersection([Integer, Nonnegative])

export type NonnegativeInteger = t.TypeOf<typeof NonnegativeInteger>
