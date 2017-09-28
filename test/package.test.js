const pkg = require('../package')
const expect = require('chai').expect

describe('package.json', function () {
  it('should include mocha as a developer dependency', function () {
    const actual = pkg.devDependencies
    expect(actual, 'You must install the packages as developer dependencies').to.be.ok
    expect(actual.mocha, 'You must install mocha as a developer dependency').to.be.ok
  })

  it('should include chai as a developer dependency', function () {
    const actual = pkg.devDependencies
    expect(actual, 'You must install the packages as developer dependencies').to.be.ok
    expect(actual.chai, 'You must install chai as a developer dependency').to.be.ok
  })

  it('should have an npm test script that runs mocha', function () {
    const actual = pkg.scripts
    expect(actual, 'You must use the scripts key in package.json').to.be.ok
    expect(actual.test, 'You must have a test script').to.be.ok

    const expected = 'mocha'
    expect(actual.test, 'Your test script should run the mocha command').to.equal(expected)
  })
})
