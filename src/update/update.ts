import { List } from '../types'
import { UpdateArity3 } from './types'
import { arrayFrom } from '../__internal__'
import { curry3 } from '../curry'

/**
 * Updates the value of an array
 * @name update<A>(index: number, value: A, list: Li)
 */
export const update: UpdateArity3 = curry3(function update<A>(
  index: number,
  value: A,
  list: List<A>
): List<A> {
  const length = list.length
  const newList = arrayFrom(list)

  if (length === 0 || index < 0 || index >= length) return newList

  newList[index] = value

  return newList
})
