import { useRouter} from 'next/router'

const ProductId = () => {
    const router = useRouter().query
    let product_id = router.product_id

    
    return (
        <div>Product {product_id}</div>
    )
}

export default ProductId