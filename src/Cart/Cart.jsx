import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='carts-container'>
            <div className='table-wrapper'>
                <table className='table'>
                    <thead>
                        <tr className='table-title'>
                            <th>No</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-main'>
                        {
                            cart.map((iteam, index)=> (
                                <tr key={iteam.id}>
                                    <td>{index + 1}</td>
                                    <td>{iteam.title.slice(0, 10)}</td>
                                    <td>${iteam.price}</td>
                                    <td><button>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}


export default Cart;