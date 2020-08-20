import React , {useState} from 'react';
import {BigProduct} from "./Product";
import ProductGallary from "./ProductGallary";

var imgArry = [
    'img/hero-1.jpg',
    'img/hero-2.jpg',
    'img/hero-3.jpg',
    'img/hero-4.jpg',
    'img/hero-5.jpg',
]

const ProductContainer = () => {
    const [selected,setselected] = useState(0)

   const changeImage = (i) => {
        setselected(i)
    }

    return (
        <div className="container main_product">
            <div className="product_large">
                <BigProduct img_url={imgArry[selected]}  />
            </div>
            <div className="product_small">
                <ProductGallary changeImage={changeImage} images={imgArry} selectedImg={selected}/>
            </div>
        </div>
    );
};

export default ProductContainer;