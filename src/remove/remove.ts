import { List } from '../types'
import { RemoveArity3 } from './types'
import { curry3 } from '../curry'
import { equals } from '../equals'
import { greaterThanOrEqual } from '../greaterThanOrEqual'

const isZero = equals(0)

/**
 * Removes items from a `List`.
 * @name remove<A>(index: number, amount: number, list: List<A>): List<A>
 */
export const remove: RemoveArity3 = curry3(function remove<A>(
  index: number,
  amount: number,
  list: List<A>
): List<A> {
  const length = list.length

  if (isZero(amount) || isZero(length) || greaterThanOrEqual(length, index)) return list
  if (isZero(index) && amount >= length) return []

  const newList = Array(length - Math.abs(index) - 1)

  for (let i = 0; i < index; ++i) newList[i] = list[i]

  for (let i = index + amount; i < length; ++i) newList[i - amount] = list[i]

  return newList
})
