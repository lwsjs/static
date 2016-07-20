'use strict'

class Static {
  optionDefinitions () {
    return [
      {
        name: 'static.root', alias: 'd', type: String, typeLabel: '[underline]{path}',
        description: 'Root directory, defaults to the current directory.'
      },
      {
        name: 'static.maxage', type: Number, description: 'Browser cache max-age in milliseconds.'
      },
      {
        name: 'static.defer', type: Boolean, description: 'If true, serves after `yield next`, allowing any downstream middleware to respond first.'
      },
      {
        name: 'static.index', type: String, typeLabel: '[underline]{path}',
        description: 'Default file name, defaults to `index.html`.'
      }
    ]
  }
  middleware (options, localWebServer) {
    const directory = options['static.root'] || process.cwd()
    const staticOptions = { hidden: true }
    if (options['static.defer']) staticOptions.defer = options['static.defer']
    if (options['static.maxage']) staticOptions.maxage = options['static.maxage']
    if (options['static.index']) staticOptions.index = options['static.index']
    if (directory) {
      const serve = require('koa-static')
      this.config = Object.assign(staticOptions, { 'root': directory })
      return serve(directory, staticOptions)
    }
  }
}

module.exports = Static
