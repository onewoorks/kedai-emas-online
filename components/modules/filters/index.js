const ModuleFilters = (props) => {
    
    return (
        <div className={props.styles}>
            <form action="">
                <div className="input-group">
                <input type="text"  className="form-control" 
                placeholder="Sila masukkan pilihan anda" />
                <button className="btn btn-outline-secondary">
                    <i className="bi bi-search"></i>
                </button>
                </div>
                
            </form>
        </div>
    )
}

export default ModuleFilters