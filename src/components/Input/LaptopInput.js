import React from 'react';
import { useState } from 'react';
import './laptop.css'
import ProductCard from '../Product/ProductCard'


function App() {

  const [submit,setSubmit]=useState(false)
  const [credentials, setCredentials] = useState({ company: "", ram: "",storage:"", price: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  function handleSubmit(){
      setSubmit(true)
  }


  return (
   
    <>
      
    {submit===false? <div className="App">
      <form >
      <div style={{"margin":"21px","color":"#00d6ff","text-align":"center"}}>Please select the option that best describes what you're looking for today</div>
    
        <div className="form-group">
          <label htmlFor="company" className="form-label">Select a specific company or select all</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="samsung"  />
              <label className="labels" htmlFor="male">Samsung</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="oppo"  />
              <label className="labels" htmlFor="male">Oppo</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="vivo"  />
              <label className="labels" htmlFor="male">Vivo</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="apple"  />
              <label className="labels" htmlFor="male">Apple</label>
            </div>

             <div className="input-grp">
              <input type="radio" onChange={onChange} name="company" value="all"  />
              <label className="labels" htmlFor="male">All</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">Select a specific range of price</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="15,000-30,000"  />
              <label className="labels" htmlFor="male">15,000-30,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="30,000-45,000"  />
              <label className="labels" htmlFor="male">30,000-45,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="45,000-65,000"  />
              <label className="labels" htmlFor="male">45,000-65,000</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="65,000-1,20,000"  />
              <label className="labels" htmlFor="male">65,000-1,20,000</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="all"  />
              <label className="labels" htmlFor="male">All</label>
            </div>

         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="storage" className="form-label">Select storage</label>
          <div  className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="32GB"  />
              <label className="labels" htmlFor="male">32 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="64GB"  />
              <label className="labels" htmlFor="male">64 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="128GB"  />
              <label className="labels" htmlFor="male">128 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="256GB"  />
              <label className="labels" htmlFor="male">256 GB</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="storage" value="all"  />
              <label className="labels" htmlFor="male">All</label>
            </div>
         
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ram" className="form-label">RAM</label>
          <div className='input-form'>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="2 GB"  />
              <label className="labels" htmlFor="male">2 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="4 GB"  />
              <label className="labels" htmlFor="male">4 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="6 GB"  />
              <label className="labels" htmlFor="male">6 GB</label>
            </div>
             <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="8 GB"  />
              <label className="labels" htmlFor="male">8 GB OR MORE</label>
            </div>
            <div className="input-grp">
              <input type="radio" onChange={onChange} name="price" value="all"  />
              <label className="labels" htmlFor="male">All</label>
            </div>
          </div>
        
        </div>
        


       
     
      </form>
      <div type='submit' className="text-center btns" onClick={handleSubmit}>Submit </div>
      </div>:<ProductCard company={credentials.company} ram={credentials.ram} price={credentials.price} storage={credentials.storage}></ProductCard>}
   
    </>
  );
}

export default App;
