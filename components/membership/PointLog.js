import axios from 'axios'
import moment from 'moment'

moment.locale('ms-my')

const PointLog = (props) => {
    const [pointLog, setPointLog] = React.useState([])
    React.useEffect(() => {
        axios
            .get(
                `https://onewoorks-solutions.com/membership/public/person-and-point-card/${props.person_id}`
            )
            .then((response) => {
                axios
                    .get(
                        `https://onewoorks-solutions.com/membership/public/person/point-log-card-no/ariffin-kemaman/${props.person_id}`
                    )
                    .then((resp) => {
                        setPointLog(resp.data)
                    })
            })
    }, [props])

    const dataRow = () => {
        if (pointLog.length === 0) {
            return (
                <tr>
                    <td colSpan="6">Tiada rekod transaksi setakat ini</td>
                </tr>
            )
        } else {
            return pointLog.map((value, key) => {
                return (
                    <tr key={key}>
                        <td>{key + 1}</td>
                        <td>
                            {moment(value.tarikh).utc().format('DD MMMM yyyy')}
                        </td>
                        <td>{value.perkara}</td>
                        <td className="text-center">
                            {value.domain.replace('-', ' ').toUpperCase()}
                        </td>
                        <td className="text-center">{value.type}</td>
                        <td className="text-center">
                            {((value.mata_ganjaran * 0.01)*100/100).toFixed(0)}
                        </td>
                    </tr>
                )
            })
        }
    }

    const WebView = () => {
        return (
            <table className="table table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>No</th>
                        <th>Tarikh Dan Masa</th>
                        <th>Perkara</th>
                        <th className="text-center">Cawangan</th>
                        <th className="text-center">Transaksi</th>
                        <th className="text-center">Jumlah Mata</th>
                    </tr>
                </thead>
                <tbody>{dataRow()}</tbody>
            </table>
        )
    }

    const MobileView = () => {
        if (pointLog.length === 0) {
            return  (
                <div className="card">
                    <div className="card-body text-center">Tiada rekod transaksi setakat ini</div>
                </div>)
        } else {
            return pointLog.map((value, key) => {
                return (
                    <div key={key} className="card mb-1">
                        <div className="card-body p-2">
                            <div className="row">
                                <div className="col-8 my-auto">
                                    <div style={{ fontSize: '0.9em' }}>
                                        {value.perkara}
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '0.7rem',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        {value.domain
                                            .replace('-', ' ')
                                            .toUpperCase()}
                                        ,{' '}
                                        {moment(value.tarikh)
                                            .utc()
                                            .format('DD MMMM yyyy')}
                                    </span>
                                </div>
                                <div className="col-4 text-center my-auto">
                                    <div style={{ fontSize: '0.9em' }}>
                                        {value.type}
                                    </div>
                                    <div className="text-center log-number">
                                        {(value.mata_ganjaran * 0.01).toFixed(
                                            0
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div>
            <MobileView />
        </div>
    )
}

export default PointLog
