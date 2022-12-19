import React from 'react'
import Wrapper from '../wrapper/Projects'
import fightPng from '../assets/fight.png'
import monkeyPng from '../assets/monkey.png'
import port from '../assets/portfolio.png'

function Projects() {
  return (
    <Wrapper id='project'>
      <div className="heading">
        <h2 style={{color:'white'}}>Projects</h2>
      </div>
      <div className="body">
        <div className="card">
          <img src={fightPng} className="card-img-top" alt="fighting image" />
          <div className="card-body">
            <h5 className="card-title">Arcade Game using JavaScript</h5>
            <p className="card-text">Created a fun fighting game using javaScript</p>
            <a href="https://github.com/JATINSHARMA9714/fighting-game" target='_blank' className="btn btn-primary">View</a>
          </div>
        </div>
        <div className="card">
          <img src={monkeyPng } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">News Monkey</h5>
            <p className="card-text">Created a news app which uses api to fetch top headlines.</p>
            <a href="https://github.com/JATINSHARMA9714/NewsMonkey-Project" target='_blank'className="btn btn-primary">View</a>
          </div>
        </div>
        <div className="card">
          <img src={port} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">Created a Website with tells about my skills and more..</p>
            <a href="#" className="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects
