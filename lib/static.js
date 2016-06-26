'use strict'

class Static {
  optionDefinitions () {
    return [
      {
        name: 'directory', alias: 'd', type: String, typeLabel: '[underline]{path}',
        description: 'Root directory, defaults to the current directory.'
      },
      {
        name: 'static.maxage', type: Number, description: 'Browser cache max-age in milliseconds.'
      },
      {
        name: 'static.defer', type: Boolean, description: 'If true, serves after `yield next`, allowing any downstream middleware to respond first.'
      }
    ]
  }
  middleware (options) {
    /* update global options */
    const directory = options.directory || process.cwd()
    options = {
      hidden: true,
      defer: options['static.defer'],
      maxage: options['static.maxage']
    }
    if (directory) {
      const serve = require('koa-static')
      return serve(directory, options)
    }
  }
}

module.exports = Static
