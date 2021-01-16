import ModuleSliders from '../components/modules/sliders.js'
import HargaEmas from '../components/modules/harga_emas'
import ModuleFilters from '../components/modules/filters'
import LatestProducts from '../components/products/latest_products'

export default function Home() {
    return (
        <div>
            <div className="container">
                <ModuleFilters styles="mb-3" />
                <ModuleSliders />
                    <div className="row mt-3">
                        <div className="col-lg-4">
                            <HargaEmas />
                        </div>
                        <div className="col-lg-8">
                            <div className="card" style={{ height: 334 }}>
                                <div className="card-body"></div>
                            </div>
                        </div>
                    </div>
                <LatestProducts />
            </div>
        </div>
    )
}
