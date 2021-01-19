# Setup

## Referents

- [ReactJS](https://reactjs.org/)
- [NextJS Basic Setup](https://nextjs.org/learn/basics/create-nextjs-app)
- [React Chartjs](http://reactchartjs.github.io/react-chartjs-2/)
- [React Toastify](https://github.com/fkhadra/react-toastify)

https://colinhacks.com/essays/nextjs-firebase-authentication

## Create a Next.js App

```bash
npx create-next-app
# or
yarn create next-app
```

## Libs

```bash
yarn add @zeit/next-css @zeit/next-sass bootstrap react-bootstrap
```

## Setup base

Create jsconfig.json with content

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules", "out"]
}
```

Create next.config.js with content

```js
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass(withCSS({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    
    config.resolve.alias['@'] = __dirname

    return config
  },
}))
```

Update `pages/_app.js`

```jsx
import React from "react"
import App from 'next/app'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/sass/globals.scss'

import LayoutDefault from '@/layouts/default'

class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
=========================================================
* TP NextJS React-Bootstrap
=========================================================

* Website: https://tampm.com
=========================================================
    `)
    document.insertBefore(comment, document.documentElement)
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const Layout = Component.layout || LayoutDefault

    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <title>TP NextJS React-Bootstrap</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}

export default MyApp
```

## Run App
```bash
yarn
yarn dev
```
