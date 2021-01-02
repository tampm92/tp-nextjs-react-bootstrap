import React from "react"
import App from 'next/app'
import Head from 'next/head'

import LayoutDefault from '@/layouts/default'

import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/css/animate.min.css'
import '@/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
// import '@/assets/css/demo.css'
import '@/assets/css/pe-icon-7-stroke.css'

// import '@/assets/styles/globals.scss'

export default class MyApp extends App {
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
          <title>TP NextJS React-Bootstrap</title>
          <link
            href="//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            href="//fonts.googleapis.com/css?family=Roboto:400,700,300"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}