import '../styles/globals.css'
import '../styles/spe.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Kedai Emas Ariffin</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                />
            </Head>
            <nav className="navbar fixed-top navbar-light bg-dark border-bottom" >
                <a className="navbar-brand text-light" href="/">
                    Kedai Emas Ariffin
                </a>
            </nav>
            <div className="">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp
