import React from 'react'
import Wrapper from '../wrapper/Intro'
import myImg from '../assets/my_img.jfif'

function Intro() {
  return (
    <Wrapper id='intro'>
      <div className="intro">
      <div className="intro-content">
        <p id='introText'>Hey There, I'm <span className='main'>Jatin Sharma </span>, Second Year CSE Undergrad and a <span className='main'>Front-End Web Developer</span>  At BIT Mesra</p>
      </div>
      <div className="my-img">
        <img src={myImg} alt="my image" />
      </div>
      </div>
    </Wrapper>
  )
}

export default Intro
