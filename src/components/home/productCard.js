import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/productCard.css"

function ProductCard({brand, name, img, specs, url}) {
    const [specsList,setSpesList] = useState([])
    useEffect(()=>{
        var specAuxList = []
        for(const key in specs)
            specAuxList.push(specs[key])
        setSpesList(specAuxList)

    },[specs])
  return (
    <Link to={url} className="productCardContainer productCardContainer--hover">
        <div className="productCardContainer__name">{brand + "/" + name}</div>
        <img className="productCardContainer__image" src={img}/>
        <ul className="productCardContainer__list">
            {
                specsList.map((spec)=>{
                    return <li id={spec}>{spec}</li>
                })
            }
        </ul>
    </Link>

  );
}

export default ProductCard;
