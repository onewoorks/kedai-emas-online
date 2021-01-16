import '../styles/globals.css'
import '../styles/spe.css'

import Head from 'next/head'

import { motion } from 'framer-motion'

import LayoutHeader from '../components/layout/Header'
import LayoutFooter from '../components/layout/Footer'

function MyApp({ Component, pageProps, router }) {
    return (
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{ 
            pageInitial: {
                opacity:0,
                y:100
            },
            pageAnimate: {
                opacity:1,
                y: 0,
                transition: {
                // //    ease: "easein",
                   duration: 1, 
                //    x: -10
                }
            }
        }}>
            <Head>
                <title>{ process.env.WEB_TITLE} </title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossorigin="anonymous"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
                ></link>
            </Head>
            <LayoutHeader />
            <div className="container mt-3">
                <Component {...pageProps} />
            </div>
            <LayoutFooter />
        </motion.div>
    )
}

export default MyApp
