const SearchBox = () => {
    const [cardNo, setCardNo] = React.useState(null)

    const checkMembership = (e) => {
        e.preventDefault()
        window.location.href = `/membership/${cardNo}`
    }


    return (
        <div className="container" onSubmit={checkMembership}>
            <form className='d-flex justify-content-center'>
                <div className="input-group col-md-5 col-sm-12">
                    <input type='text' className="form-control text-center" name="card_no"
                     onKeyUp={(e) => setCardNo(e.target.value)}
                     autoComplete="off"
                     placeholder="No Telefon"
                     />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">
                            Carian
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SearchBox