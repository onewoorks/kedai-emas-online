import '../styles/globals.css'
import '../styles/spe.css'

import Head from 'next/head'
import LayoutHeader from '../components/layout/Header'
import LayoutFooter from '../components/layout/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Kedai Emas Online</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
            </Head>
            <LayoutHeader />
            <div className="container mt-3">
                <Component {...pageProps} />
            </div>
            <LayoutFooter />
        </>
    )
}

export default MyApp
