import ExtraFilter from './extra_filter'

const ModuleFilters = (props) => {
    const [extraFilter, setExtraFilter] = React.useState(false)

    const showFilter = () => {
        setExtraFilter(!extraFilter)
    }

    const showExtraFilter = () => {
        return !extraFilter ? '' : <ExtraFilter />
    }

    return (
        <div className={props.styles}>
            <form action="">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Sila masukkan pilihan anda"
                    />
                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-search"></i>
                    </button>
                    <div className="btn btn-outline-secondary" onClick={showFilter}>
                        <i className="bi bi-funnel"></i>
                    </div>
                </div>
            </form>
            {showExtraFilter()}
        </div>
    )
}

export default ModuleFilters
