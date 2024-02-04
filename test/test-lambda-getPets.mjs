'use strict'

import {handler} from '../getPets.mjs'
import {expect} from 'chai'
var event, context

describe('getPets', function () {
  it('verifies successful response', async () => {
    const result = await handler(event, context)

    expect(result).to.be.an('object')
    expect(result.statusCode).to.equal(200)
    expect(result.body).to.be.an('string')

    let response = JSON.parse(result.body)

    expect(response).to.be.an('array')
    expect(response[0]).to.deep.equal(
      {
        id: 1,
        type: 'dog',
        price: 249.99,
      },
      {
        id: 2,
        type: 'cat',
        price: 124.99,
      },
      {
        id: 3,
        type: 'fish',
        price: 0.99,
      },
    )
  })
})
