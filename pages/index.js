import Head from 'next/head'
import styles from '../styles/Home.module.css'

import SearchBox from '../components/membership/Searchbox'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Membership</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="d-flex justify-content-center">
          <img style={{width: 200}}
          src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/60890947_2590796167617113_90393092892393472_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=6b7ckHoGeK4AX9r65cf&_nc_ht=scontent-sin6-2.xx&oh=ac132fcff13cb03e68dbbfb109414546&oe=5F489E60" />
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
