const main = require('../src/main.js')
const expect = require('chai').expect

describe('main', function () {
  it('should be an object with the randomColor function inside of it and a colors array', function () {
    expect(main).to.be.an('object')
    expect(main.randomColor).to.be.a('function')
    expect(main.colors).to.be.an('array')
  })

  describe('#randomColor', function () {
    it('should return a color when invoked', function () {
      const actual = main.randomColor(main.colors)
      expect(main.colors).to.include(actual)
    })

    it('should return different colors when invoked multiple times', function () {
      const actual = Array(99).fill(0)
        .map(() => main.randomColor(main.colors))
        .reduce((acc, color) => acc.includes(color) ? acc : acc.concat(color), [])

      expect(actual.length).to.be.above(1)
      expect(main.colors).to.include.members(actual)
    })
  })
})
