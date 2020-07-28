import axios from 'axios';
import moment from 'moment'

moment.locale('ms-my')
const Profile = () => {
    const [profile, setProfile] = React.useState(null)
    const [dateRemaining, setDateRemaining] = React.useState(null)
    React.useEffect( ()=> {
        axios.get(`https://33xzpz14q6.execute-api.ap-southeast-1.amazonaws.com/production/person?id=9420`)
        .then((response)=> {
            console.log(response.data)
            setProfile(response.data)
            let date_end = moment(response.data.m_lastdate).utc()
            let date_start = moment(response.data.tarikh_daftar).utc()
            let diff = moment.duration((date_end).diff(date_start))
            setDateRemaining(`(${parseInt(diff.asMonths())} bulan lagi)`)
        })
    },[])

    return (
        <div className="card mb-2">
            <div className="card-header">Profile Membership</div>
            <table className="table table-borderless table-sm">
                <tbody>
                    <tr>
                        <th>Nama</th>
                        <td>{ (profile !== null) ? profile.full_name : null }</td>
                        <td rowSpan="2">
                        Mata Terkumpul
                        </td>
                    </tr>
                    <tr>
                        <th>Tarikh Daftar</th>
                        <td>{ (profile !== null) ? moment(profile.tarikh_daftar).utc().format('DD MMMM YYYY') : null}</td>
                    </tr>
                    <tr>
                        <th>Cawangan Daftar</th>
                        <td>{ (profile !== null) ? profile.domain_daftar : null }</td>
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