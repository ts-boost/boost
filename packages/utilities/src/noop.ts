/*!
 * Copyright © 2019-present Frederik Krautwald.
 * Distributed under the MIT License.
 * (See accompanying file LICENSE or copy at
 * https://github.com/ts-boost/boost/wiki/License)
 */

// # No-Op Utility Function

/**
 * This function does absolutely nothing. You can pass any amount of arguments,
 * it still does absolutely nothing. In fact, `noop` is just an alias for
 * `Function.prototype`, but where `Function.prototype` is of type `Function`,
 * `noop` is of type `(...args: unknown[]) => void`.
 */
export const noop = Function.prototype as (...args: unknown[]) => void
