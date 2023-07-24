
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { styled } from 'styled-components';

function Content() {
  return (
    <Wrapper>
    <div>
    <h1>Access curated course worth
    ₹3000 at just <span className='blue-text'>₹2700</span> per year!
        </h1>   
        <div className="text-container">
     <div className='justify'><span className='icon'><FontAwesomeIcon icon={faBook}/></span><span className='blue-text'>100+</span> <span>job relevant courses</span><br/></div>
      <div className='justify'><span className='icon'><FontAwesomeIcon icon={faBook}/></span><span className='blue-text'>20,000+ </span> <span>Hours of content</span><br /></div>
      <div className='justify'><span className='icon'><FontAwesomeIcon icon={faBook}/></span><span className='blue-text'>Fourth Line</span> <span>webinar access</span><br /></div>
      <div className='justify'><span className='icon'><FontAwesomeIcon icon={faBook}/></span><span >Scholarship worth</span> <span className='blue-text'>94,500 </span><br /></div>
      <div className='justify'><span className='icon'><FontAwesomeIcon icon={faBook}/></span><span className='blue-text'>Add free</span> <span>learning experience</span><br /></div>
    </div>
        
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
h1{
  width:80%;
  font-size:30px;
}
.text-container {
  font-size:20px;
  padding:12px;
  
}

.blue-text {
  color: #0096FF;
}

.justify{
  margin-bottom:40px;

}

.icon{
  margin-right:40px;
}

`

export default Content;