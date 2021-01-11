const LatestProducts = () => {
    const products = [
        { name: 'item A'},
        { name: 'item B'},
        { name: 'item C'},
        { name: 'item D'},
        { name: 'item E'},
        { name: 'item F'}
    ]
    const item = (item_info) => {
        return (
            <div className="card mt-3" style={{height:280}}>
                <div className="card-body">
                    {item_info.name}
                </div>
            </div>
        )
    }

    return (
        <div className="row" >
            {products.map((x)=>{
                return (
                    <div className="col-lg-4">{item(x)}</div>
                )
            })}
            
        </div>
    )
}

export default LatestProducts