import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <p>Created & Designed by Jatin Sharma &copy; 2020-22</p>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
    /* border: 2px solid black; */
p{
    text-align: center;
    color: white;
}
`
