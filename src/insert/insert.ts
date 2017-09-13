import { InsertArity3 } from './types'
import { List } from '../types'
import { curry3 } from '../curry'

/**
 * Inserts a value into a `List`. at a given index.
 * @name insert<A>(index: number, value: A, list: List<A>): List<A>
 */
export const insert: InsertArity3 = curry3(function insert<A>(
  index: number,
  value: A,
  list: List<A>
): List<A> {
  const length = list.length

  if (index < 0) return list

  if (length === 0) return [value]

  const newList = []
  let i = 0

  for (; i < index; ++i) newList[i] = list[i]

  newList[i++] = value

  for (; i <= length; ++i) newList[i] = list[i - 1]

  return newList
})
