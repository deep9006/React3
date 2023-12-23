import React from "react";

const Product = ({rowlist}) => {
const {id, name, quantity, price} = rowlist;
//console.log(rowlist);
    return(
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>
        </tbody>
    )
}

export default Product;