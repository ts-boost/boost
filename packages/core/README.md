# `@ts-boost/core`

> A collection of core types and rules with minimal dependencies.

## Get It

```shell
npm install --save @ts-boost/core

yarn add @ts-boost/core
```

## Usage

```typescript
import { ALPHA } '@ts-boost/core'

// Ensure that value is A-Z / a-z.
const value: ALPHA = 'X'   // success
const value: ALPHA = 't'   // success
const value: ALPHA = 'foo' // error
const value: ALPHA = 42    // error
const value: ALPHA = '42'  // error
const value: ALPHA = null  // error
```
