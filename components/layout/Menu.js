import Link from 'next/link'

const Menu = () => {
    const [menuList, setMenuList] = React.useState([])

    React.useEffect(() => {
        setMenuList([
            {
                label: 'Kategory A',
                href: '1',
            },
            {
                label: 'Kategory B',
                href: '2',
            },
            {
                label: 'Kategory C',
                href: '3',
            },
            { label: 'Kategory D', href: '4' },
        ])
    }, [])

    const LinkItem = (props) => {
        let menu = props.data
        return (
            <li className="nav-item">
                <Link href={`/categories/${menu.href}`}>
                    <a className="nav-link active" href="#">
                        {menu.label}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <ul className="nav justify-content-center mb-3">
            {menuList.map((x, index) => {
                return <LinkItem key={index} data={x} />
            })}
        </ul>
    )
}

export default Menu
