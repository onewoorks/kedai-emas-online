import Link from 'next/link'

const Menu = () => {
    const [menuList, setMenuList] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8000/spe/rujukan/kategori-kumpulan')
        .then((response) => response.json())
        .then((data) => setMenuList(data))
    }, [])

    const LinkItem = (props) => {
        let menu = props.data
        return (
            <li className="nav-item">
                <Link href={`/categories/${menu.id}`}>
                    <a className="nav-link active" href="#">
                        {menu.category_name}
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
