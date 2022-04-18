import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { FormEvent } from 'react'
import { Observer } from 'mobx-react'

import { getUserstore } from '../store/user'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const store = getUserstore();
  const router = useRouter()


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (store.name && store.legalAge) {
      router.push("/beverages");
    }
  }

  return <Observer>
    {() => (
      <div className={styles.container}>
        <main className={styles.main}>

          <form onSubmit={handleSubmit}>

            <div className={styles.formTop}>
              <p className={styles.text}>Please, enter your full name below</p>
              <p className={styles.text}>Only alphabetical characters are accepted</p>

              <input className={styles.input}
                type="text"
                value={store.name}
                onChange={(e) => store.setName(e.target.value)}
                placeholder="Full Name"
              />
            </div>

            <div className={styles.formBottom}>

              <div style={{ display: "block" }}>
                <input
                  className={styles.checkbox}
                  name="age"
                  type="checkbox"
                  checked={store.legalAge}
                  onChange={(e) => store.setLegalAge(e.target.checked)} />
                <span className={styles.text}>
                  Are you older than 18 years old?
                </span>
              </div>

              <button type="submit" className={styles.text + " " + styles.submitButton}
                style={store.name && store.legalAge ? {
                  background: '#5D5FEF'
                } : {
                  cursor: "not-allowed"
                }} >
                Enter
              </button>
            </div>
          </form>
        </main>
        <footer className={styles.footer}>
          <Image
            src="/bee.png"
            width={278}
            height={278}
            alt="Bee image"
          />
        </footer>

      </div>
    )}
  </Observer>
}

export default Home
