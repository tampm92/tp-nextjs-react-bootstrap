yarn add react-bootstrap bootstrap

yarn add @zeit/next-sass @zeit/next-css

const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass(withCSS({
  webpack: (config, options) => {
    config.resolve.alias['@'] = __dirname

    return config
  },
}))

https://github.com/fkhadra/react-toastify
https://github.com/igorprado/react-notification-system