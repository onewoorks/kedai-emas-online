import Link from 'next/link'

const HeaderNavBar = () => {
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

                        <Link href={`/checkout/carts`}>
                        <li className="list-inline-item">
                            <i className="bi bi-bag-check"></i>
                        </li>
                        </Link>
                        
                        <Link href={`/membership/login`}>
                            <li className="list-inline-item">
                                <i className="bi bi-person-circle"></i>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNavBar
