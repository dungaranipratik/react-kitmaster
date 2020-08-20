import React from "react";
import { Product } from "./Product";

const ProductGallary = ({ changeImage, images, selectedImg }) => {
  return (
    <div>
      <h1>Product Gallary</h1>
      {images.map((image, i) => {
        return (
          <Product
            key={i}
            img_url={image}
            clickHandler={() => changeImage(i)}
          />
        );
      })}
    </div>
  );
};
export default ProductGallary;
