import React from 'react';
import LayoutHeader from '../../components/layout/Header'

const Products = () => {
    const [categories, setCategories] = React.useState([])

    React.useEffect(()=>{
        setCategories([{
            "product_name" : "",
            "measurement" : "",
            "price":"",
            "attributes":""
        }])
    },[])

    return (
        <div>
            <LayoutHeader />
            <div className="container">
                <div>All Categories</div>
                <div className="row">
                    { categories.map((value, key)=> (
                        <div className="col">
                        <div className="card">
                            <div className="card-body">Body 1</div>
                        </div>
                    </div>    
                    ))}
                    
                </div>
            </div>
        </div>

    )
}

export default Products