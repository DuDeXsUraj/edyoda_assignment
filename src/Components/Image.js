import React from 'react'
import image from '../Assets/Images/Back Ground.png'
import { styled } from 'styled-components'

function Image() {
  return (
    <Wrapper>
    <div image-container>
        <img src={image}></img>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
img{
    width:100%;
    height:100%;
}
`

export default Image