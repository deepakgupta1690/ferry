import React from 'react';
import './Ferry.css';
import { useState, useEffect } from 'react';

const HvltoNImt4 = ({tripcount, updateStateValuesmt4}) => {

  const Travellersdetail1 = () =>{
        document.getElementById("mt1").style.display = "none";
        document.getElementById("mt2").style.display = "none";
        document.getElementById("mt3").style.display = "none";
        document.getElementById("mt4").style.display = "none";
        document.getElementById("multitrip1").style.backgroundColor = "hsl(0, 1%, 80%)";
        document.getElementById("multitrip2").style.backgroundColor = "hsl(0, 1%, 80%)";
        document.getElementById("multitrip3").style.backgroundColor = "hsl(0, 1%, 80%)";
        document.getElementById("multitrip4").style.backgroundColor = "hsl(0, 1%, 80%)";
        if(tripcount === 4){
            document.getElementById("selectmultitripferry").style.display = "none";
            document.getElementById("show").style.display = "block";
        }
        else{
            document.getElementById("mt5").style.display = "block";
            document.getElementById("multitrip5").style.backgroundColor = "white";
        }
  }
  
  const [selectedamenitie, setSelectedamenitie] = useState("");
  const [ferryName, setFerryName] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [adultprice, setAdultprice] = useState('');
  const [childprice, setChildprice] = useState('');

  const amenities = (e) => {
    const selectedamenities = e.target.value;

    setFerryName(e.target.dataset.ferryname);
    setDepartureTime(e.target.dataset.depttime);
    setArrivalTime(e.target.dataset.arrivaltime);
    setAdultprice(e.target.dataset.adultprice);
    setChildprice(e.target.dataset.childprice);
    setSelectedamenitie(e.target.value);
    
    if(selectedamenities === "Business"){
      document.getElementById("amenities-Businessmt4").style.display = "block";
      document.getElementById("amenities-Premiummt4").style.display = "none";
      document.getElementById("amenities-Luxurymt4").style.display = "none";
      document.getElementById("amenities-Royalmt4").style.display = "none";
      document.getElementById("amenities-Economymt4").style.display = "none";
    }

    if(selectedamenities === "Premium"){
      document.getElementById("amenities-Premiummt4").style.display = "block";
      document.getElementById("amenities-Businessmt4").style.display = "none";
      document.getElementById("amenities-Luxurymt4").style.display = "none";
      document.getElementById("amenities-Royalmt4").style.display = "none";
      document.getElementById("amenities-Economymt4").style.display = "none";
    }

    if(selectedamenities === "Economy"){
      document.getElementById("amenities-Economymt4").style.display = "block";
      document.getElementById("amenities-Luxurymt4").style.display = "none";
      document.getElementById("amenities-Royalmt4").style.display = "none";
      document.getElementById("amenities-Premiummt4").style.display = "none";
      document.getElementById("amenities-Businessmt4").style.display = "none";
    }

    if(selectedamenities === "Royal"){
      document.getElementById("amenities-Royalmt4").style.display = "block";
      document.getElementById("amenities-Luxurymt4").style.display = "none";
      document.getElementById("amenities-Economymt4").style.display = "none";
      document.getElementById("amenities-Premiummt4").style.display = "none";
      document.getElementById("amenities-Businessmt4").style.display = "none";
    }

    if(selectedamenities === "Luxury"){
      document.getElementById("amenities-Luxurymt4").style.display = "block";
      document.getElementById("amenities-Royalmt4").style.display = "none";
      document.getElementById("amenities-Economymt4").style.display = "none";
      document.getElementById("amenities-Premiummt4").style.display = "none";
      document.getElementById("amenities-Businessmt4").style.display = "none";
    }
  };

  useEffect(() => {
    // Call the function passed as a prop to update the state values in the parent component
    updateStateValuesmt4(ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie);
  }, [ferryName, departureTime, arrivalTime, adultprice, childprice,selectedamenitie, updateStateValuesmt4]);

  return (
    <>
      <div className="card mb-3" id='nautika_litemt4' style={{maxWidth:"100%"}}>
          <div className="row g-0">
              <div className="col-md-3">
                  <img src="https://ocean.go2andaman.com/wp-content/uploads/2019/10/627D1A64-C7A1-4CD7-AD2C-3F6A0EF84A17_4_5005_c.jpeg?compress=true&quality=90&w=576&dpr=1.0" style={{height:"100%"}} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-5">
                  <div className="card-body">
                      <h5 className="card-title brand-sixth font-bold font-size-small">Nautika Lite</h5>
                      <div className='row'>
                          <div className='col-6'>
                              <em className='th'>Departure</em>
                          </div>
                          <div className='col-6'>
                              <em className='th'>Arrival</em>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-6'>
                              <span className="brand-primary font-bold text-lowercase font-size-small">6:30 am</span>
                          </div>
                          <div className='col-6'>
                              <span className="brand-secondary font-bold text-lowercase font-size-small">8:15 am</span>
                          </div>
                      </div>
                      <div className='row'>
                          <div>
                              <label className="type-label" style={{marginLeft:"10%"}}>
                                  <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" data-ferryname="Nautika Lite" data-depttime="6:30 am" data-arrivaltime="8:15 am" data-adultprice="1450" data-childprice="174" value="Premium" />
                                  <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                                      <div>
                                          <span className="font16 discounted-price pb-1">₹1,450</span>
                                          <br></br>
                                          <span className="font-regular font-size-smaller1">Premium</span>
                                      </div>
                                  </div> 
                              </label>
                              <label className="type-label" style={{marginLeft:"20%"}}>
                                  <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" data-ferryname="Nautika Lite" data-depttime="6:30 am" data-arrivaltime="8:15 am" data-adultprice="1650" data-childprice="174" value="Business"/>
                                    <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <span className="font16 discounted-price pb-1">₹1,650</span>
                                            <br></br>
                                            <span className="font-regular font-size-smaller1">Business</span>
                                        </div>
                                    </div> 
                              </label>        
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className="booking-details-amenities pad-3" id="amenities-Premiummt4" style={{display:"none"}}>
                      <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Premium</span> </strong></h4>
                      <ul className="amenities-Premium justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
                          <li className="active am-pci">High-Speed Ferry</li>
                          <li className="active am-fr">Air Conditioned</li>
                          <li className="active am-ecs">Cafeteria</li>
                          <li className="active am-pv">Premium Seating</li>
                            <li className="am-lx">Open Deck Access</li>
                            <li className="am-ml">Extra Leg Space</li>
                            <li className="am-rs">Exclusive Cabin</li>
                            <li className="am-lr">Snacks Included</li>
                          <li className="am-ac">Meal Included</li>
                      </ul>
                      <div className='row' style={{marginTop:"9%"}}>
                          <label style={{textAlign:"center"}}>
                              <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                          </label>
                      </div>
                  </div>
                  <div className="booking-details-amenities pad-3" id="amenities-Businessmt4" style={{display:"none"}}>
                      <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Business</span> </strong></h4>
                      <ul className="amenities-Business justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
                          <li className="active am-pci">High-Speed Ferry</li>
                          <li className="active am-fr">Air Conditioned</li>
                          <li className="active am-ecs">Cafeteria</li>
                          <li className="active am-pv">Premium Seating</li>
                          <li className="active am-ml">Extra Leg Space</li>
                          <li className="am-lx">Open Deck Access</li>
                          <li className="am-rs">Exclusive Cabin</li>
                          <li className="am-lr">Snacks Included</li>
                          <li className="am-ac">Meal Included</li>
                      </ul>  
                      <div className='row' style={{marginTop:"9%"}}>
                          <label style={{textAlign:"center"}}>
                              <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                          </label>
                      </div>  
                  </div>
              </div>
          </div>
      </div>

      <div className="card mb-3" id='green_oceanmt4' style={{maxWidth:"100%"}}>
          <div className="row g-0">
              <div className="col-md-3">
                  <img src="https://ocean.go2andaman.com/wp-content/uploads/2019/10/627D1A64-C7A1-4CD7-AD2C-3F6A0EF84A17_4_5005_c.jpeg?compress=true&quality=90&w=576&dpr=1.0" style={{height:"100%"}} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-5">
                  <div className="card-body">
                      <h5 className="card-title brand-sixth font-bold font-size-small">Green Ocean</h5>
                      <div className='row'>
                          <div className='col-6'>
                              <em className='th'>Departure</em>
                          </div>
                          <div className='col-6'>
                              <em className='th'>Arrival</em>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-6'>
                              <span className="brand-primary font-bold text-lowercase font-size-small">7:00 am</span>
                          </div>
                          <div className='col-6'>
                              <span className="brand-secondary font-bold text-lowercase font-size-small">9:15 am</span>
                          </div>
                      </div>
                      <div className='row'>
                          <div>
                              <label className="type-label" style={{marginLeft:"5%"}}>
                                  <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" data-ferryname="Green Ocean" data-depttime="7:00 am" data-arrivaltime="9:15 am" data-adultprice="1100" data-childprice="174" value="Economy" />
                                    <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <span className="font16 discounted-price pb-1">₹1,100</span>
                                            <br></br>
                                            <span className="font-regular font-size-smaller1">Economy</span>
                                        </div>
                                    </div> 
                              </label>
                              
                              <label className="type-label" style={{marginLeft:"5%"}}>
                                  <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" data-ferryname="Green Ocean" data-depttime="7:00 am" data-arrivaltime="9:15 am" data-adultprice="1450" data-childprice="174" value="Luxury"/>
                                  <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                                      <div>
                                          <span className="font16 discounted-price pb-1">₹1,450</span>
                                          <br></br>
                                          <span className="font-regular font-size-smaller1">Luxury</span>
                                      </div>
                                  </div> 
                              </label>
                              <label className="type-label" style={{marginLeft:"5%"}}>
                                  <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" data-ferryname="Green Ocean" data-depttime="7:00 am" data-arrivaltime="9:15 am" data-adultprice="1650" data-childprice="174" value="Royal"/>
                                  <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                                      <div>
                                      <span className="font16 discounted-price pb-1">₹1,650</span>
                                      <br></br>
                                      <span className="font-regular font-size-smaller1">Royal</span>
                                      </div>
                                  </div> 
                              </label>        
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className="booking-details-amenities pad-3" id="amenities-Economymt4" style={{display:"none"}}>
                      <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Economy</span> </strong></h4>
                      <ul className="amenities-Premium justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
                          <li className="active am-pci">High-Speed Ferry</li>
                          <li className="active am-fr">Air Conditioned</li>
                          <li className="active am-ecs">Cafeteria</li>
                          <li className="active am-pv">Premium Seating</li>
                          <li className="am-lx">Open Deck Access</li>
                          <li className="am-ml">Extra Leg Space</li>
                          <li className="am-rs">Exclusive Cabin</li>
                          <li className="am-lr">Snacks Included</li>
                          <li className="am-ac">Meal Included</li>
                      </ul>
                      <div className='row' style={{marginTop:"9%"}}>
                          <label style={{textAlign:"center"}}>
                              <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                          </label>
                      </div>
                  </div>
                  <div className="booking-details-amenities pad-3" id="amenities-Luxurymt4" style={{display:"none"}}>
                      <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Luxury</span> </strong></h4>
                      <ul className="amenities-Business justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
                          <li className="active am-pci">High-Speed Ferry</li>
                          <li className="active am-fr">Air Conditioned</li>
                          <li className="active am-ecs">Cafeteria</li>
                          <li className="active am-pv">Premium Seating</li>
                          <li className="active am-ml">Extra Leg Space</li>
                          <li className="am-lx">Open Deck Access</li>
                          <li className="am-rs">Exclusive Cabin</li>
                          <li className="am-lr">Snacks Included</li>
                          <li className="am-ac">Meal Included</li>
                      </ul>
                      <div className='row' style={{marginTop:"9%"}}>
                          <label style={{textAlign:"center"}}>
                              <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                          </label>
                      </div>    
                  </div>
                  <div className="booking-details-amenities pad-3" id="amenities-Royalmt4" style={{display:"none"}}>
                      <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Royal</span> </strong></h4>
                      <ul className="amenities-Business justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
                          <li className="active am-pci">High-Speed Ferry</li>
                          <li className="active am-fr">Air Conditioned</li>
                          <li className="active am-ecs">Cafeteria</li>
                          <li className="active am-pv">Premium Seating</li>
                          <li className="active am-ml">Extra Leg Space</li>
                          <li className="am-lx">Open Deck Access</li>
                          <li className="am-rs">Exclusive Cabin</li>
                          <li className="am-lr">Snacks Included</li>
                          <li className="am-ac">Meal Included</li>
                      </ul>
                      <div className='row' style={{marginTop:"9%"}}>
                      <label style={{textAlign:"center"}}>
                          <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                      </label>
                      </div>    
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default HvltoNImt4;