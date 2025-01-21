import React, {useEffect, useState} from "react";
//components
import ProductCard from "../home/productCard";
import FilterTab from "./filterTab";
//stati data
import  products from "../../static_data/products.json"
//css
import "../../css/allProducts.css"

function AllProducts() {
  const [filterdProducts, setFilterdProducts] = useState(products)
  const [noProducts, setNoProducts] = useState(false)
  const oldProducts = products

  const [selectedBrand, setSelectedBrand] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([])
  const [selectedImpedance, setSelectedImpedance] = useState([])
  const [selectedFrequecy, setSelectedFrequency] = useState([])
  const [selectedType, setSelectedType] = useState([])
  const [selectedDrive, setSelectedDrve] = useState([])

  const changeBrand = (e) =>{
    if(e.target.checked)
      setSelectedBrand((old)=> [...old,e.target.name])
    else
      setSelectedBrand((old)=> old.filter((value)=> value !== e.target.name))
  }
  const changePrice = (e) =>{
    if(e.target.checked)
      setSelectedPrice((old)=> [...old,e.target.name])
    else
      setSelectedPrice((old)=> old.filter((value)=> value !== e.target.name))
  }
  const changeImpedance = (e) =>{
    if(e.target.checked)
      setSelectedImpedance((old)=> [...old,e.target.name])
    else
      setSelectedImpedance((old)=> old.filter((value)=> value !== e.target.name))
  }
  const changeFreqResponse = (e) =>{
    if(e.target.checked)
      setSelectedFrequency((old)=> [...old,e.target.name])
    else
      setSelectedFrequency((old)=> old.filter((value)=> value !== e.target.name))
  }
  const changeTypes = (e) =>{
    if(e.target.checked)
      setSelectedType((old)=> [...old,e.target.name])
    else
      setSelectedType((old)=> old.filter((value)=> value !== e.target.name))
  }
  const changeDrives = (e) =>{
    if(e.target.checked)
      setSelectedDrve((old)=> [...old,e.target.name])
    else
      setSelectedDrve((old)=> old.filter((value)=> value !== e.target.name))
  }

  useEffect(()=>{
    const newProducts = oldProducts.filter((product)=> selectedBrand.includes(product.brand))
    setFilterdProducts(newProducts)
  },[selectedBrand])

  useEffect(()=>{
      const newProducts = oldProducts.filter((product)=>selectedPrice.includes(product.price))
      setFilterdProducts(newProducts)
  },[selectedPrice])

  useEffect(()=>{
      const newProducts = oldProducts.filter((product)=>selectedImpedance.includes(product.specs.impedance))
      setFilterdProducts(newProducts)
  },[selectedImpedance])
  useEffect(()=>{
      const newProducts = oldProducts.filter((product)=> selectedFrequecy.includes(product.specs.frequency_response))
      setFilterdProducts(newProducts)
  },[selectedFrequecy])
  useEffect(()=>{
      const newProducts = oldProducts.filter((product)=>selectedType.includes(product.specs.type))
      setFilterdProducts(newProducts)
  },[selectedType])
  useEffect(()=>{
      const newProducts = oldProducts.filter((product)=> selectedDrive.includes(product.specs.drivers))
      setFilterdProducts(newProducts)
  },[selectedDrive])
  const filterBySearch = (value) =>{
    const newProducts = oldProducts.filter((product)=>product.brand.toLowerCase().includes(value.toLowerCase()) || product.name.toLowerCase().includes(value.toLowerCase()))
    if(newProducts.length === 0)
      setNoProducts(true)
    else
      setNoProducts(true)
    setFilterdProducts(newProducts)
  }
  return (
    <div className="productsContainer">
      <FilterTab 
        changeBrand={changeBrand}
        changePrice={changePrice}
        changeImpedance={changeImpedance}
        changeFreqResponse={changeFreqResponse}
        changeTypes={changeTypes}
        changeDrives={changeDrives}
        search={filterBySearch}
      />
      <div className="productsContainer__allProducts">
        {
          filterdProducts.length > 0 ?
          filterdProducts.map((product)=>{
            return <ProductCard 
              key={product.name}
              brand={product.brand}
              name={product.name}
              img={product.image}
              specs={product.specs}
              url={"/products/"+product.name}
            />
          }):
            !noProducts?
            oldProducts.map((product)=>{
              return <ProductCard 
              key={product.name}
              brand={product.brand}
              name={product.name}
              img={product.image}
              specs={product.specs}
              url={"/products/"+product.name}
              />
            }): <div className="productsContainer__allProducts__noProducts">No Products Found</div>
        }
      </div>
    </div>
  );
}

export default AllProducts;
