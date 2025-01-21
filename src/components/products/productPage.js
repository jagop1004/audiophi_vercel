import React, {useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
//component
import MainImage from "../general/mainImage";
//css
import '../../css/productPage.css'
//static data
import products from '../../static_data/products.json'

function ProductPage() {
  const [productData, setProductData] = useState()
  const location = useLocation();

  useEffect(()=>{
    const data = Object.values(products).filter((product)=>location.pathname.includes(product.name))
    console.log(data[0])
    setProductData(data[0])
  },[location])
  const handleBuy = () => {
    alert("Conecting...")
  }
  return (
    <div className="productPageContainer">
        {
          productData?
          <>
            <MainImage imgSrc={productData.image}/>
            <div className="productPageContainer__nameAndBrandContainer">
              <div className="productPageContainer__nameAndBrandContainer__brand">{productData.brand}</div>
              <div className="productPageContainer__nameAndBrandContainer__name">{productData.name}</div>
            </div>
            <div className="productPageContainer__descriptionAndImageContainer">
              <img className="productPageContainer__descriptionAndImageContainer__image" src={productData.image}/>
              <div className="productPageContainer__descriptionAndImageContainer__description">{productData.description}</div>
            </div>
            <div className="productPageContainer__specsContainer">
              <div className="productPageContainer__specsContainer__title">SPECS</div>
              <ul>
                <li className="productPageContainer__specsContainer__listItem"><span>Impedance: </span>{productData.specs.impedance}</li>
                <li className="productPageContainer__specsContainer__listItem"><span>Frequency Response: </span>{productData.specs.frequency_response}</li>
                <li className="productPageContainer__specsContainer__listItem"><span>Type: </span>{productData.specs.type}</li>
                <li className="productPageContainer__specsContainer__listItem"><span>Drivers: </span>{productData.specs.drivers}</li>
              </ul>
            </div>
            <div className="productPageContainer__priceAndBuyContainer">
                <button className="productPageContainer__priceAndBuyContainer__buyButton productPageContainer__priceAndBuyContainer__buyButton--hover"
                  onClick={handleBuy}
                  >Buy Now! {productData.price}</button>
            </div>
          </>
          :<></>
        }
    </div>
  )
}

export default ProductPage;
