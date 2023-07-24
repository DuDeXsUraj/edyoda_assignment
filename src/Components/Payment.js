import React, { useState } from 'react';

const PaymentsPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('basic'); // Default selected plan
  const [totalPrice, setTotalPrice] = useState(10); // Default total price

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    // Update the total price based on the selected plan
    if (plan === 'basic') {
      setTotalPrice(10);
    } else if (plan === 'standard') {
      setTotalPrice(20);
    } else if (plan === 'premium') {
      setTotalPrice(30);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    console.log('Payment submitted!');
  };

  return (
    <div className="payments-page">
      <h1>Payments Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
        </label>
        <label>
          Card Holder:
          <input type="text" value={cardHolder} onChange={handleCardHolderChange} />
        </label>
        <label>
          Expiry Date:
          <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
        </label>
        <label>
          CVV:
          <input type="text" value={cvv} onChange={handleCvvChange} />
        </label>

        <div>
          <label>
            <input
              type="radio"
              name="plan"
              value="basic"
              checked={selectedPlan === 'basic'}
              onChange={() => handlePlanChange('basic')}
            />
            Basic Plan - $10
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="plan"
              value="standard"
              checked={selectedPlan === 'standard'}
              onChange={() => handlePlanChange('standard')}
            />
            Standard Plan - $20
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="plan"
              value="premium"
              checked={selectedPlan === 'premium'}
              onChange={() => handlePlanChange('premium')}
            />
            Premium Plan - $30
          </label>
        </div>

        <div>
          <strong>Total Price: ${totalPrice}</strong>
        </div>

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentsPage;

