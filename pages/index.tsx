import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const Home: NextPage = () => {
  const [user, setUser] = useState("");
  const [adultAge, setAdultAge] = useState(false);
  console.log(user)
  return (
    <div className={styles.container}>
      <Head>
        <title>Beverage Guide</title>
        <meta name="description" content="Beverage Guide using openbrewerydb" />
      </Head>

      <main className={styles.main}>

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(user);
        console.log(adultAge);
      }}>

        <p className={styles.text}>Please, enter your full name below</p>
        <p className={styles.text}>Only alphabetical characters are accepted</p>

        <input className={styles.input}
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Full Name"
        />

        <label className={styles.text}>
          <input
            className={styles.checkbox}
            name="age"
            type="checkbox"
            checked={adultAge}
            onChange={(e) => setAdultAge(e.target.checked)} />
          Are you older than 18 years old?
        </label>

        <button className={styles.submitButton}>
          Enter
        </button>

      </form>
      </main>
      
    </div>
  )
}

export default Home
