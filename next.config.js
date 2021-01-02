const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass(withCSS({
  webpack: (config, options) => {
    config.resolve.alias['@'] = __dirname

    return config
  },
}))