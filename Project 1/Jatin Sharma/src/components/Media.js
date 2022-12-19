import React from 'react'
import Wrapper from '../wrapper/Media'

function Media() {
  return (
    <Wrapper id='contact'>
      <div className="heading">
        <h2 style={{ color: 'white' }}>Social Media</h2>
      </div>
      <div className="body">
        <div className="icon">
          <a href="https://www.linkedin.com/in/jatin-sharma-15351a258/" target="_blank">
            <i className="fa-brands fa-linkedin linked"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/JATINSHARMA9714" target={"_blank"}>
            <i className="fa-brands fa-github github"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/jatinsharma453/" target="_blank">
            <i className="fa-brands fa-instagram insta"></i>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Media