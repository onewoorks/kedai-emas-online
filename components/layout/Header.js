import Menu from './Menu'
import { useRouter } from 'next/router'

import HeaderNavBar from './HeaderNavBar'

const LayoutHeader = () => {
    const router = useRouter()

    const MenuShow = () => {
        let menuShow = true
        switch (router.pathname){
            case '/membership/login':
                menuShow = false
                break;
            default:
                break;
        }
        return menuShow ? <Menu /> : <></>
    }

    return (
        <div>
            <HeaderNavBar />
            <div className="text-center mt-3" style={{ height: 90 }}>
                logo
                <div style={{fontStyle:'italic'}}>{ process.env.KEDAI }</div>
            </div>
            <MenuShow />
        </div>
    )
}

export default LayoutHeader