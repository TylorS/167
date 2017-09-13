import { Maybe, fromJust, isNothing, toMaybe } from '@typed/Maybe'

import { Lens } from './types'
import { curry2 } from '../curry'

/**
 * Given a getter and a setter function,
 * it returns a Lens.
 * @name lens<A, B>(getter: (a: A) => B | void, setter: (value: B, a: A) => A): Lens<A, B>
 */
export const lens: LensFn = curry2(__lens)

function __lens<A, B>(getter: (a: A) => B | void, setter: (value: B, a: A) => A): Lens<A, B> {
  function updateAt(f: (value: Maybe<B>) => Maybe<B>, a: A): A {
    const value = f(view(a))

    if (isNothing(value)) return a

    return setter(fromJust(value), a)
  }

  function view(a: A): Maybe<B> {
    return toMaybe(getter(a))
  }

  return { view, updateAt }
}

export type LensFn = {
  <A, B>(getter: (a: A) => B, setter: (value: B, a: A) => A): Lens<A, B>
  <A, B>(getter: (a: A) => B): (setter: (value: B, a: A) => A) => Lens<A, B>
}
