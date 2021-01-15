import ProductSingleItem from './single_item'

const ProductRelatedProducts = () => {
    const products = [
        { code: 1, name: 'item A' },
        { code: 2, name: 'item B' },
        { code: 3, name: 'item C' },
        { code: 4, name: 'item D' },
        { code: 5, name: 'item E' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
    ]

    return (
        <>
            <h1 className="text-center">Produk Berkaitan</h1>
            <div className="row">
                {products.map((x, index) => {
                    return (
                        <div key={index} className="col-lg-3">
                            <ProductSingleItem item={x} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductRelatedProducts
