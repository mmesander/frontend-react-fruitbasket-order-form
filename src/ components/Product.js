import React from 'react';
import Button from "./Button";

function Product({image, productName, amountFruit, setAmountFruit}) {
    return (
        <div className="product">
            <img src={image} alt={productName}/>
            <h1>{productName}</h1>
            <Button
                buttonType="button"
                buttonClass="buttonProduct"
                handleClick={() => setAmountFruit(amountFruit + 1)}
            >
                +
            </Button>
            <p>{amountFruit}</p>
            <Button
                buttonType="button"
                buttonClass="buttonProduct"
                disableButton={amountFruit === 0}
                handleClick={() => setAmountFruit(amountFruit - 1)}
                // Hieronder staat een alternatief
                // handleClick={() => setAmountFruit(amountFruit === 0 ? 0 : amountFruit - 1)}
            >
                -
            </Button>


        </div>
    )
}

export default Product;