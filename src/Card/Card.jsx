import PropTypes from 'prop-types';
import './Card.css'

const Card = ({product, handleCartBtn}) => {

    const {image, title, price}= product;
    return (

        <div className='carts-main'>
            <div className='product-img'>
                <img src={image} alt={title} />
            </div>
            <div className='product-title'>
                <h2>{title}</h2>
            </div>
            <div className='main-cost-and-btn'>
                <div className='price-stuff'>
                    <p><span>Price:</span></p>
                    <p><span>${price}</span></p>
                </div>
                <div className='cart-btn'>
                    <button onClick={()=> handleCartBtn(product)}> <i className="material-icons">shopping_cart</i></button>
                </div>
            </div>
        </div>

    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired,
    handleCartBtn: PropTypes.func.isRequired
}

export default Card;