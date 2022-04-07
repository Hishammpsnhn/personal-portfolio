import React,{useState,useEffect} from 'react'
import './Scrollbtn.css'
import { FaRegArrowAltCircleUp } from "react-icons/fa"

function ScrollTop() {
  const [topbotton,setTopbutton]= useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setTopbutton(true)
      }else{
        setTopbutton(false)
      }
    })
  },[])

  const scrollup = () =>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
}

  return (
    <div >
      {
        topbotton && (
          <button onClick={scrollup} className='scroll-btn' >
            <FaRegArrowAltCircleUp/>
          </button>
        )
      }
    </div>
  )
}

export default ScrollTop