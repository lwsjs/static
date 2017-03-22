'use strict'
const EventEmitter = require('events')

class Static extends EventEmitter {
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
      },
      {
        name: 'static.index', type: String, typeLabel: '[underline]{path}',
        description: 'Default file name, defaults to `index.html`.'
      }
    ]
  }
  middleware (options) {
    const directory = options.directory || process.cwd()
    const staticOptions = { hidden: true }
    if (options['static.defer']) staticOptions.defer = options['static.defer']
    if (options['static.maxage']) staticOptions.maxage = options['static.maxage']
    if (options['static.index']) staticOptions.index = options['static.index']
    if (directory) {
      const serve = require('koa-static')
      staticOptions.root = directory
      this.emit('start', staticOptions)
      return serve(directory, staticOptions)
    }
  }
}

module.exports = Static
