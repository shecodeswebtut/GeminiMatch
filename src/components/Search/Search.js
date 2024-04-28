import React, { useState } from 'react'
import search from '../../assets/svg/search.svg'
import './search.css'
import SearchControl from './SearchControl'

function Search() {

    const [prompt,setPrompt]=useState('')
    const [click,setClick]=useState(false)
    function handleChange(e){
        setPrompt(e.target.value)
        
    }

    function handleClick(){
        setClick(true)
    }
  return (
    <>
    {click?<SearchControl prompt={prompt}/>: <div className='bg-aliceblue'>
        <p className='input-info p-0'>Want a detail description of a product?</p>
        <p className='input-info'>Write the name of device in input below and click on search icon to get the result.</p>
        
    <div className='flex-input'>
       
        <input name="input" value={prompt} placeholder='Write your product specification...' onChange={handleChange} style={{"fontSize":"19px"}}></input>
        <img onClick={handleClick} className="image-svg" src={search} alt="search svg"></img>
        
    </div>
    <p className='input-info bottom-info'>Make sure to write the full name of product. For ex. write "HP Pavilion X360 14 i5-1335u 512gb ssd Laptop"</p>
    </div>}
   
    </>
  )
}

export default Search