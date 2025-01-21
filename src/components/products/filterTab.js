import React, {useState, useEffect} from "react";
//components
import FilterTabItem from "./filterTabItem";
//css
import "../../css/filterTab.css"
//static data
import products from "../../static_data/products.json"

function FilterTab({changeBrand,changePrice,changeImpedance,changeFreqResponse,changeTypes,changeDrives,search}){
    const [brands, setBrands] = useState([{}])
    const [prices, setPices] = useState([{}])
    const [impedances, setImpedances] = useState([{}])
    const [freqResponses, setFreqResponses] = useState([{}])
    const [types, setTypes] = useState([{}])
    const [drives, setDrivers] = useState([{}])

    const [showBrands, setShowBrands] = useState(false)
    const [showPrice, setShowPrices] = useState(false)
    const [showImp, setShowImp] = useState(false)
    const [showFreqResp, setShowFreqResp] = useState(false)
    const [showTypes, setShowTypes] = useState(false)
    const [showDrives, setShowDrives] = useState(false)

    useEffect(()=>{
        const filteredBrands = []
        const filteredPrices = []
        const filteredImpedances = []
        const filteredFreqResponses = []
        const filteredTypes = []
        const filteredDrives = []

        products.forEach((product)=>{
            if(!filteredBrands.find((brand)=> brand.value === product.brand))
                filteredBrands.push({"id":product.id,"value":product.brand})
            if(!filteredPrices.find((price)=> price.value === product.price))
                filteredPrices.push({"id":product.id,"value":product.price})
            if(!filteredImpedances.find((imp)=> imp.value === product.specs.impedance))
                filteredImpedances.push({"id":product.id,"value":product.specs.impedance})
            if(!filteredFreqResponses.find((freq)=> freq.value === product.specs.frequency_response))
                filteredFreqResponses.push({"id":product.id,"value":product.specs.frequency_response})
            if(!filteredTypes.find((type)=> type.value === product.specs.type))
                filteredTypes.push({"id":product.id,"value":product.specs.type})
            if(!filteredDrives.find((drivers)=> drivers.value === product.specs.drivers))
                filteredDrives.push({"id":product.id,"value":product.specs.drivers})
        })

        setBrands(filteredBrands)
        setPices(filteredPrices)
        setImpedances(filteredImpedances)
        setFreqResponses(filteredFreqResponses)
        setTypes(filteredTypes)
        setDrivers(filteredDrives)
    },[])
    const handleInput = (e)=>{
        setShowBrands(false)
        setShowPrices(false)
        setShowImp(false)
        setShowFreqResp(false)
        setShowTypes(false)
        setShowDrives(false)
        search(e.target.value)
    }
    return(
        <div className="filterTabContainer" >
            <input className="filterTabContainer__searchbar" type="text" placeholder="Search" onChange={handleInput}/>
            <div className="filterTabContainer__itemsCotainer filterTabContainer__itemsCotainer--hover">
                <div className="filterTabContainer__itemsCotainer__title"
                 onClick={()=>{
                    setShowBrands(!showBrands)
                    setShowPrices(false)
                    setShowImp(false)
                    setShowFreqResp(false)
                    setShowTypes(false)
                    setShowDrives(false)
                }}>Brand</div>
                {
                    showBrands?
                    brands.map((brand)=>{
                        return <FilterTabItem 
                            key={brand.value}
                            name={brand.value}
                            onclick={changeBrand}
                        />
                    }):<></>
                }
            </div>
            <div className="filterTabContainer__itemsCotainer filterTabContainer__itemsCotainer--hover">
                <div className="filterTabContainer__itemsCotainer__title"
                onClick={()=>{
                    setShowBrands(false)
                    setShowPrices(!showPrice)
                    setShowImp(false)
                    setShowFreqResp(false)
                    setShowTypes(false)
                    setShowDrives(false)
                }}>Price</div>
                {
                    showPrice?
                    prices.map((price)=>{
                        return <FilterTabItem 
                            key={price.value}
                            name={price.value}
                            onclick={changePrice}
                        />
                    }):<></>
                }
            </div>
            <div className="filterTabContainer__itemsCotainer filterTabContainer__itemsCotainer--hover">
                <div className="filterTabContainer__itemsCotainer__title"
                onClick={()=>{
                    setShowBrands(false)
                    setShowPrices(false)
                    setShowImp(!showImp)
                    setShowFreqResp(false)
                    setShowTypes(false)
                    setShowDrives(false)
                }}>Impedance</div>
                {
                    showImp?
                    impedances.map((impedance)=>{
                        return <FilterTabItem 
                            key={impedance.value}
                            name={impedance.value}
                            onclick={changeImpedance}
                        />
                    }):<></>
                }
            </div>
            <div className="filterTabContainer__itemsCotainer filterTabContainer__itemsCotainer--hover">
                <div className="filterTabContainer__itemsCotainer__title"
                onClick={()=>{
                    setShowBrands(false)
                    setShowPrices(false)
                    setShowImp(false)
                    setShowFreqResp(!showFreqResp)
                    setShowTypes(false)
                    setShowDrives(false)
                }}>Frequency Response</div>
                {
                    showFreqResp?
                    freqResponses.map((reqResp)=>{
                        return <FilterTabItem 
                            key={reqResp.value}
                            name={reqResp.value}
                            onclick={changeFreqResponse}
                        />
                    }):<></>
                }
            </div>
            <div className="filterTabContainer__itemsCotainer filterTabContainer__itemsCotainer--hover">
                <div className="filterTabContainer__itemsCotainer__title"
                onClick={()=>{
                    setShowBrands(false)
                    setShowPrices(false)
                    setShowImp(false)
                    setShowFreqResp(false)
                    setShowTypes(!showTypes)
                    setShowDrives(false)
                }}>Type</div>
                {
                    showTypes?
                    types.map((type)=>{
                        return <FilterTabItem 
                            key={type.value}
                            name={type.value}
                            onclick={changeTypes}
                        />
                    }):<></>
                }
            </div>
            <div className="filterTabContainer__itemsCotainer filterTabContainer__itemsCotainer--hover">
                <div className="filterTabContainer__itemsCotainer__title"
                onClick={()=>{
                    setShowBrands(false)
                    setShowPrices(false)
                    setShowImp(false)
                    setShowFreqResp(false)
                    setShowTypes(false)
                    setShowDrives(!showDrives)
                }}>Drivers</div>
                {
                    showDrives?
                    drives.map((drive)=>{
                        return <FilterTabItem 
                            key={drive.value}
                            name={drive.value}
                            onclick={changeDrives}
                        />
                    }):<></>
                }
            </div>
            <button className="filterTabContainer__buttonClear filterTabContainer__buttonClear--hover" onClick={()=>window.location.reload()}>Clear</button>
        </div>
    )
}
export default FilterTab