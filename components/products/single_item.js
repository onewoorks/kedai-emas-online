import Link  from 'next/link';
import { PhotoPlaceholder } from 'react-placeholder-image';

const ProductSingleItem = (props) => {
    let item = props.item
    let min = Math.ceil(10);
    let max = Math.floor(10000);
    const harga_item = Math.floor(Math.random() * (max - min + 1) + min).toFixed(2);
    return (
        <Link href={`/products/${item.code}`}>
            <div className="card mt-3">
                <div className="card-img-top" style={{overflow: 'hidden'}}>
                <PhotoPlaceholder width={300} height={200}/>
                </div>
            
                <div className="card-footer text-center">
                {item.name}
                <div className="row" style={{fontStyle:'italic',fontSize:'0.9em'}}>
                    <div className="col-6">{ Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1) + Math.ceil(1)).toFixed(2)} g</div>
                    <div className="col-6">RM {harga_item}</div>
                </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductSingleItem
