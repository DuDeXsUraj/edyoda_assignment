
import React, { useState } from "react";
import { styled } from "styled-components";
import logo from '../Assets/Images/Icon Container.png'


const discountP = 12;
const SubscriptionPlan = () => {
  // State to keep track of the selected plan

  // Function to handle plan selection

  const [checkedInput, setCheckedInput] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(3000);
  const[price,setPrice] = useState(2750)
  
  //const[disCount,setDiscount] = useState('300')

  //its for down two 
    const handleCancel = () => {
      // Implement the cancel logic here
      alert('Canceled');
    };
  
    const handleProceedToPay = () => {
      // Implement the proceed to pay logic here
      alert('Proceed');
    };

  


  const handleChange = (event) => {
    setCheckedInput(event.target.value);
    const discount = document.getElementById("discount");
    const price = event.target.value;
    const ndiscount = price / discountP;
    discount.innerHTML = ndiscount;

    const total = document.getElementById("gtotal");
    const ntotal = event.target.value - ndiscount;
    total.innerHTML = ntotal;
    
    
  };
  

const handleInputChange = (event) => {
  setSelectedPrice(event.target.value);
}

// let getDiscount = ()=>{
//   let price = document.querySelector('input[name="price"].value');
  
//   const discount = (10 / 100) * price;
//   const discountedPriceValue = price - discount;
//   // let discountPrice = 10;
//   // let lastPrice = discountPrice*price/100;
//   console.log(discountedPriceValue)

// }

// getDiscount();

const other =()=>{
  let price = document.querySelector('input[name="price"]');
  if (price !== null) {
    const value = price.value;
    console.log(value)
    let dis = 10;
    const discount = value/dis;
    console.log(discount)
    return discount;

}}


other();

  return (
    <Wrapper className="subscription-plan">
          <div class="container">
        <button class="rounded-button">1</button>
        <button class="rounded-button">2</button>
         </div>
        <div className="text">
          <h3>Sign Up</h3>
          <h3>Subscribe</h3>
        </div>
      <h2>Select your subscription plan</h2>
      <div className="plan-options">
        <div className="box">
          <label  className={checkedInput === 'input' ? 'green-input' : 'grey-input'}>
            <input
              className="radio"
              name=""
              value=''
              disabled checked
              type="radio"
              
            />
            <div className="inline">
              <div class="tag">Offer Expire</div>12 Months Subscription
              </div>
              <span className="price">Total <span>₹3600</span>
            <p>₹300/mon</p>
            </span>
          </label>
        </div>
        <div className="box1">
          <label className={checkedInput === 'input1' ? 'green-input' : 'white-input'}>
            <input
              type="radio"
              name="price"
              value={3000}
              id="priceInput"
              checked={checkedInput === '3000'}
              onChange={handleChange}
              onClick={handleInputChange}
              //checked={selectedPlan === "standard"}
              //onChange={() => handlePlanSelection("standard")}
            />
            <div className="inline">
            
              <div className="tag2">Recommended</div>12 Months Subscription
              </div>
              <span className="price">Total <span>₹3000</span>
            <p>₹250/mo</p>
            </span>
          </label>
        </div>
        <div className="box2">
          <label className={checkedInput === 'input2' ? 'green-input' : 'white-input'}>
            <input
              type="radio"
              name="price"
              value={1620}
              checked={checkedInput === '1620'}
              onClick={handleChange}
              onChange={handleInputChange}
              //value="premium"
              //checked={selectedPlan === "premium"}
              //onChange={() => handlePlanSelection("premium")}
            />
            <div className="inline"><span>6 Months Subscription</span>
            </div>
            <span className="price">Total<span>₹1620</span>
            <p>₹270/mo</p>
            </span>
          </label>
        </div>
        <div className="box3">
          <label className={checkedInput === 'input3' ? 'green-input' : 'white-input'}>
            <input
                type="radio"
                value={870}
                name="price"
                checked={checkedInput === '870'}
                onClick={handleChange}
                onChange={handleInputChange}
              // type="radio"
               className="radio"
              // name="plan"
              // value="premium"
              // checked={selectedPlan === "premium"}
              // onChange={() => handlePlanSelection("premium")}
            />
            <div className="inline">
            <span>3 Months Subscription</span>
            </div>
            <span className="price">Total <span>₹870</span>
            <p>₹290 /mo</p>
            </span>
        
          </label>
        </div>
      </div>
      <div className="underline"></div>
      <div className="subscription">
        <span>Subscription fee</span><span>{selectedPrice}</span>
      </div>
      
      <div className="label">
    <div className="left-content">Limited Timer Offer<p>Offer valid till 25th July 2023</p></div>
    <div className="right-content" id="discount">250</div>
  </div>
      
      <div id="selectedPriceDisplay">
        <div>Total:</div><div id="gtotal">2750</div>
      </div>
      <div className="btns">
      <button className="cancel-btn" onClick={handleCancel} style={{ marginRight: '10px' }}>
        Cancel
      </button>
      <button className="proceed-btn" onClick={handleProceedToPay}>Proceed to Pay</button>
    </div>
    <img src={logo} className="logo"></img>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  padding-bottom: 40px;
  padding-left: 30px;
  padding-right: 30px;
  color: black;
  height: 98vh;
  border-radius: 10px;
  width: 30vw;
  margin-right:80px;
  margin-top:-60px;

  h2 {
    text-align: center;
    margin-bottom:20px;
  }

  .tag {
    background: #f77171;
    color: #fff;
    width: 121px;
    height: 20px;
    padding: 1px 29px 1px 29px;
    border-radius: 0px 0px 4px 4px;
    text-align: center;
  }
  .tag2 {
    background: #47ba68;
    color: #fff;
    width: 121px;
    height: 20px;
    padding: 1px 29px 1px 29px;
    border-radius: 0px 0px 4px 4px;
    text-align: center;
  }

 

  .inline {
    display: inline-block;
    padding: 8px;
    text-align:center;
    margin-top:-20px;
  }


  .price{
    float:right;  
    font-size:14px;
    margin-top:-8px;  
    
  }
  .price span{
    font-size:20px;
  }
  .price p{
    margin-top:-3px;
  }


  .underline{
    margin-top:20px;
    width:98%;
    height:2px;
    background:grey;
    text-align:center;
     
  }

  .subscription{
    margin-top:20px;
    width:94%;
    display:flex;
    justify-content:space-between;
  }
  #selectedPriceDisplay{
    display:flex;
    justify-content:space-between;
    width:94%;
    text-align:center;
  }
  .btns{
    display:flex;
    justify-content:space-between;
    width:98%;
    margin:auto
  }
  
  .btns button{
    width:440px;
    height:40px;
    border-radius:4px;
    text-align:center;
    margin-top:30px;
  }

  .cancel-btn{
    border:2px solid orange;
    background:transparent;
    color:orange;

  }
  .proceed-btn{
    background:green;
    color:white;
  }
  
  .logo{
    margin-top:30px;
  }



  .container {
    display: flex;
    justify-content: space-between;
    width:76%;
    margin:auto;
}

.rounded-button {
    border: none;
    background-color: #007BFF;
    color: #fff;
    border-radius: 60px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
}

.rounded-button:hover {
    background-color: #0056b3;
}

.text{
  display:flex;
  justify-content:space-between;
  width:80%;
  margin:auto
}
`;

export default SubscriptionPlan;
