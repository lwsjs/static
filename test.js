const Feature = require('../')
const TestRunner = require('test-runner')

const runner = new TestRunner()

runner.test('basic', function () {
  const feature = new Feature()
  feature.optionDefinitions()
  feature.middleware()
  feature.middleware({ directory: '.' })
})
