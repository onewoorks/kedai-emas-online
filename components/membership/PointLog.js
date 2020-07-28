import axios from 'axios'

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
                console.log(value)
                return (
                    <tr key={key}>
                        <td>{key+1}</td>
                        <td>{value.tarikh}</td>
                        <td>{value.perkara}</td>
                        <td className="text-center">{value.type}</td>
                        <td className="text-center">{(value.mata_ganjaran*0.01).toFixed(0)}</td>
                    </tr>
                )
            })
            
        )
    }

    return (
        <div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tarikh Dan Masa</th>
                        <th>Perkara</th>
                        <th>Transaksi</th>
                        <th>Jumlah Mata</th>
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