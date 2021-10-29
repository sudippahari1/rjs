import React  , {useState} from 'react'

import SmallComp from './smallComp'

const mobileWidth  = 300
const mobileHeight = 600


function FakeMobile() {
  const [bgColor , setBgColor] = useState("#f75c5c");

  const changeBGColor = ()=>{
    setBgColor("#447c44")
  }

  const reset = ()=>{
    setBgColor("#f75c5c")
  }

  return (
    <div className="fakeMobile" style={{width:mobileWidth , height: mobileHeight}}>
      <div className="backBlock" style={{width:mobileWidth , height: mobileHeight }}>
        <SmallComp bg={bgColor} />
      </div>
      
      <div className="frontBlock" style={{width:mobileWidth , height: mobileHeight}}>
        
        <div className="upperPart">
          <span>Hello</span>
          <span>Hello Hello</span>
          <span>Hello Hello Hello</span>
          <span>Hello Hello Hello Hello</span>
        </div>

        <div className="lowerPart">
          <button className="clickButton" onClick={changeBGColor}> Press </button>
          {bgColor === "#447c44" && <span> Button Clicked </span>}
          {bgColor === "#447c44" && <button className="resetButton" onClick={reset}> Reset </button> }
        </div>
        
        
      </div>
      
    </div>
  )
}

export default FakeMobile
