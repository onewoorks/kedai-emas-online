import Menu from './Menu'

const LayoutHeader = () => {
    return (
        <div>
            <nav class="navbar sticky-top navbar-light bg-light">
                <a class="navbar-brand" href="#">Title Web</a>
            </nav>


            <div className="text-center mt-3" style={{height:90}}>logo

            </div>

            <Menu />
        </div>
    )
}

export default LayoutHeader