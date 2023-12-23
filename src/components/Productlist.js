import React from "react";
import Product from "./Product";
const Productlist = ({productTable}) =>{

//console.log(productTable);
    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            {
            productTable.map((row) => {
                return(
                    <Product key={row.id} rowlist={row}/>

                )
            })
        }
        </table>

    )
}

export default Productlist;