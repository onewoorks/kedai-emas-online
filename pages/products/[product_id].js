import { useRouter } from 'next/router'
import ProductRelatedProducts from '../../components/products/related_products'
import { PhotoPlaceholder } from 'react-placeholder-image';

const ProductId = () => {
    const router = useRouter().query
    let product_id = router.product_id

    const ProductItem = () => {
        return (
            <div className="card" style={{ height: 480}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-7">
                            <PhotoPlaceholder height={440} width={600} />
                        </div>
                        <div className="col-lg-5">
                            detail
                            <div>Product {product_id}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ProductItem />

            <ProductRelatedProducts />
        </div>
    )
}

export default ProductId
