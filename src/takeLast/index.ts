import { List } from '../types'
import { curry2 } from '../curry'
import { drop } from '../drop'

/**
 * Takes the last `n` values from a `List`.
 * @name takeLast<A>(n: number, list: List<A>): List<A>
 */
export const takeLast: TakeLast = curry2(<A>(n: number, list: List<A>) =>
  drop(n >= 0 ? list.length - n : 0, list)
)

export type TakeLast = {
  <A>(n: number, list: List<A>): List<A>
  <A>(n: number): (list: List<A>) => List<A>
}
