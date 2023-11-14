import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Joy Thomas Foundation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
