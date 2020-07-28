import axios from 'axios'
import moment from 'moment'

moment.locale("ms-my")
const PointLog = () => {
    const [pointLog, setPointLog] = React.useState([])
    React.useEffect(()=>{
        axios.get(`https://onewoorks-solutions.com/membership/public/person/point-log/ariffin-kemaman/9420`)
        .then((response) => {
            setPointLog(response.data)
        })
    },[])

    const dataRow = () => {
        
        return (
            pointLog.map((value, key) => {
                return (
                    <tr key={key}>
                        <td>{key+1}</td>
                        <td>{moment(value.tarikh).utc().format('DD MMMM yyyy')}</td>
                        <td>{value.perkara}</td>
                        <td className="text-center">{value.domain.replace('-',' ').toUpperCase()}</td>
                        <td className="text-center">{value.type}</td>
                        <td className="text-center">{(value.mata_ganjaran*0.01).toFixed(0)}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div>

            <table className="table table-bordered table-hover table-sm">
                <thead className='thead-dark'>
                    <tr>
                        <th>No</th>
                        <th>Tarikh Dan Masa</th>
                        <th>Perkara</th>
                        <th className="text-center">Cawangan</th>
                        <th className="text-center">Transaksi</th>
                        <th className="text-center">Jumlah Mata</th>
                    </tr>
                </thead>
                <tbody>
                    { dataRow() }
                </tbody>
            </table>
        </div>
    )
}

export default PointLog