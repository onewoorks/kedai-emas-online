import { useRouter } from 'next/router'
import ProductDetail from '../../components/products/product_detail'
import ProductRelatedProducts from '../../components/products/related_products'

const ProductId = () => {
    const router = useRouter().query
    let product = {
        id: router.product_id
    }

    return (
        <div>
            <ProductDetail product_id={product} />
            <ProductRelatedProducts />
        </div>
    )
}

export default ProductId
