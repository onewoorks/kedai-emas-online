import ModuleSliders from '../components/modules/sliders.js'
import HargaEmas from '../components/modules/harga_emas'
import LatestProducts from '../components/products/latest_product'

export default function Home() {
  return (
    <div >
      
      <div className="container" >
        <ModuleSliders />

        <div className="row mt-3">
          <div className="col-lg-4">
            <HargaEmas />
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                Col B
              </div>
            </div>
          </div>
        </div>
        <LatestProducts />
      </div>
      
    </div>
  )
}
