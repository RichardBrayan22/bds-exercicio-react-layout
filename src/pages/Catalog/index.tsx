
import NavBar from '../../components/NavBar'
import ProductCard from '../../components/ProductCard';
import SearchCard from '../../components/SearchCard';
import './styles.css'

const Catalog = () => {
    return(
        <>
        <NavBar />
        
        <div className=" container my-4">
        
        <SearchCard/>        
        
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
        </>
    );
}


export default Catalog;