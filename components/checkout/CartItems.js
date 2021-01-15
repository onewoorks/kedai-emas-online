const CheckoutCartItems = () => {

    const Items = () => {
        let inCart = []
        let empty_rows = 
            <tr>
                <td colSpan="5"><i>Tiada barang yang dipilih setakat ini</i></td>
            </tr>
        let rows = 
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        
        return (
            <tbody>
                { inCart.length === 0 ? empty_rows : rows}
            </tbody>
        )
    }
    return (
        <div>
            <h1>Senarai Barang Belian</h1>
            <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nama Barang</th>
                        <th>Berat</th>
                        <th>Mutu</th>
                        <th>Harga</th>
                        <th>Harga Upah</th>
                    </tr>
                </thead>
                <Items />
            </table>
        </div>
    )
}

export default CheckoutCartItems