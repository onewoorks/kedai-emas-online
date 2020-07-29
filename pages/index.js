import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div>Content
        </div>
      </main>

      <footer className={styles.footer}>
          Developed by{' '}
          <a style={{paddingRight:5, paddingLeft:5}} href="https://onewoorks-solutions.com">Onewoorks Solutions</a>{' '}
          for Kedai Emas Ariffin
      </footer>
    </div>
  )
}
