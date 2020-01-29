// # Assertion Utilities

// ## Dependencies

// ### @typed
import * as assert from 'assert'

// ### fp-ts
import * as either from 'fp-ts/lib/Either'

// ### io-ts
import * as t from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'

export function success<T>(result: t.Validation<T>, expected?: T): void {
    if (either.isRight(result) && expected !== undefined) {
        assert.deepStrictEqual(result.right, expected)
    } else if (either.isLeft(result)) {
        throw new Error(`${result} is not a right.`)
    }
}

export function failure(codec: t.Any, value: unknown, errors: string[]): void {
    const result = codec.decode(value)
    if (either.isLeft(result)) {
        assert.deepStrictEqual(PathReporter.report(result), errors)
    } else {
        throw new Error(`${result} is not a left.`)
    }
}
