import axios from 'axios';
import moment from 'moment'

moment.locale('ms-my')
const Profile = (props) => {
    const [profile, setProfile] = React.useState(null)
    const [dateRemaining, setDateRemaining] = React.useState(null)
    React.useEffect( ()=> {
        axios.get(`https://onewoorks-solutions.com/membership/public/person-and-point-card/${props.person_id}`)
        .then((response)=> {
            setProfile(response.data)
            let date_end = moment(response.data.m_lastdate).utc()
            let date_start = moment(response.data.tarikh_daftar).utc()
            let diff = moment.duration((date_end).diff(date_start))
            setDateRemaining(`(${parseInt(diff.asMonths())} bulan lagi)`)
        })
    },[props])

    return (
        <div className="card mb-2">
            <div className="card-header">Profile Membership</div>
            <table className="table table-borderless table-sm">
                <tbody>
                    <tr>
                        <th>Nama</th>
                        <td>{ (profile !== null) ? profile.full_name : null }</td>
                        <th className="text-center">Mata Terkumpul</th>
                    </tr>
                    <tr>
                        <th>No Telefon</th>
                        <td>{(profile !== null) ? profile.contact_no : null}</td>
                        <td 
                            rowSpan="3"
                            className="text-center"
                            style={{verticalAlign: 'middle'}}>
                                <div className="big-number" >{ (profile !== null) ? (profile.collected*0.01).toFixed(0): 0}</div>
                            </td>
                    </tr>
                    <tr>
                        <th>Tarikh Daftar</th>
                        <td>{ (profile !== null) ? moment(profile.tarikh_daftar).utc().format('DD MMMM YYYY') : null}</td>
                        
                    </tr>
                    <tr>
                        <th>Cawangan Daftar</th>
                        <td>{ (profile !== null) ? profile.domain_daftar.replace('-', ' ') : null }</td>
                    </tr>
                    <tr>
                        <th>Tarikh Luput Ahli</th>
                        <td>{ (profile !== null) ? moment(profile.m_lastdate).utc().format('DD MMMM YYYY')  + ' ' + dateRemaining : null} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile