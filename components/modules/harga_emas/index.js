import React from 'react'
import Moment from 'react-moment'
import { Chart } from 'react-charts'

const HargaEmas = () => {
    const graphHarga = React.useMemo(
        () => [
            {
                label: 'Harga 916',
                data: [
                    [0, 1],
                    [1, 2],
                    [2, 4],
                    [3, 2],
                    [4, 7],
                ],
            },
            {
                label: 'Harga 999',
                data: [
                    [0, 3],
                    [1, 1],
                    [2, 5],
                    [3, 6],
                    [4, 4],
                ],
            },
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )

    const today = new Date().toISOString()
    return (
        <div>
            

            <div className="card">
                <div className="card-header text-center">
                    <strong>HARGA EMAS HARI INI</strong>
                    <div style={{ fontSize: '0.8em' }}>
                        <i>
                            Kemaskini Terakhir :{' '}
                            <Moment format={'DD/MM/YYYY'}>{today}</Moment>
                        </i>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="hargaemas table">
                        <tbody>
                            <tr>
                                <th className="text-center">999</th>
                                <td className="text-center">RM 257.00</td>
                            </tr>
                            <tr>
                                <th className="text-center">916</th>
                                <td className="text-center">RM 237.00</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="m-4"
                style={{
                    height: 150,
                }}
            >
                <Chart data={graphHarga} axes={axes} />
            </div>
                </div>
            </div>

            
        </div>
    )
}

export default HargaEmas
