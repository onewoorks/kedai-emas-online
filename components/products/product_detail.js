import { PhotoPlaceholder } from 'react-placeholder-image'
import { AppContext } from '../../pages/_app'
import { SetLocalStorage } from '../../components/localstorage'

const AddToCart = (state, action) => {
    if (action.type === 'add_item') {
        let state_cart = state.cart
        state_cart.push(action.data)
        let new_data = {
            ...state,
            count: state.count + 1,
            cart: state_cart,
        }
        SetLocalStorage(new_data)
        return new_data
    }
}

const ProductDetail = (props) => {
    const initialState = React.useContext(AppContext)

    const product_id = props.product_id
    let product = {
        id: product_id,
        name: 'Item Name',
        mutu: '916',
        berat: '10.21',
        upah: '21.00',
        panjang: '12.00', 
        lebar: '5.00',
        kategori: 'Rantai Tangan',
        sku: 'TEN088123-002-13131',
    }

    const [state, dispatch] = React.useReducer(AddToCart, initialState)

    return (
        <div className="card" style={{ height: 480 }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-7">
                        <PhotoPlaceholder height={440} width={600} />
                    </div>
                    <div className="col-lg-5">
                        <h2>{product.name}</h2>
                        <hr />
                        <div>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Kod Item</th>
                                        <td>{ product.sku} </td>
                                    </tr>
                                    <tr>
                                        <th>Kategori</th>
                                        <td>{ product.kategori}</td>
                                    </tr>
                                    <tr>
                                        <th>Berat</th>
                                        <td>{ product.berat } </td>
                                    </tr>
                                    <tr>
                                        <th>Ketulenan Emas</th>
                                        <td>{ product.mutu} </td>
                                    </tr>
                                    <tr>
                                        <th>Harga Upah</th>
                                        <td>{ product.upah} </td>
                                    </tr>
                                    <tr>
                                        <th>Panjang</th>
                                        <td> { product.panjang} </td>
                                    </tr>
                                    <tr>
                                        <th>Lebar</th>
                                        <td> {product.lebar}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="btn-group">
                            <div className="btn btn-outline-secondary mt-4">
                                <i className="bi bi-telegram"></i> Telegram
                            </div>

                            <div className="btn btn-outline-secondary mt-4">
                                <i className="bi bi-whatsapp"></i> Whatsapp
                            </div>

                            <div className="btn btn-outline-secondary mt-4">
                                <i className="bi bi-telephone-outbound"></i> 019 669 3481
                            </div>

                            <div
                                className="btn btn-primary mt-4"
                                onClick={() =>
                                    dispatch({
                                        type: 'add_item',
                                        data: product,
                                    })
                                }
                            >
                                 <i className="bi bi-bag-plus"></i> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
