import * as assert from 'assert'

import { remove } from './remove'

describe('remove', () => {
  describe('int -> int -> [a]', () => {
    it('-> [a]', () => {
      assert.deepEqual(remove(2, 3, [ 1, 2, 3, 4, 5, 6, 7, 8 ]), [ 1, 2, 6, 7, 8 ])
      assert.deepEqual(remove(2, 100, [ 1, 2, 3, 4 ]), [ 1, 2 ])
    })
  })
})
