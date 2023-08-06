import React from 'react';
import './Ferry.css';
import { useState } from 'react';

const PbtoHvlmt5 = ({tripcount}) => {
  const showferry = () =>{
    // Disabling the select ferry btn and price tag and displaying ferry details
    document.getElementById("selectbtnnautikamt5").style.display = "none";
    document.getElementById("nautikapricemt5").style.display = "none";
    document.getElementById("ferrydetailmt5").style.display = "block";
    document.getElementById("selectbtngreenoceanmt5").style.display = "block";
    document.getElementById("pricegreenoceanmt5").style.display = "block";
    document.getElementById("greenoceanferrydetailmt5").style.display = "none";
  }

  const hideferry = () =>{
    // hiding the ferry details
    document.getElementById("selectbtnnautikamt5").style.display = "block";
    document.getElementById("nautikapricemt5").style.display = "block";
    document.getElementById("ferrydetailmt5").style.display = "none";
  }

  const Travellersdetail1 = () =>{
      // hiding current page and displaying Travellers Details form page
      document.getElementById("mt1").style.display = "none";
      document.getElementById("mt2").style.display = "none";
      document.getElementById("mt3").style.display = "none";
      document.getElementById("mt4").style.display = "none";
      document.getElementById("mt5").style.display = "none";
      document.getElementById("multitrip1").style.backgroundColor = "hsl(0, 1%, 80%)";
      document.getElementById("multitrip2").style.backgroundColor = "hsl(0, 1%, 80%)";
      document.getElementById("multitrip3").style.backgroundColor = "hsl(0, 1%, 80%)";
      document.getElementById("multitrip4").style.backgroundColor = "hsl(0, 1%, 80%)";
      document.getElementById("selectmultitripferry").style.display = "none";
      document.getElementById("show").style.display = "block";
  }
  
  //storing ferry images in array
  const images = ['https://ocean.go2andaman.com/wp-content/uploads/2019/10/627D1A64-C7A1-4CD7-AD2C-3F6A0EF84A17_4_5005_c.jpeg?compress=true&quality=90&w=576&dpr=1.0', 'https://ocean.go2andaman.com/wp-content/uploads/2019/10/BCFD6914-3B2B-4040-8CDA-2ACE6DA929E3_4_5005_c.jpeg?compress=true&quality=90&w=576&dpr=1.0', 'https://ocean.go2andaman.com/wp-content/uploads/2019/10/CF036094-AD2D-49E6-AFF6-B7E069F521A2_4_5005_c.jpeg?compress=true&quality=90&w=576&dpr=1.0'];
  const [currentImage, setCurrentImage] = useState(0);

  //logic to show next image
  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  //logic to show previous image
  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const [selectedamenitie, setSelectedamenitie] = useState("");
  const amenities = (e) => {
    const selectedamenities = e.target.value;
    setSelectedamenitie(e.target.value);
    // logic to display the amenities of selected class
    if(selectedamenities === "Business"){
      document.getElementById("amenities-Businessmt5").style.display = "block";
      document.getElementById("amenities-Premiummt5").style.display = "none";
      document.getElementById("amenities-Luxurymt5").style.display = "none";
      document.getElementById("amenities-Royalmt5").style.display = "none";
      document.getElementById("amenities-Economymt5").style.display = "none";
    }

    if(selectedamenities === "Premium"){
      document.getElementById("amenities-Premiummt5").style.display = "block";
      document.getElementById("amenities-Businessmt5").style.display = "none";
      document.getElementById("amenities-Luxurymt5").style.display = "none";
      document.getElementById("amenities-Royalmt5").style.display = "none";
      document.getElementById("amenities-Economymt5").style.display = "none";
    }

    if(selectedamenities === "Economy"){
      document.getElementById("amenities-Economymt5").style.display = "block";
      document.getElementById("amenities-Luxurymt5").style.display = "none";
      document.getElementById("amenities-Royalmt5").style.display = "none";
      document.getElementById("amenities-Premiummt5").style.display = "none";
      document.getElementById("amenities-Businessmt5").style.display = "none";
    }

    if(selectedamenities === "Royal"){
      document.getElementById("amenities-Royalmt5").style.display = "block";
      document.getElementById("amenities-Luxurymt5").style.display = "none";
      document.getElementById("amenities-Economymt5").style.display = "none";
      document.getElementById("amenities-Premiummt5").style.display = "none";
      document.getElementById("amenities-Businessmt5").style.display = "none";
    }

    if(selectedamenities === "Luxury"){
      document.getElementById("amenities-Luxurymt5").style.display = "block";
      document.getElementById("amenities-Royalmt5").style.display = "none";
      document.getElementById("amenities-Economymt5").style.display = "none";
      document.getElementById("amenities-Premiummt5").style.display = "none";
      document.getElementById("amenities-Businessmt5").style.display = "none";
    }
  };

  const showferrygreenocean = () =>{
    // Disabling the select ferry btn and price tag and displaying ferry details
    document.getElementById("selectbtngreenoceanmt5").style.display = "none";
    document.getElementById("pricegreenoceanmt5").style.display = "none";
    document.getElementById("greenoceanferrydetailmt5").style.display = "block";
    document.getElementById("selectbtnnautikamt5").style.display = "block";
    document.getElementById("nautikapricemt5").style.display = "block";
    document.getElementById("ferrydetailmt5").style.display = "none";
  }

  const hidegreenoceanferry = () =>{
    // hiding the ferry details
    document.getElementById("selectbtngreenoceanmt5").style.display = "block";
    document.getElementById("pricegreenoceanmt5").style.display = "block";
    document.getElementById("greenoceanferrydetailmt5").style.display = "none";
  }

  return (
    <>
      <div>
        <div className="container">
          <div className='row ferrydetail' style={{marginTop:"5%"}}> 
            {/* Nautika Lite ferry  */}
            <div className='container'>
              <div className='row'>
                <div className='col-8'>
                  <span className="font-size-small" style={{marginLeft:"-5%"}}>Ferry: </span>
                  <span className="brand-sixth font-bold font-size-small">Nautika Lite</span>
                </div>
                <div className='col-4'>
                  <span className="font-medium font-size-smallest" style={{float:"right"}}>Top Rated &nbsp;
                    <img src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy_light.svg" alt='xyz' width="7" className="gm-added gm-observing gm-observing-cb" loading="lazy" />
                    <img src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy-1.svg" alt='xyz' width="7" className="gm-added gm-observing gm-observing-cb" loading="lazy"/>
                    <img src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy-1.svg" alt='xyz' width="7" className="gm-added gm-observing gm-observing-cb" loading="lazy"/>
                  </span>
                </div>
              </div>
              <div className='row'>
                <div className='col-3' style={{marginLeft:"-3%", marginTop:"2%"}}>
                  <em className='th'>Departure</em>
                </div>
                <div className='col-2'></div>
                <div className='col-2' style={{marginLeft:"-3%", marginTop:"2%"}}>
                  <em className='th'>Arrival</em>
                </div>
                <div className='col-5' id='nautikapricemt5' style={{display:"block"}}>
                  <span className="brand-primary font-bold" style={{float:"right", marginRight:"-15%"}}>₹1,450</span>
                </div>
              </div>
              <div className='row'>
                <div className='col-3' style={{marginLeft:"-3%", marginTop:"-0.5%"}}>
                  <span className="brand-primary font-bold text-lowercase font-size-small">6:30 am</span>
                </div>
                <div className='col-2'></div>
                <div className='col-3' style={{marginLeft:"-3%", marginTop:"-0.5%"}}>
                  <span className="brand-secondary font-bold text-lowercase font-size-small">8:15 am</span>
                </div>
                <div className='col-4 col-md-4' id='selectbtnnautikamt5' style={{display:"block"}}>
                  <a className="book-btn" onClick={showferry}>Select Ferry</a>
                </div>
              </div>
              <div className='row'>
                <p className="font-size-smaller font-bold" style={{marginLeft:"-3%", textTransform:"uppercase"}}>PortBlair → Havelock</p>
              </div>
              <div className='row' id='ferrydetailmt5' style={{display:"none"}}>
                <div className='container'>
                  <div className='row'>
                    <div className="slider" style={{marginLeft:"-3%"}}>
                      <button className="arrow arrow-left" onClick={goToPreviousImage}>
                        &lt;
                      </button>
                      <img src={images[currentImage]} alt="Slider" style={{width:"100%"}}/>
                      <button className="arrow arrow-right" onClick={goToNextImage}>
                        &gt;
                      </button>
                    </div>
                  </div>
                  <div className='row'>
                    <p className="font18 text-center mar-t-3" style={{textAlign:"center", marginTop:"12px"}}>Select your Seat types</p>
                  </div>
                  <div className='row'>
                    <div className="book-ferry-third-list is-flex justify-content-center text-center">
                      <label className="type-label">
                        <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" id="seat_type_2120" data-id="120" data-adultprice="1450" data-infantprice="174" value="Premium" />
                        <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                          <div>
                            <span className="font16 discounted-price pb-1">₹1,450</span>
                            <br></br>
                            <span className="font-regular font-size-smaller1">Premium</span>
                          </div>
                        </div> 
                        <div className="recommended-item gray-dark">recommended</div>
                      </label>
                      <label className="type-label">
                        <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" id="seat_type_1120" data-id="120" data-adultprice="1650" data-infantprice="174" value="Business"/>
                        <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                          <div>
                            <span className="font16 discounted-price pb-1">₹1,650</span>
                            <br></br>
                            <span className="font-regular font-size-smaller1">Business</span>
                          </div>
                        </div> 
                        <div className="recommended-item gray-dark">recommended</div>
                      </label>        
                    </div>
                  </div>
                  <div className='row' style={{marginTop:"2%"}}>
                    <div className="booking-details-amenities pad-3" id="amenities-Premiummt5" style={{display:"none", marginBottom:"2%"}}>
                      <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Premium</span> </strong></h4>
                      <ul className="amenities-Premiummt5 justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
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
                      <div className='row' style={{marginTop:"2%"}}>
                        <label style={{textAlign:"center"}}>
                          <button onClick={hideferry} style={{backgroundColor:"white", color:"#b4b4b4",fontWeight:"600",border:"none",width:"30%",height:"35px",borderRadius:"4px"}}>Close</button>
                          &nbsp;
                          <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                        </label>
                      </div>
                    </div>
                    <div className="booking-details-amenities pad-3" id="amenities-Businessmt5" style={{display:"none", marginBottom:"2%"}}>
                      <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Business</span> </strong></h4>
                      <ul className="amenities-Businessmt5 justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
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
                      <div className='row' style={{marginTop:"2%"}}>
                        <label style={{textAlign:"center"}}>
                          <button onClick={hideferry} style={{backgroundColor:"white", color:"#b4b4b4",fontWeight:"600",border:"none",width:"30%",height:"35px",borderRadius:"4px"}}>Close</button>
                          &nbsp;
                          <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                        </label>
                      </div>    
                    </div>
                  </div>
                </div>
              </div>
            </div>                
          </div>
          <div className='row ferrydetail' style={{marginTop:"5%"}}>
            {/* Green Ocean ferry  */} 
            <div className='container'>
                <div className='row'>
                  <div className='col-8'>
                    <span className="font-size-small" style={{marginLeft:"-5%"}}>Ferry: </span>
                    <span className="brand-sixth font-bold font-size-small">Green Ocean 1</span>
                  </div>
                  <div className='col-4'>
                    <span className="font-medium font-size-smallest" style={{float:"right"}}>Top Rated &nbsp;
                      <img src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy_light.svg" alt='xyz' width="7" className="gm-added gm-observing gm-observing-cb" loading="lazy" />
                      <img src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy-1.svg" alt='xyz' width="7" className="gm-added gm-observing gm-observing-cb" loading="lazy"/>
                      <img src="https://g2a.wordpoets.com/wp-content/uploads/2021/03/Energy-1.svg" alt='xyz' width="7" className="gm-added gm-observing gm-observing-cb" loading="lazy"/>
                    </span>
                  </div>
                </div>
                <div className='row'>
                    <div className='col-3' style={{marginLeft:"-3%", marginTop:"2%"}}>
                      <em className='th'>Departure</em>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-2' style={{marginLeft:"-3%", marginTop:"2%"}}>
                      <em className='th'>Arrival</em>
                    </div>
                    <div className='col-5' id='pricegreenoceanmt5' style={{display:"block"}}>
                      <span className="brand-primary font-bold" style={{float:"right", marginRight:"-15%"}}>₹1,100</span>
                    </div>
                </div>
                <div className='row'>
                  <div className='col-3' style={{marginLeft:"-3%", marginTop:"-0.5%"}}>
                    <span className="brand-primary font-bold text-lowercase font-size-small">7:00 am</span>
                  </div>
                  <div className='col-2'></div>
                  <div className='col-3' style={{marginLeft:"-3%", marginTop:"-0.5%"}}>
                    <span className="brand-secondary font-bold text-lowercase font-size-small">9:15 am</span>
                  </div>
                  <div className='col-4' id='selectbtngreenoceanmt5' style={{display:"block"}}>
                    <a className="book-btn" onClick={showferrygreenocean} style={{float:"right"}}>Select Ferry</a>
                  </div>
                </div>
                <div className='row'>
                  <p className="font-size-smaller font-bold" style={{marginLeft:"-3%", textTransform:"uppercase"}}>PortBlair → Havelock</p>
                </div>
                <div className='row' id='greenoceanferrydetailmt5' style={{display:"none"}}>
                  <div className='container'>
                    <div className='row'>
                      <div className="slider" style={{marginLeft:"-3%"}}>
                        <button className="arrow arrow-left" onClick={goToPreviousImage}>
                          &lt;
                        </button>
                        <img src={images[currentImage]} alt="Slider" style={{width:"100%"}}/>
                        <button className="arrow arrow-right" onClick={goToNextImage}>
                          &gt;
                        </button>
                      </div>
                    </div>
                    <div className='row'>
                      <p className="font18 text-center mar-t-3" style={{textAlign:"center", marginTop:"12px"}}>Select your Seat types</p>
                    </div>
                    <div className='row'>
                      <div className="book-ferry-third-list is-flex justify-content-center text-center">
                        <label className="type-label">
                          <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" id="seat_type_2120" data-id="120" data-adultprice="1450" data-infantprice="174" value="Economy" />
                          <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                            <div>
                              <span className="font16 discounted-price pb-1">₹1,100</span>
                              <br></br>
                              <span className="font-regular font-size-smaller1">Economy</span>
                            </div>
                          </div> 
                          <div className="recommended-item gray-dark">recommended</div>
                        </label>
                        <label className="type-label">
                          <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" id="seat_type_1120" data-id="120" data-adultprice="1650" data-infantprice="174" value="Luxury"/>
                          <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                            <div>
                              <span className="font16 discounted-price pb-1">₹1,450</span>
                              <br></br>
                              <span className="font-regular font-size-smaller1">Luxury</span>
                            </div>
                          </div> 
                          <div className="recommended-item gray-dark">recommended</div>
                        </label>
                        <label className="type-label">
                          <input className="type-box" type="radio" onChange={amenities} name="seat_type_120" id="seat_type_1120" data-id="120" data-adultprice="1650" data-infantprice="174" value="Royal"/>
                          <div className="green-roundborder is-flex flex-column align-items-center justify-content-center">
                            <div>
                              <span className="font16 discounted-price pb-1">₹1,650</span>
                              <br></br>
                              <span className="font-regular font-size-smaller1">Royal</span>
                            </div>
                          </div> 
                          <div className="recommended-item gray-dark">recommended</div>
                        </label>        
                      </div>
                    </div>
                    <div className='row' style={{marginTop:"2%"}}>
                      <div className="booking-details-amenities pad-3" id="amenities-Economymt5" style={{display:"none", marginBottom:"2%"}}>
                        <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Economy</span> </strong></h4>
                        <ul className="amenities-Premiummt5 justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
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
                        <div className='row' style={{marginTop:"2%"}}>
                          <label style={{textAlign:"center"}}>
                            <button onClick={hidegreenoceanferry} style={{backgroundColor:"white", color:"#b4b4b4",fontWeight:"600",border:"none",width:"30%",height:"35px",borderRadius:"4px"}}>Close</button>
                            &nbsp;
                            <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                          </label>
                        </div>
                      </div>
                      <div className="booking-details-amenities pad-3" id="amenities-Luxurymt5" style={{display:"none", marginBottom:"2%"}}>
                        <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Luxury</span> </strong></h4>
                        <ul className="amenities-Businessmt5 justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
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
                        <div className='row' style={{marginTop:"2%"}}>
                          <label style={{textAlign:"center"}}>
                            <button onClick={hidegreenoceanferry} style={{backgroundColor:"white", color:"#b4b4b4",fontWeight:"600",border:"none",width:"30%",height:"35px",borderRadius:"4px"}}>Close</button>
                            &nbsp;
                            <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                          </label>
                        </div>    
                      </div>
                      <div className="booking-details-amenities pad-3" id="amenities-Royalmt5" style={{display:"none", marginBottom:"2%"}}>
                        <h4> Amenities <strong className="font-italic">- <span className="seat-type brand-secondary">Royal</span> </strong></h4>
                        <ul className="amenities-Businessmt5 justify-content-between align-items-center flex-wrap no-padding no-margin-bottom active">
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
                        <div className='row' style={{marginTop:"2%"}}>
                          <label style={{textAlign:"center"}}>
                            <button onClick={hidegreenoceanferry} style={{backgroundColor:"white", color:"#b4b4b4",fontWeight:"600",border:"none",width:"30%",height:"35px",borderRadius:"4px"}}>Close</button>
                            &nbsp;
                            <button onClick={Travellersdetail1} style={{backgroundColor:"#01b46c", color:"white",fontWeight:"600",border:"none",height:"33px",borderRadius:"4px",fontSize:"14px",paddingLeft:"5%",paddingRight:"5%"}}>Proceed with {selectedamenitie}</button>
                          </label>
                        </div>    
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PbtoHvlmt5;
