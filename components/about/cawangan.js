import parse from 'html-react-parser'

const AboutCawangan = () => {
    let senaraiCawangan = [
        {
            cawangan: 'cawangan A',
            alamat: [
                "alamat line 1",
                "alamat line 2",
                "alamat line 3"
            ],
            contact_no: '019222333',
            social: {
                facebook: 'fb',
            },
            images: [],
        },
        {
            cawangan: 'cawangan A',
            alamat: ['alamat cawangan A'],
            contact_no: '019222333',
            social: {
                facebook: 'fb',
            },
            images: [],
        },
    ]
    const Cawangan = (props) => {
        let info = props.info
        return (
            <div className="card mt-4" style={{ height: 300 }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-7">Gambor</div>
                        <div className="col-lg-5">
                            <CawanganDetail info={info} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const CawanganDetail = (props) => {
        let info = props.info
        var alamat = ""
        info.alamat.map((x) => {
            alamat += `<div>${x}</div>`
        })

        
        return (
            <div>
                <h2 className="text-uppercase">{info.cawangan}</h2>
                <div>
                    <ul className="list-unstyled">
                        <li>
                            { parse(alamat) }
                        </li>
                        <li>
                            <ul className="list-inline mt-2">
                                <li className="list-inline-item">
                                    <i className="bi bi-telephone"></i><span style={{marginLeft:8}}>{ info.contact_no }</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <>
            {senaraiCawangan.map((x, index) => {
                return <Cawangan key={index} info={x} />
            })}
        </>
    )
}

export default AboutCawangan
