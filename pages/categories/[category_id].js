import { useRouter } from 'next/router'
import ProductSingleItem from '../../components/products/single_item'
import CategorySubCategory from '../../components/kategori/sub_category'

const CategoryId = () => {
    const router = useRouter().query
    const category_id = router.category_id

    const products = [
        { code: 1, name: 'item A' },
        { code: 2, name: 'item B' },
        { code: 3, name: 'item C' },
        { code: 4, name: 'item D' },
        { code: 5, name: 'item E' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
        { code: 6, name: 'item F' },
    ]

    return (
        <div>
            <h1>Category Id {category_id}</h1>
            
            <CategorySubCategory />

            <div className="mt-5">
                <h1>Produk Dalam Kategori Ini</h1>
            </div>
            
            <div class="row">
                {products.map((x, index) => {
                    return (
                        <div key={index} className="col-lg-3">
                            <ProductSingleItem item={x} delay={index} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryId
