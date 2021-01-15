import { useRouter} from 'next/router'

const CategoryId = () => {
    const router = useRouter().query 
    const category_id = router.category_id

    return (
        <div>Category Id { category_id }</div>
    )
}

export default CategoryId