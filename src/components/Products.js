import React, {useState, useEffect} from "react"

import Productlist from "./Productlist"


const Products = () =>{
    const [data, setData] = useState([]);

    const fetchData = () =>{
        return fetch("http://localhost:4000/productsData")
        .then(response => {return response.json();
        })
        .then(d=>{setData(d)})
    }

    useEffect(() =>{
        fetchData();
    },[]);

    return(
        <>
          <h1>Products List</h1>
        <Productlist productTable={data}/>
        </>
      
    )
}

export default Products;