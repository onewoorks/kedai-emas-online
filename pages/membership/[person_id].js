import { useRouter} from 'next/router'
import Profile from '../../components/membership/Profile'
import PointLog from '../../components/membership/PointLog'

const Membership = () => {
    const router = useRouter().query
    let person_id = router.person_id
    return (
        <div className="container">
            <div className="row mt-5 pt-4">
                <div className="col-sm-12">
                 
                    <Profile person_id={person_id} />        
                </div>
                <div className="col-sm-12">
                    <PointLog person_id={person_id} />
                </div>
            </div>
        </div>
    )
}

export default Membership;
