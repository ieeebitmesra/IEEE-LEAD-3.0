import React, { useEffect, useState } from 'react'
import Wrapper from '../wrapper/Navbar'

export default function Navbar() {
  const [mode, setMode] = useState(true)
  function changeMode() {
    let main = document.getElementById('introText')
    let text = document.querySelectorAll('.main')
    let intro = document.querySelector('.intro')
    let navbar=document.querySelector('.navbar')
    // console.log(document.body.classList.);
    if (!mode) {

      document.body.style.backgroundImage = 'linear-gradient(to left, #12c2e9ed, #c471ed, #f64f59)'
      main.style.color = 'black'
      text.forEach(element => {
        element.style.color = 'greenyellow'
      })
      intro.style.backgroundImage = 'linear-gradient(to left, #12c2e9ed, #c471ed, #f64f59)'
      navbar.classList.remove('dark')
      setMode(!mode)
    }
    else {
      document.body.style.backgroundImage = 'linear-gradient(to left,#0f0c29,#302b63,#2C5364)'
      setMode(!mode)
      main.style.color = 'white'
      text.forEach(element => {
        element.style.color = 'red'
      })
      intro.style.backgroundImage = 'linear-gradient(to left,#0f0c29,#302b63,#2C5364)'
      navbar.classList.add('dark')
    }
  }
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <h2 className=" white">Portfolio</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>

          </button>
          <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">

                <a className="nav-link  white" aria-current="page" href="#intro">INTRO</a>

              </li>
              <li className="nav-item">

                <a className="nav-link white" href="#skill">SKILLS</a>

              </li>
              <li className="nav-item">

                <a className="nav-link white" href="#project">PROJECTS</a>

              </li>
              <li className="nav-item">

                <a className="nav-link white" href='#contact'>CONTACT</a>

              </li>
            </ul>
            <div className='switch-mode'>
              <input type="checkbox" className={`checkbox ${mode && `dark`}`} id="checkbox" onChange={() => changeMode()} />

              <label htmlFor="checkbox" className="label">

                <i className="fas fa-moon"></i>

                <i className='fas fa-sun'></i>

                <div className='ball'></div>

              </label>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}
