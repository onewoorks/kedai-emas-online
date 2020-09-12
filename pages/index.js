import Head from 'next/head'
import styles from '../styles/Home.module.css'

import SearchBox from '../components/membership/SearchBox'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Membership</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="d-flex justify-content-center">
          <img style={{width: 200, height:200}}
          src="data:image/png;base64,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" />
        </div>

        <div className="d-flex justify-content-center mt-4 text-uppercase text-center">
        <h2>Membership CheckPoint</h2>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <SearchBox />
        </div>
        
      </div>
    </div>
  )
}
