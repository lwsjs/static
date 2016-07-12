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
  middleware (options) {
    const directory = options['static.root'] || process.cwd()
    options = {
      hidden: true,
      defer: options['static.defer'],
      maxage: options['static.maxage'],
      index: options['static.index']
    }
    if (directory) {
      const serve = require('koa-static')
      this.directory = directory
      this.options = options
      return serve(directory, options)
    }
  }
  serverUp () {
    return [
      { a: 'Static root', b: this.directory },
      { a: 'Static options', b: JSON.stringify(this.options) }
    ]
  }
}

module.exports = Static
