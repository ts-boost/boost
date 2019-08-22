// # Unit Tests for `noop`

// ## Dependencies

// ### @typed/test
import { describe, it } from '@typed/test'

// ### noop
import { noop } from './noop'

export const t = describe('noop', [
    it('does nothing', ({ equal }) => {
        equal(undefined, noop())
    }),
    it('accepts multiple arguments', ({ equal }) => {
        const argsList = [['a'], ['a', 42], ['a', 42, {}], ['a', 42, { foo: 'bar' }, [1, 2, 3]]]
        argsList.map((...args) => equal(undefined, noop(...args)))
    }),
])
