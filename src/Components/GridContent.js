import React, { useState } from 'react'
import image from '../Assets/Images/blue.jpg'
import { styled } from 'styled-components'
import Content from './Content'
import SubscriptionPlan from './Subscription';
function GridContent() {
  return (
        <Wrapper>
        <div className='section-center'>
        <div className="grid-container">
      <div className="grid-item"><Content/></div>
      <div className="grid-item"><SubscriptionPlan/></div>
    </div>
    </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
position:absolute;
top:20%;
left:14%;


.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 70px; 
  background:transparent;

}

.grid-item {
  padding: 20px;
  color:white;
}

`


export default GridContent;