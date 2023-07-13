// React + Next
import Head from 'next/head';

// Pages
import Hero from './hero';

const Index = () => {
  return (
    <>
      <Head>
        <title>Cook&apos;s Assistant</title>
        <meta name="description"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero></Hero>
    </>
  )
}

export default Index;