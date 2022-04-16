import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { FormEvent, useState } from 'react'
import { useObserver } from 'mobx-react'

import { getUserstore } from '../store/user'

const Home: NextPage = () => {
  const store = getUserstore();


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return useObserver(() => (
    <div className={styles.container}>
      <Head>
        <title>Beverage Guide</title>
        <meta name="description" content="Beverage Guide using openbrewerydb" />
      </Head>
      <main className={styles.main}>

        {store.name && <h1>{store.name}</h1>}

        <form onSubmit={handleSubmit}>

          <p className={styles.text}>Please, enter your full name below</p>
          <p className={styles.text}>Only alphabetical characters are accepted</p>

          <input className={styles.input}
            type="text"
            value={store.name}
            onChange={(e) => store.setName(e.target.value)}
            placeholder="Full Name"
          />

          <label className={styles.text}>
            <input
              className={styles.checkbox}
              name="age"
              type="checkbox"
              checked={store.legalAge}
              onChange={(e) => store.setLegalAge(e.target.checked)} />
            Are you older than 18 years old?
          </label>

          <input type="button" value="Enter" className={styles.text + " " + styles.submitButton}
            style={store.name && store.legalAge ? {
              background: '#5D5FEF'
            } : {}} />


        </form>
      </main>

    </div>
  ))
}

export default Home
