import React from 'react';

export const Product = (props) => {
    return (
            <button onClick={props.clickHandler}>
                <img src={props.img_url} />
            </button>
    );
};

export const BigProduct = (props) => {
    return (
        <div>
            <img src={props.img_url} alt="Big product"/>
        </div>
    );
};
