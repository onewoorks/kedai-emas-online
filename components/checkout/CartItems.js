import { PhotoPlaceholder } from 'react-placeholder-image'

import { GetLocalStorage } from '../../components/localstorage'

const CheckoutCartItems = () => {
    const [cartItem, setCartItem] = React.useState([])

    React.useEffect(() => {
        setCartItem(GetLocalStorage)
    }, [])

    let inCart = cartItem.length === 0 ? [] : cartItem.cart
    let total_upah = 0
    let total_belian = 0
    const TotalCheckout = () => {
        return (
            <tfoot>
                <tr>
                    <td colSpan={4}></td>
                    <th className="text-center">{ total_upah.toFixed(2) }</th>
                    <th className="text-center"></th>
                    <th></th>
                </tr>
            </tfoot>
        )
    }

    const Items = () => {
        let empty_rows = (
            <tr>
                <td colSpan="6">
                    <i>Tiada barang yang dipilih setakat ini</i>
                </td>
            </tr>
        )
        let rows = inCart.map((x, index) => {
            total_belian += parseFloat(0)
            total_upah += parseFloat(x.upah)
            return (
                <tr>
                    <td style={{ width:135}}><PhotoPlaceholder height={120} width={120} /></td>
                    <td>{x.name}</td>
                    <td className="text-center">{x.berat}</td>
                    <td className="text-center">{x.mutu} </td>
                    <td className="text-center">{x.upah} </td>
                    <td className="text-center"></td>
                    <th></th>
                </tr>
            )
        })
        return <tbody>{inCart.length === 0 ? empty_rows : rows}</tbody>
    }
    return (
        <div>
            <h1>Senarai Barang Belian</h1>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nama Barang</th>
                        <th>Berat</th>
                        <th>Mutu</th>
                        <th>Harga Upah</th>
                        <th>Harga Belian</th>
                        <th>Tindakan</th>
                    </tr>
                </thead>
                <Items />
                <TotalCheckout />
            </table>
        </div>
    )
}

export default CheckoutCartItems
