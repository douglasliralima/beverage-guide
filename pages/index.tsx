import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beverage Guide</title>
        <meta name="description" content="Beverage Guide using openbrewerydb" />
      </Head>

      <main className={styles.main}>
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}

export default Home
