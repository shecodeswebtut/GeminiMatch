import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import bg from '../../assets/bg.png'


const Home = () => {
  return (
    <>
    <div className='home-container'>
      <div className="left">
      <p className="text-center welcome-heading ">Welcome to <p className='appname'>"GeminiMatch"</p></p>
      <p className="about-heading">
        GeminiMatch is your go-to destination for personalized product recommendations tailored to your requirements.
        Powered by the cutting-edge Gemini AI API, we offer a seamless experience to find your perfect tech match, with personalized product recommendations tailored to your preferences..
        </p>
     
    <Link className="text-center btns " to="/input" role="button">Get Started</Link>

      </div>

      <div className="right">
        <img className="" src={bg} />
      </div>
    </div>
    </>
  )
}

export default Home