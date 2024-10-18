import PropTypes from 'prop-types';
import { useState } from 'react';
import './Products.css'
import { useEffect } from 'react';
import Card from '../Card/Card'

const Products = ({handleCartBtn}) => {
    const [products, setProducts]= useState([])

    useEffect(()=>{
        fetch('fakeDatas.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div className='products-container'>
            {
                products.map((product)=> <Card
                product={product}
                handleCartBtn={handleCartBtn}
                key={product.id}></Card>)
            }
        </div>
    );
};

Products.propTypes = {
    handleCartBtn: PropTypes.func.isRequired
}

export default Products;