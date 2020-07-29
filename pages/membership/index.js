import Link from 'next/link'
const Index = () => {
    const [cardNo, setCardNo] = React.useState(null)

    const checkMembership = (e) => {
        e.preventDefault()
        window.location.href = `/membership/${cardNo}`
    }
    return (
        <div className="container" onSubmit={checkMembership}>
            <form>
                <div className="input-group">
                    <input type='text' className="form-control" name="card_no"
                     onKeyUp={(e) => setCardNo(e.target.value)}
                     autoComplete="off"
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
export default Index