import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";

const CurrencyConvertor = () => {
//https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
const[currencies , setcurrencies] = useState([])
const[amount , setamount] = useState(1)
const[Fromcurrency , setFromcurrency] = useState("USD")
const[tocurrency , settocurrency] = useState("INR")
const[convertedAmount , setconvertedAmount] = useState(null)
const[converting , setconverting] = useState(false)


const fetchCurrencies = async() => {
    try {
        const res = await fetch("https://api.frankfurter.app/currencies")
        const data = await res.json()
        setcurrencies(Object.keys(data))
    } catch (error) {
        console.log("Error Fetching", error);
    }
}

useEffect(() => {
fetchCurrencies()
}, [])

console.log(currencies);

const CurrencyConvertor = async() => {
    if(!amount) return
    setconverting(true)
try {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${Fromcurrency}&to=${tocurrency}`)
    const data = await res.json()
    setconvertedAmount(data.rates[tocurrency] + " " + tocurrency)

} catch (error) {
    console.log("Error fetching" , error);
}finally{
    setconverting(false)
}
}

const handleFavorite = (currency) => {

}

const swapCurrencies = () => {
    setFromcurrency(tocurrency)
    settocurrency(Fromcurrency)
}


    return<div className="min-h-full bg-gray-400 flex flex-col items-center justify-center  ">
    <h1 className="mb-5 text-2xl font-semibold text-gray-700">Currency Convertor</h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end  "  >
        <Dropdown currencies={currencies} 
        title="From:"
         handleFavourite={handleFavorite} 
         setCurrency={setFromcurrency}
         currency={Fromcurrency} />
        {/* <button>swap</button> */}
        <div className="flex justify-center -mb-5 sm:mb-0  "  >
            <button onClick={swapCurrencies}  className="p-2  bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 "  >
                <HiArrowsRightLeft className="text-xl text-gray-700 "  />
            </button>
        </div>
        <Dropdown 
        currencies={currencies} 
        title="to:" 
        handleFavourite={handleFavorite} 
        setCurrency={settocurrency}
        currency={tocurrency}/>
    </div>
    <div className="mt-4"  >
        <label htmlFor="amount">
            Amount:
            </label>
        <input 
        value={amount}
        onChange={(e) => setamount(e.target.value)}
        type="number" 
        className="w-full border-gray-300 rounded-md shaded-sm focus:outline-none focus:ring-2 focus:ring-indigo-600  "
        />
    </div>
    <div className="flex justify-end mt-6">
<button onClick={CurrencyConvertor}
className="mb-3 px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600">Convert</button>
    </div>
    <div className="mt-4 text-lg font-medium text-right text-red-700 "  >
        Converted Amount: 69 USD
    </div>
    </div>
    
}

export default CurrencyConvertor