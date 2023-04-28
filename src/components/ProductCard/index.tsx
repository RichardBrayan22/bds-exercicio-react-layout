import './styles.css'

import ProductImg from '../../assets/images/card-car-catalog.png';
import ButtonComprar from '../ButtonComprar';


const ProductCard = () => {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commod </p>
                <ButtonComprar/>
            </div>
        </div>
    );
}

export default ProductCard;