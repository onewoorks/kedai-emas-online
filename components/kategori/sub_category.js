import Link from 'next/link'
import { useRouter }  from 'next/router'
import { PhotoPlaceholder } from 'react-placeholder-image'

const CategorySubCategory = () => {
    const [subCategory, setSubCategory] = React.useState([])
    const router = useRouter().query
    const category_id = router.category_id
    console.log(category_id)

    React.useState(() => {
        fetch(`http://localhost:8000/spe/rujukan/kategori-kumpulan/1`)
            .then((response) => response.json())
            .then((data) => {
                setSubCategory(data[0].child)
                })
    }, [])


    return (
        <div className="row">
            {subCategory.map((x, index) => (
                <div className="col-lg-4 mt-3">
                    <Link href={`/categories/${x.id}`}>
                    <div className="card">
                        <div className="card-img-top" style={{ overflow: 'hidden' }}>
                            <PhotoPlaceholder
                            width={400}
                            height={200}
                            key={index}
                        />
                        </div>
                        <div className="card-footer text-uppercase text-center">{x.category_name}</div>
                    </div>
                    </Link>
                </div>
                
            ))}
        </div>
    )
}

export default CategorySubCategory
