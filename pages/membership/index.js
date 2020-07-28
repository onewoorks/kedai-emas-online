import Head from 'next/head'
import axios from 'axios'

import PointLog from '../../components/membership/PointLog'

const Membership = () => {
    const getMembershipSummary = () => {
        // axios.get(`https://33xzpz14q6.execute-api.ap-southeast-1.amazonaws.com/production/person?id=9420`)
        // .then((response)=> {
        //     console.log(response.data)
        // })
    }
    
    getMembershipSummary()

    return (
        <div className="container">
            <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
            </Head>
            Membership page

            <PointLog />
        </div>
    )
}

export default Membership;