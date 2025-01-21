import React, {useEffect, useState} from "react";
import useGetCounter from "../customHooks/useGetCounter";
import { Link } from "react-router-dom";
//static data
import products from "../../static_data/products.json"

//component
import ProductCard from "./productCard";

//css
import "../../css/featuredProducts.css"

function FeaturedProducts() {
    const [firstProduct, setFirstProduct] = useState({})
    const [secondProduct, setSecndProduct] = useState({})
    const [thirdProduct, setThirdProduct] = useState({})
    const [count, setCount] = useState(1)
    const hookData = useGetCounter(2)
    useEffect(()=>{
        setFirstProduct(products.filter(product => product.id === count)[0])
        if(count < 19){
            setSecndProduct(products.filter(product => product.id === count+1)[0])
            setThirdProduct(products.filter(product => product.id === count+2)[0])
        }
        else if(count === 19) {
            setSecndProduct(products.filter(product => product.id === count+1)[0])
            setThirdProduct(products.filter(product => product.id === 1)[0])
        }
        else if(count === 20) {
            setSecndProduct(products.filter(product => product.id === 1)[0])
            setThirdProduct(products.filter(product => product.id === 2)[0])
        }
    },[count])
  return (
    <div className="featuredProductExternalContainer">
        <div className="featuredProductExternalContainer__featuredProductContainer">
            <button
                onClick={()=>{
                    hookData.reduce()
                    setCount(hookData.count)
                }}
                className="featuredProductExternalContainer__featuredProductContainer__button featuredProductExternalContainer__featuredProductContainer__button--hover material-icons">
                arrow_back_ios
            </button>
            {
                firstProduct?
                <div className="featuredProductExternalContainer__featuredProductContainer__productsContainer">
                    <ProductCard
                        brand={firstProduct.brand}
                        name={firstProduct.name}
                        img={firstProduct.image}
                        specs={firstProduct.specs}
                        url={"/products/"+firstProduct.name}
                    />
                    <ProductCard
                        brand={secondProduct.brand}
                        name={secondProduct.name}
                        img={secondProduct.image}
                        specs={secondProduct.specs}
                        url={"/products/"+secondProduct.name}
                    />
                    <ProductCard
                        brand={thirdProduct.brand}
                        name={thirdProduct.name}
                        img={thirdProduct.image}
                        specs={thirdProduct.specs}
                        url={"/products/"+thirdProduct.name}
                    />
                </div>
                    :
                    <></>
            }
            <button
                onClick={()=>{
                    hookData.add()
                    setCount(hookData.count)
                }}
                className="featuredProductExternalContainer__featuredProductContainer__button featuredProductExternalContainer__featuredProductContainer__button--hover material-icons">
                arrow_forward_ios
            </button>

        </div>
        <Link to="/products" className="featuredProductExternalContainer__allProductsButton featuredProductExternalContainer__allProductsButton--hover">
            ALL PRODUCTS
        </Link>
    </div>
  );
}

export default FeaturedProducts;
