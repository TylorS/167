import { List } from '../types'
import { arrayFrom } from '../arrayFrom'
import { curry2 } from '../curry'
import { filter } from '../filter'

/**
 * Returns a list without the specified values.
 * @name without<A>(values: List<A>, list: List<A>): List<A>
 */
export const without: Without = curry2(__without)

export type Without = {
  <A>(values: List<A>, list: List<A>): List<A>
  <A>(values: List<A>): (list: List<A>) => List<A>
}

function __without<A>(values: List<A>, list: List<A>): List<A> {
  const set = new Set(arrayFrom(values))

  return filter(x => !set.has(x), list)
}
