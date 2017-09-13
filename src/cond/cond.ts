import { Cond, Conditional } from './types'
import { Maybe, Nothing } from '../Maybe'

import { List } from '../types'
import { arrayFrom } from '../arrayFrom'
import { curry2 } from '../curry'

/**
 * Returns the value of an applied `Conditional`. If no `Conditional` is matched
 * then `Nothing` is returned.
 * @name cond<A, B>(conditionals: List<Condition<A, B>>, value: A): Maybe<B>
 */
export const cond: Cond = curry2(__cond)

function __cond<A, B>(conditionals: List<Conditional<A, B>>, value: A): Maybe<B> {
  for (const [predicate, f] of arrayFrom(conditionals))
    if (predicate(value)) return Maybe.of(f(value))

  return Nothing
}
