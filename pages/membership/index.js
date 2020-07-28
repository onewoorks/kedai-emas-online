import Head from 'next/head'
import axios from 'axios'

import Profile from '../../components/membership/Profile'
import PointLog from '../../components/membership/PointLog'

const Membership = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center"><h1>Membership Info</h1></div>
            </div>
            <div className="row">
                <div className="col-4 col-sm-12">
                    <Profile />        
                </div>
                <div className="col-8 col-sm-12">
                    <PointLog />
                </div>
            </div>
        </div>
    )
}

export default Membership;