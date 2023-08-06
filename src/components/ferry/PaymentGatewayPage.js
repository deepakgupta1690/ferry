import React from 'react';

function PaymentGatewayPage() {
  return (
    <div className="payment-gateway-container">
      <div className="payment-gateway-content">
        {/* Add your payment gateway content here */}
        <div className='container' style={{width:"30%", alignItems:"center", marginTop:"1%"}}>
            <div className='row' style={{height:"80px", backgroundColor:"rgba(45, 84, 185, 1)"}}>
                <div className='col-6'>
                    <img src="https://onlinevacations.in/static/media/OnlineVacations.c7d6609774bf9c520b5e.png" alt='xyz' width="100%" height={75} style={{border:"2px solid rgba(45, 84, 175, 1)"}}/>
                </div>
                <div className='col-6'>
                    <label style={{color:"white"}}>onlinevacations.com</label>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGatewayPage;