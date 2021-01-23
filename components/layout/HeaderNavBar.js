import Link from 'next/link'
import { GetLocalStorage } from '../localstorage'

const HeaderNavBar = () => {
    const [cart, setCart] = React.useState(null)

    React.useEffect(()=>{
        let apps_data = GetLocalStorage()
        if (typeof apps_data !== 'undefined')
            setCart(apps_data.cart)
    },[])

    return (
        <nav className="navbar sticky-top ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Kedai Online
                </a>
                <div>
                    <ul className="list-inline">
                        <Link href="/about">
                            <li className="list-inline-item">
                                <i className="bi bi-shop"></i>
                            </li>
                        </Link>

                        <Link href={`/membership/login`}>
                            <li className="list-inline-item">
                                <i className="bi bi-person-circle"></i>
                            </li>
                        </Link>
                        <Link href={`/membership/like`}>
                            <li className="list-inline-item">
                                <i className="bi bi-heart"></i>
                            </li>
                        </Link>
                        <Link href={`/checkout/carts`}>
                            <li className="list-inline-item">
                                <i className="bi bi-bag-check"></i>
                                { cart === null ? '' : (
                                    <span
                                    className="badge rounded-pill bg-primary"
                                    style={{
                                        position: 'absolute',
                                        fontSize: '10px',
                                        top: '15px',
                                        right: '15px',
                                    }}
                                >{cart.length}</span>
                                ) }
                                
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNavBar
