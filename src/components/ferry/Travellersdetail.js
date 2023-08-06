import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import PaymentGatewayPage from './PaymentGatewayPage';
import './Ferry.css';

const Travellersdetail = ({adults, child, infant, owfrom, owto, rtfrom, rtto, from, to, to1, to2, to3, to4, tripcount, triptype, owDate,
                            rt1Date, rt2Date, selectedDate, selectedDate1, selectedDate2, selectedDate3, selectedDate4}) => {
    const [formFields, setFormFields] = useState([]);
    const [formFieldschild, setFormFieldschild] = useState([]);
    const [formFieldsinfant, setFormFieldsinfant] = useState([]);
    
    // Adult DOB handler
    const handleDateChange = (index, date) => {
        const updatedFields = [...formFields];
        updatedFields[index] = date;
        setFormFields(updatedFields);
    };

    // Child DOB handler
    const handleDateChangechild = (index, date) => {
        const updatedFields = [...formFieldschild];
        updatedFields[index] = date;
        setFormFieldschild(updatedFields);
    };

    // Infant DOB handler
    const handleDateChangeinfant = (index, date) => {
        const updatedFields = [...formFieldsinfant];
        updatedFields[index] = date;
        setFormFieldsinfant(updatedFields);
    };

    // Adult age calculation
    const calculateAge = (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();  
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }   
        return {age,monthDiff};
    };
    
    // Child age calculation
    const calculateAge1 = (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        let age1 = today.getFullYear() - birthDate.getFullYear();
        const monthDiff1 = today.getMonth() - birthDate.getMonth();

        if (monthDiff1 < 0 || (monthDiff1 === 0 && today.getDate() < birthDate.getDate())) {
          age1--;
        }

        return {age1,monthDiff1};
    };

    // Infant age calculation
    const calculateAge2 = (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        let age2 = today.getFullYear() - birthDate.getFullYear();
        var monthDiff2 = today.getMonth() - birthDate.getMonth();
        if(monthDiff2 < 0){
            age2--;
            monthDiff2 = monthDiff2 + 12; 
        }
        if(monthDiff2 === 0 && today.getDate() < birthDate.getDate()){
            age2--;
            monthDiff2 = 11;
        }
        if(monthDiff2 === 0 && today.getDate() > birthDate.getDate()){
            monthDiff2 = 0;
        }
        return {age2,monthDiff2};
    };

    const formatAge = (year) => {
        const yearsLabel = year.age2 === 1 ? 'yr' : 'yrs';
        const monthsLabel = year.monthDiff2 === 1 ? 'month' : 'months';
      
        return `${year.age2} ${yearsLabel} and ${year.monthDiff2} ${monthsLabel}`;
    };

    const handleProceed = (e) => {
        // setShowPaymentGateway(true);
        e.preventDefault();
        document.getElementById("hidetravellersdetails").style.display = 'none';
        document.getElementById("showpaymentpage").style.display = 'block';
    };
      
    // Iterating Adults Fields according to the no. of adult selected on page 1
    const renderAdults = () => {
        const items = [];
        for (let i = 0; i < adults; i++) {
            const dob = formFields[i];
            const ageObj = calculateAge(dob);
            const age = ageObj.age;
            const nationality = (e, nationalityId) => {
                const nationality1 = e.target.value;
                const nationalityRow = document.getElementById(`shownationality-${nationalityId}`);
                const passportField = nationalityRow.querySelector('.passport-input');
                const expiryField = nationalityRow.querySelector('.expiry-input');
                if (nationality1 !== 'IN') {
                  nationalityRow.style.display = 'block';
                  passportField.required = true;
                  expiryField.required = true;
                } else {
                  nationalityRow.style.display = 'none';
                  passportField.required = false;
                  expiryField.required = false;
                }
            };
            
            if(triptype === 'One Way Trip'){
                const owDateObj = new Date(owDate);
        
                owDateObj.setFullYear(owDateObj.getFullYear() - 12);
        
                var minDate = owDateObj.toISOString().split('T')[0];
            }
        
            if(triptype === 'Round Trip'){
                const rt2DateObj = new Date(rt2Date);

                rt2DateObj.setFullYear(rt2DateObj.getFullYear() - 12);
        
                minDate = rt2DateObj.toISOString().split('T')[0];
            }
        
            if(triptype === 'Multiple Trip'){
                if(tripcount === 2){
                    const selectedDate1Obj = new Date(selectedDate1);
        
                    selectedDate1Obj.setFullYear(selectedDate1Obj.getFullYear() - 12);
            
                    minDate = selectedDate1Obj.toISOString().split('T')[0];
                }
                if(tripcount === 3){
                    const selectedDate2Obj = new Date(selectedDate2);
        
                    selectedDate2Obj.setFullYear(selectedDate2Obj.getFullYear() - 12);
            
                    minDate = selectedDate2Obj.toISOString().split('T')[0];
                }
                if(tripcount === 4){
                    const selectedDate3Obj = new Date(selectedDate3);
        
                    selectedDate3Obj.setFullYear(selectedDate3Obj.getFullYear() - 12);
            
                    minDate = selectedDate3Obj.toISOString().split('T')[0];
                }
                if(tripcount === 5){
                    const selectedDate4Obj = new Date(selectedDate4);
        
                    selectedDate4Obj.setFullYear(selectedDate4Obj.getFullYear() - 12);
            
                    minDate = selectedDate4Obj.toISOString().split('T')[0];
                }
            }
              
            items.push(
                <div key={i}>
                    <div className='row'>
                        <div className='col'>
                            <h5>Adult {i+1}</h5>
                        </div>
                    </div>
                    <div className='row gray'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Title</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" required>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="">Select</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Mr">Mr</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Master">Master</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Mrs">Mrs</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Miss">Miss</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label htmlFor="firstName" style={{fontSize:"16px"}}>First Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='First Name' required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Last Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='Last Name' required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Middle Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='Middle Name'/>
                        </div>
                    </div>
                    <div className='row gray'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Gender</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" required>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="">Select</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Male">Male</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Female">Female</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Other">Other</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>DOB</label>
                            <input type='date' className='form-control' style={{ height: '38px' }} max={minDate} value={dob || ''} onChange={(e) => handleDateChange(i, e.target.value)} required />
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Age</label>
                            <input type="text" className="form-control" style={{height:"38px"}} placeholder='Age' value={age} readOnly />
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Nationality</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" onChange={(e) => nationality(e, i)}>
                                    <option value="IN" selected="">India</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="PW">Belau</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo (Brazzaville)</option>
                                    <option value="CD">Congo (Kinshasa)</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and McDonald Islands</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="CI">Ivory Coast</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Laos</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia</option>
                                    <option value="MD">Moldova</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="KP">North Korea</option>
                                    <option value="MK">North Macedonia</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PS">Palestinian Territory</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russia</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="ST">São Tomé and Príncipe</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">Saint Helena</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="SX">Saint Martin (Dutch part)</option>
                                    <option value="MF">Saint Martin (French part)</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option><option value="SM">San Marino</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia/Sandwich Islands</option>
                                    <option value="KR">South Korea</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syria</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom (UK)</option>
                                    <option value="US">United States (US)</option>
                                    <option value="UM">United States (US) Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VA">Vatican</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="VG">Virgin Islands (British)</option>
                                    <option value="VI">Virgin Islands (US)</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='row gray' id={`shownationality-${i}`} style={{display:"none"}}>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label style={{ fontSize: "16px" }}>Passport No</label>
                                <input type='text' className="form-control passport-input" style={{ height: "38px" }} placeholder='Passport No'/>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label style={{ fontSize: "16px" }}>Expiry Date</label>
                                <input type='date' className='form-control expiry-input' min={minexpirydate} style={{ height: '38px' }}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
           );
        }            
        return items;
    };

    // Iterating Child Fields according to the no. of child selected on page 1
    const renderChild = () => {
        const items = [];
        for (let i = 0; i < child; i++) {
            const dob1 = formFieldschild[i];
            const ageObjchild = calculateAge1(dob1);
            const agechild = ageObjchild.age1;
            const nationality = (e, nationalityId) => {
                const nationality1 = e.target.value;
                const nationalityRow = document.getElementById(`showchildnationality-${nationalityId}`);
                const passportField = nationalityRow.querySelector('.passport-input');
                const expiryField = nationalityRow.querySelector('.expiry-input');
                if (nationality1 !== 'IN') {
                  nationalityRow.style.display = 'block';
                  passportField.required = true;
                  expiryField.required = true;
                } else {
                  nationalityRow.style.display = 'none';
                  passportField.required = false;
                  expiryField.required = false;
                }
            };

            if(triptype === 'One Way Trip'){
                const owDatechild = new Date(owDate);
                const owDatechild1 = new Date(owDate);

                owDatechild.setFullYear(owDatechild.getFullYear() - 12);
                owDatechild1.setFullYear(owDatechild1.getFullYear() - 2);
                // owDateinfant.setFullYear(owDateinfant.getFullYear() - 2);
                owDatechild.setDate(owDatechild.getDate() + 1);

                var minchildDate = owDatechild.toISOString().split('T')[0];
                var maxchildDate = owDatechild1.toISOString().split('T')[0];
            }
        
            if(triptype === 'Round Trip'){
                const rt2Datechild = new Date(rt2Date);
                const rt2Datechild1 = new Date(rt2Date);
        
                rt2Datechild.setFullYear(rt2Datechild.getFullYear() - 12);
                rt2Datechild1.setFullYear(rt2Datechild1.getFullYear() - 2);
                rt2Datechild.setDate(rt2Datechild.getDate() + 1);
        
                minchildDate = rt2Datechild.toISOString().split('T')[0];
                maxchildDate = rt2Datechild1.toISOString().split('T')[0];
            }
        
            if(triptype === 'Multiple Trip'){
                if(tripcount === 2){
                    const selectedDate1child = new Date(selectedDate1);
                    const selectedDate1child1 = new Date(selectedDate1);
            
                    selectedDate1child.setFullYear(selectedDate1child.getFullYear() - 12);
                    selectedDate1child1.setFullYear(selectedDate1child1.getFullYear() - 2);
                    selectedDate1child.setDate(selectedDate1child.getDate() + 1);
            
                    minchildDate = selectedDate1child.toISOString().split('T')[0];
                    maxchildDate = selectedDate1child1.toISOString().split('T')[0];
                }
                if(tripcount === 3){
                    const selectedDate2child = new Date(selectedDate2);
                    const selectedDate2child1 = new Date(selectedDate2);
            
                    selectedDate2child.setFullYear(selectedDate2child.getFullYear() - 12);
                    selectedDate2child1.setFullYear(selectedDate2child1.getFullYear() - 2);
                    selectedDate2child.setDate(selectedDate2child.getDate() + 1);
            
                    minchildDate = selectedDate2child.toISOString().split('T')[0];
                    maxchildDate = selectedDate2child1.toISOString().split('T')[0];
                }
                if(tripcount === 4){
                    const selectedDate3child = new Date(selectedDate3);
                    const selectedDate3child1 = new Date(selectedDate3);
            
                    selectedDate3child.setFullYear(selectedDate3child.getFullYear() - 12);
                    selectedDate3child1.setFullYear(selectedDate3child1.getFullYear() - 2);
                    selectedDate3child.setDate(selectedDate3child.getDate() + 1);
            
                    minchildDate = selectedDate3child.toISOString().split('T')[0];
                    maxchildDate = selectedDate3child1.toISOString().split('T')[0];
                }
                if(tripcount === 5){
                    const selectedDate4child = new Date(selectedDate4);
                    const selectedDate4child1 = new Date(selectedDate4);
            
                    selectedDate4child.setFullYear(selectedDate4child.getFullYear() - 12);
                    selectedDate4child1.setFullYear(selectedDate4child1.getFullYear() - 2);
                    selectedDate4child.setDate(selectedDate4child.getDate() + 1);
            
                    minchildDate = selectedDate4child.toISOString().split('T')[0];
                    maxchildDate = selectedDate4child1.toISOString().split('T')[0];
                }
            }

            items.push(
                <div key={i}>
                    <div className='row'>
                        <div className='col'>
                            <h5>Child {i+1}</h5>
                        </div>
                    </div>
                    <div className='row gray'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Title</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" required>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="">Select</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Master">Master</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Miss">Miss</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>First Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='First Name' required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Last Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='Last Name' required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Middle Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='Middle Name'/>
                        </div>
                    </div>
                    <div className='row gray'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Gender</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" required>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="">Select</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Male">Male</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Female">Female</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Other">Other</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>DOB</label>
                            <input type='date' className='form-control' style={{ height: '38px' }} min={minchildDate} max={maxchildDate} value={dob1 || ''} onChange={(e) => handleDateChangechild(i, e.target.value)} required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Age</label>
                            <input type="text" className="form-control" style={{height:"38px"}} placeholder='Age' value={agechild} readOnly />
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Nationality</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" onChange={(e) => nationality(e, i)}>
                                    <option value="IN" selected="">India</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="PW">Belau</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo (Brazzaville)</option>
                                    <option value="CD">Congo (Kinshasa)</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and McDonald Islands</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="CI">Ivory Coast</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Laos</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia</option>
                                    <option value="MD">Moldova</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="KP">North Korea</option>
                                    <option value="MK">North Macedonia</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PS">Palestinian Territory</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russia</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="ST">São Tomé and Príncipe</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">Saint Helena</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="SX">Saint Martin (Dutch part)</option>
                                    <option value="MF">Saint Martin (French part)</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option><option value="SM">San Marino</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia/Sandwich Islands</option>
                                    <option value="KR">South Korea</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syria</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom (UK)</option>
                                    <option value="US">United States (US)</option>
                                    <option value="UM">United States (US) Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VA">Vatican</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="VG">Virgin Islands (British)</option>
                                    <option value="VI">Virgin Islands (US)</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='row gray' id={`showchildnationality-${i}`} style={{display:"none"}}>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label style={{ fontSize: "16px" }}>Passport No</label>
                                <input type='text' className="form-control passport-input" style={{ height: "38px" }} placeholder='Passport No'/>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label style={{ fontSize: "16px" }}>Expiry Date</label>
                                <input type='date' className='form-control expiry-input' min={minexpirydate} style={{ height: '38px' }}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
           );
        }            
        return items;
    };  
    
    // Iterating Infant Fields according to the no. of infant selected on page 1
    const renderInfant = () => {
        const items = [];
        for (let i = 0; i < infant; i++) {
            const dob2 = formFieldsinfant[i];
            const ageObj = calculateAge2(dob2);
            const formattedAge = formatAge(ageObj);
            const nationality = (e, nationalityId) => {
                const nationality1 = e.target.value;
                const nationalityRow = document.getElementById(`showinfantnationality-${nationalityId}`);
                const passportField = nationalityRow.querySelector('.passport-input');
                const expiryField = nationalityRow.querySelector('.expiry-input');
                if (nationality1 !== 'IN') {
                  nationalityRow.style.display = 'block';
                  passportField.required = true;
                  expiryField.required = true;
                } else {
                  nationalityRow.style.display = 'none';
                  passportField.required = false;
                  expiryField.required = false;
                }
            };

            if(triptype === 'One Way Trip'){
                const owDateinfant = new Date(owDate);

                owDateinfant.setFullYear(owDateinfant.getFullYear() - 2);
                owDateinfant.setDate(owDateinfant.getDate() + 1);
        
                var mininfantDate = owDateinfant.toISOString().split('T')[0];
            }
        
            if(triptype === 'Round Trip'){
                const rt2Dateinfant = new Date(rt2Date);

                rt2Dateinfant.setFullYear(rt2Dateinfant.getFullYear() - 2);
                rt2Dateinfant.setDate(rt2Dateinfant.getDate() + 1);
        
                mininfantDate = rt2Dateinfant.toISOString().split('T')[0];
            }
        
            if(triptype === 'Multiple Trip'){
                if(tripcount === 2){
                    const selectedDate1infant = new Date(selectedDate1);

                    selectedDate1infant.setFullYear(selectedDate1infant.getFullYear() - 2);
                    selectedDate1infant.setDate(selectedDate1infant.getDate() + 1);
            
                    mininfantDate = selectedDate1infant.toISOString().split('T')[0];
                }
                if(tripcount === 3){
                    const selectedDate2infant = new Date(selectedDate2);

                    selectedDate2infant.setFullYear(selectedDate2infant.getFullYear() - 2);
                    selectedDate2infant.setDate(selectedDate2infant.getDate() + 1);
            
                    mininfantDate = selectedDate2infant.toISOString().split('T')[0];
                }
                if(tripcount === 4){
                    const selectedDate3infant = new Date(selectedDate3);

                    selectedDate3infant.setFullYear(selectedDate3infant.getFullYear() - 2);
                    selectedDate3infant.setDate(selectedDate3infant.getDate() + 1);
            
                    mininfantDate = selectedDate3infant.toISOString().split('T')[0];
                }
                if(tripcount === 5){
                    const selectedDate4infant = new Date(selectedDate4);

                    selectedDate4infant.setFullYear(selectedDate4infant.getFullYear() - 2);
                    selectedDate4infant.setDate(selectedDate4infant.getDate() + 1);
            
                    mininfantDate = selectedDate4infant.toISOString().split('T')[0];  
                }
            }

            items.push(
                <div key={i}>
                    <div className='row'>
                        <div className='col'>
                            <h5>Infant {i+1}</h5>
                        </div>
                    </div>
                    <div className='row gray'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Title</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" required>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="">Select</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Master">Master</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Miss">Miss</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>First Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='First Name' required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Last Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='Last Name' required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Middle Name</label>
                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='Middle Name'/>
                        </div>
                    </div>
                    <div className='row gray'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Gender</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" required>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="">Select</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Male">Male</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Female">Female</option>
                                    <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Other">Other</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>DOB</label>
                            <input type='date' className='form-control' style={{ height: '38px' }} min={mininfantDate} value={dob2 || ''} onChange={(e) => handleDateChangeinfant(i, e.target.value)} required/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Age</label>
                            <input type="text" className="form-control" style={{height:"38px"}} placeholder='Age' value={formattedAge} readOnly />
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <label style={{fontSize:"16px"}}>Nationality</label>
                            <div className="input-group input-from mb-3">
                                <select className="form-control" onChange={(e) => nationality(e, i)}>
                                    <option value="IN" selected="">India</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="PW">Belau</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo (Brazzaville)</option>
                                    <option value="CD">Congo (Kinshasa)</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and McDonald Islands</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="CI">Ivory Coast</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Laos</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia</option>
                                    <option value="MD">Moldova</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="KP">North Korea</option>
                                    <option value="MK">North Macedonia</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PS">Palestinian Territory</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russia</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="ST">São Tomé and Príncipe</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">Saint Helena</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="SX">Saint Martin (Dutch part)</option>
                                    <option value="MF">Saint Martin (French part)</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option><option value="SM">San Marino</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia/Sandwich Islands</option>
                                    <option value="KR">South Korea</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syria</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom (UK)</option>
                                    <option value="US">United States (US)</option>
                                    <option value="UM">United States (US) Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VA">Vatican</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="VG">Virgin Islands (British)</option>
                                    <option value="VI">Virgin Islands (US)</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                </select>
                                <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='row gray' id={`showinfantnationality-${i}`} style={{display:"none"}}>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label style={{ fontSize: "16px" }}>Passport No</label>
                                <input type='text' className="form-control passport-input" style={{ height: "38px" }} placeholder='Passport No'/>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <label style={{ fontSize: "16px" }}>Expiry Date</label>
                                <input type='date' className='form-control expiry-input' min={minexpirydate} style={{ height: '38px'}} />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
           );
        }            
        return items;
    };

    // Trip Summary Content...
    let rendertrip;
    let minexpirydate;
    if(triptype === 'One Way Trip'){
        minexpirydate = owDate;
        rendertrip = <>
            <div className='container' id='travellers-details' style={{width:"145%"}}>
                <div className='row'>
                    <div className='col-3'>
                        <h6>Trip - 1:</h6>
                    </div>
                    <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{owfrom} &rarr; {owto}</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Date:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{owDate}</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Time:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Ferry:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Total fare:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                    </div>
                </div>
            </div>
        </>
    }
    else if(triptype === 'Round Trip'){
        minexpirydate = rt2Date;
        rendertrip = <>
            <div className='container' id='travellers-details' style={{width:"145%"}}>
                <div className='row'>
                    <div className='col-3'>
                        <h6>Trip - 1:</h6>
                    </div>
                    <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{rtfrom} &rarr; {rtto}</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Date:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{rt1Date}</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Time:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Ferry:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Total fare:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                    </div>
                </div>
            </div>
            <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                <div className='row'>
                    <div className='col-3'>
                        <h6>Trip - 2:</h6>
                    </div>
                    <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{rtto} &rarr; {rtfrom}</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Date:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{rt2Date}</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Time:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Ferry:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p style={{float:"right"}}>Total fare:</p>
                    </div>
                    <div className='col'>
                        <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                    </div>
                </div>
            </div>
        </>
    }
    else if(triptype === 'Multiple Trip'){
        if(tripcount === 2){
            minexpirydate = selectedDate1;
            rendertrip = <>
                <div className='container' id='travellers-details' style={{width:"145%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 1:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{from} &rarr; {to}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 2:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to} &rarr; {to1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
            </>
        }
        else if(tripcount === 3){
            minexpirydate = selectedDate2;
            rendertrip = <>
                <div className='container' id='travellers-details' style={{width:"145%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 1:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{from} &rarr; {to}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 2:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to} &rarr; {to1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 3:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to1} &rarr; {to2}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate2}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
            </>
        }
        else if(tripcount === 4){
            minexpirydate = selectedDate3;
            rendertrip = <>
                <div className='container' id='travellers-details' style={{width:"145%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 1:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{from} &rarr; {to}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 2:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to} &rarr; {to1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 3:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to1} &rarr; {to2}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate2}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 4:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to2} &rarr; {to3}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate3}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
            </>
        }
        else if(tripcount === 5){
            minexpirydate = selectedDate4;
            rendertrip = <>
                <div className='container' id='travellers-details' style={{width:"145%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 1:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{from} &rarr; {to}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 2:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to} &rarr; {to1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate1}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 3:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to1} &rarr; {to2}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate2}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 4:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to2} &rarr; {to3}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate3}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
                <div className='container' id='travellers-details' style={{width:"145%", marginTop:"5%"}}>
                    <div className='row'>
                        <div className='col-3'>
                            <h6>Trip - 5:</h6>
                        </div>
                        <div className='col' style={{textTransform:"uppercase", backgroundColor:"#05f5ed",textAlign:"center", marginLeft:"-4%"}}>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{to3} &rarr; {to4}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Date:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>{selectedDate4}</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Time:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>Time</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Ferry:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>ferry</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <p style={{float:"right"}}>Total fare:</p>
                        </div>
                        <div className='col'>
                            <h6 style={{fontSize:"13px",paddingTop:"5px",float:"left"}}>date</h6>
                        </div>
                    </div>
                </div>
            </>
        }
    }
    
    return (
        <>
            <div style={{backgroundColor:"rgb(246, 246, 250)",height:"max-content"}} id='hidetravellersdetails'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='fluid-container'>
                                <div className='row'>
                                    <form className= 'col-lg-9 col-md-12 col-sm-12' onSubmit={handleProceed} style={{marginLeft:"-3.5%"}}>
                                        <h2>Add Traveller(s) Details</h2>
                                        <div action='' id='travellers-details'>
                                            {renderAdults()}
                                            {renderChild()}
                                            {renderInfant()}
                                        </div>
                                        <div className='container' style={{marginTop:"5%"}}>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h2>Add Contact Details</h2>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div action='' id='travellers-details'>
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                                                <label className='gray' style={{fontSize:"14px"}}>Full Name</label>
                                                                <input type='text' className="form-control" style={{height:"38px"}} placeholder='First Name' required />
                                                            </div>
                                                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                                                <label className='gray' style={{fontSize:"14px"}}>Email</label>
                                                                <input type='email' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.*" className="form-control" style={{height:"38px"}} placeholder='Email' required onInvalid={(e) => e.target.setCustomValidity('Please enter a valid email address with a dot.')} onInput={(e) => e.target.setCustomValidity('')} />
                                                            </div>
                                                        </div>
                                                        <div className='row' style={{marginTop:"1%"}}>
                                                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                                                <label className='gray'>Mobile No</label>
                                                                <div className="form-group">
                                                                    <div className="row">
                                                                        <div className="col-4">
                                                                            <select className="form-control">
                                                                                <option value="IN" selected="">IN &nbsp; +91</option>
                                                                                <option value="AF+93">
                                                                                    AF&nbsp;&nbsp; +93 
                                                                                    </option><option value="AX+358">
                                                                                    AX&nbsp;&nbsp; +358 
                                                                                    </option><option value="AL+355">
                                                                                    AL&nbsp;&nbsp; +355 
                                                                                    </option><option value="DZ+213">
                                                                                    DZ&nbsp;&nbsp; +213 
                                                                                    </option><option value="AS+1684">
                                                                                    AS&nbsp;&nbsp; +1684 
                                                                                    </option><option value="AD+376">
                                                                                    AD&nbsp;&nbsp; +376 
                                                                                    </option><option value="AO+244">
                                                                                    AO&nbsp;&nbsp; +244 
                                                                                    </option><option value="AI+1264">
                                                                                    AI&nbsp;&nbsp; +1264 
                                                                                    </option><option value="AQ+672">
                                                                                    AQ&nbsp;&nbsp; +672 
                                                                                    </option><option value="AG+1268">
                                                                                    AG&nbsp;&nbsp; +1268 
                                                                                    </option><option value="AR+54">
                                                                                    AR&nbsp;&nbsp; +54 
                                                                                    </option><option value="AM+374">
                                                                                    AM&nbsp;&nbsp; +374 
                                                                                    </option><option value="AW+297">
                                                                                    AW&nbsp;&nbsp; +297 
                                                                                    </option><option value="AU+61">
                                                                                    AU&nbsp;&nbsp; +61 
                                                                                    </option><option value="AT+43">
                                                                                    AT&nbsp;&nbsp; +43 
                                                                                    </option><option value="AZ+994">
                                                                                    AZ&nbsp;&nbsp; +994 
                                                                                    </option><option value="BS+1242">
                                                                                    BS&nbsp;&nbsp; +1242 
                                                                                    </option><option value="BH+973">
                                                                                    BH&nbsp;&nbsp; +973 
                                                                                    </option><option value="BD+880">
                                                                                    BD&nbsp;&nbsp; +880 
                                                                                    </option><option value="BB+1246">
                                                                                    BB&nbsp;&nbsp; +1246 
                                                                                    </option><option value="BY+375">
                                                                                    BY&nbsp;&nbsp; +375 
                                                                                    </option><option value="BE+32">
                                                                                    BE&nbsp;&nbsp; +32 
                                                                                    </option><option value="BZ+501">
                                                                                    BZ&nbsp;&nbsp; +501 
                                                                                    </option><option value="BJ+229">
                                                                                    BJ&nbsp;&nbsp; +229 
                                                                                    </option><option value="BM+1441">
                                                                                    BM&nbsp;&nbsp; +1441 
                                                                                    </option><option value="BT+975">
                                                                                    BT&nbsp;&nbsp; +975 
                                                                                    </option><option value="BO+591">
                                                                                    BO&nbsp;&nbsp; +591 
                                                                                    </option><option value="BA+387">
                                                                                    BA&nbsp;&nbsp; +387 
                                                                                    </option><option value="BW+267">
                                                                                    BW&nbsp;&nbsp; +267 
                                                                                    </option><option value="BR+55">
                                                                                    BR&nbsp;&nbsp; +55 
                                                                                    </option><option value="IO+246">
                                                                                    IO&nbsp;&nbsp; +246 
                                                                                    </option><option value="BN+673">
                                                                                    BN&nbsp;&nbsp; +673 
                                                                                    </option><option value="BG+359">
                                                                                    BG&nbsp;&nbsp; +359 
                                                                                    </option><option value="BF+226">
                                                                                    BF&nbsp;&nbsp; +226 
                                                                                    </option><option value="BI+257">
                                                                                    BI&nbsp;&nbsp; +257 
                                                                                    </option><option value="KH+855">
                                                                                    KH&nbsp;&nbsp; +855 
                                                                                    </option><option value="CM+237">
                                                                                    CM&nbsp;&nbsp; +237 
                                                                                    </option><option value="CA+1">
                                                                                    CA&nbsp;&nbsp; +1 
                                                                                    </option><option value="CV+238">
                                                                                    CV&nbsp;&nbsp; +238 
                                                                                    </option><option value="KY+ 345">
                                                                                    KY&nbsp;&nbsp; + 345 
                                                                                    </option><option value="CF+236">
                                                                                    CF&nbsp;&nbsp; +236 
                                                                                    </option><option value="TD+235">
                                                                                    TD&nbsp;&nbsp; +235 
                                                                                    </option><option value="CL+56">
                                                                                    CL&nbsp;&nbsp; +56 
                                                                                    </option><option value="CN+86">
                                                                                    CN&nbsp;&nbsp; +86 
                                                                                    </option><option value="CX+61">
                                                                                    CX&nbsp;&nbsp; +61 
                                                                                    </option><option value="CC+61">
                                                                                    CC&nbsp;&nbsp; +61 
                                                                                    </option><option value="CO+57">
                                                                                    CO&nbsp;&nbsp; +57 
                                                                                    </option><option value="KM+269">
                                                                                    KM&nbsp;&nbsp; +269 
                                                                                    </option><option value="CG+242">
                                                                                    CG&nbsp;&nbsp; +242 
                                                                                    </option><option value="CD+243">
                                                                                    CD&nbsp;&nbsp; +243 
                                                                                    </option><option value="CK+682">
                                                                                    CK&nbsp;&nbsp; +682 
                                                                                    </option><option value="CR+506">
                                                                                    CR&nbsp;&nbsp; +506 
                                                                                    </option><option value="CI+225">
                                                                                    CI&nbsp;&nbsp; +225 
                                                                                    </option><option value="HR+385">
                                                                                    HR&nbsp;&nbsp; +385 
                                                                                    </option><option value="CU+53">
                                                                                    CU&nbsp;&nbsp; +53 
                                                                                    </option><option value="CY+357">
                                                                                    CY&nbsp;&nbsp; +357 
                                                                                    </option><option value="CZ+420">
                                                                                    CZ&nbsp;&nbsp; +420 
                                                                                    </option><option value="DK+45">
                                                                                    DK&nbsp;&nbsp; +45 
                                                                                    </option><option value="DJ+253">
                                                                                    DJ&nbsp;&nbsp; +253 
                                                                                    </option><option value="DM+1767">
                                                                                    DM&nbsp;&nbsp; +1767 
                                                                                    </option><option value="DO+1849">
                                                                                    DO&nbsp;&nbsp; +1849 
                                                                                    </option><option value="EC+593">
                                                                                    EC&nbsp;&nbsp; +593 
                                                                                    </option><option value="EG+20">
                                                                                    EG&nbsp;&nbsp; +20 
                                                                                    </option><option value="SV+503">
                                                                                    SV&nbsp;&nbsp; +503 
                                                                                    </option><option value="GQ+240">
                                                                                    GQ&nbsp;&nbsp; +240 
                                                                                    </option><option value="ER+291">
                                                                                    ER&nbsp;&nbsp; +291 
                                                                                    </option><option value="EE+372">
                                                                                    EE&nbsp;&nbsp; +372 
                                                                                    </option><option value="ET+251">
                                                                                    ET&nbsp;&nbsp; +251 
                                                                                    </option><option value="FK+500">
                                                                                    FK&nbsp;&nbsp; +500 
                                                                                    </option><option value="FO+298">
                                                                                    FO&nbsp;&nbsp; +298 
                                                                                    </option><option value="FJ+679">
                                                                                    FJ&nbsp;&nbsp; +679 
                                                                                    </option><option value="FI+358">
                                                                                    FI&nbsp;&nbsp; +358 
                                                                                    </option><option value="FR+33">
                                                                                    FR&nbsp;&nbsp; +33 
                                                                                    </option><option value="GF+594">
                                                                                    GF&nbsp;&nbsp; +594 
                                                                                    </option><option value="PF+689">
                                                                                    PF&nbsp;&nbsp; +689 
                                                                                    </option><option value="GA+241">
                                                                                    GA&nbsp;&nbsp; +241 
                                                                                    </option><option value="GM+220">
                                                                                    GM&nbsp;&nbsp; +220 
                                                                                    </option><option value="GE+995">
                                                                                    GE&nbsp;&nbsp; +995 
                                                                                    </option><option value="DE+49">
                                                                                    DE&nbsp;&nbsp; +49 
                                                                                    </option><option value="GH+233">
                                                                                    GH&nbsp;&nbsp; +233 
                                                                                    </option><option value="GI+350">
                                                                                    GI&nbsp;&nbsp; +350 
                                                                                    </option><option value="GR+30">
                                                                                    GR&nbsp;&nbsp; +30 
                                                                                    </option><option value="GL+299">
                                                                                    GL&nbsp;&nbsp; +299 
                                                                                    </option><option value="GD+1473">
                                                                                    GD&nbsp;&nbsp; +1473 
                                                                                    </option><option value="GP+590">
                                                                                    GP&nbsp;&nbsp; +590 
                                                                                    </option><option value="GU+1671">
                                                                                    GU&nbsp;&nbsp; +1671 
                                                                                    </option><option value="GT+502">
                                                                                    GT&nbsp;&nbsp; +502 
                                                                                    </option><option value="GG+44">
                                                                                    GG&nbsp;&nbsp; +44 
                                                                                    </option><option value="GN+224">
                                                                                    GN&nbsp;&nbsp; +224 
                                                                                    </option><option value="GW+245">
                                                                                    GW&nbsp;&nbsp; +245 
                                                                                    </option><option value="GY+595">
                                                                                    GY&nbsp;&nbsp; +595 
                                                                                    </option><option value="HT+509">
                                                                                    HT&nbsp;&nbsp; +509 
                                                                                    </option><option value="VA+379">
                                                                                    VA&nbsp;&nbsp; +379 
                                                                                    </option><option value="HN+504">
                                                                                    HN&nbsp;&nbsp; +504 
                                                                                    </option><option value="HK+852">
                                                                                    HK&nbsp;&nbsp; +852 
                                                                                    </option><option value="HU+36">
                                                                                    HU&nbsp;&nbsp; +36 
                                                                                    </option><option value="IS+354">
                                                                                    IS&nbsp;&nbsp; +354 
                                                                                    </option><option value="IN+91">
                                                                                    IN&nbsp;&nbsp; +91 
                                                                                    </option><option value="ID+62">
                                                                                    ID&nbsp;&nbsp; +62 
                                                                                    </option><option value="IR+98">
                                                                                    IR&nbsp;&nbsp; +98 
                                                                                    </option><option value="IQ+964">
                                                                                    IQ&nbsp;&nbsp; +964 
                                                                                    </option><option value="IE+353">
                                                                                    IE&nbsp;&nbsp; +353 
                                                                                    </option><option value="IM+44">
                                                                                    IM&nbsp;&nbsp; +44 
                                                                                    </option><option value="IL+972">
                                                                                    IL&nbsp;&nbsp; +972 
                                                                                    </option><option value="IT+39">
                                                                                    IT&nbsp;&nbsp; +39 
                                                                                    </option><option value="JM+1876">
                                                                                    JM&nbsp;&nbsp; +1876 
                                                                                    </option><option value="JP+81">
                                                                                    JP&nbsp;&nbsp; +81 
                                                                                    </option><option value="JE+44">
                                                                                    JE&nbsp;&nbsp; +44 
                                                                                    </option><option value="JO+962">
                                                                                    JO&nbsp;&nbsp; +962 
                                                                                    </option><option value="KZ+77">
                                                                                    KZ&nbsp;&nbsp; +77 
                                                                                    </option><option value="KE+254">
                                                                                    KE&nbsp;&nbsp; +254 
                                                                                    </option><option value="KI+686">
                                                                                    KI&nbsp;&nbsp; +686 
                                                                                    </option><option value="KP+850">
                                                                                    KP&nbsp;&nbsp; +850 
                                                                                    </option><option value="KR+82">
                                                                                    KR&nbsp;&nbsp; +82 
                                                                                    </option><option value="KW+965">
                                                                                    KW&nbsp;&nbsp; +965 
                                                                                    </option><option value="KG+996">
                                                                                    KG&nbsp;&nbsp; +996 
                                                                                    </option><option value="LA+856">
                                                                                    LA&nbsp;&nbsp; +856 
                                                                                    </option><option value="LV+371">
                                                                                    LV&nbsp;&nbsp; +371 
                                                                                    </option><option value="LB+961">
                                                                                    LB&nbsp;&nbsp; +961 
                                                                                    </option><option value="LS+266">
                                                                                    LS&nbsp;&nbsp; +266 
                                                                                    </option><option value="LR+231">
                                                                                    LR&nbsp;&nbsp; +231 
                                                                                    </option><option value="LY+218">
                                                                                    LY&nbsp;&nbsp; +218 
                                                                                    </option><option value="LI+423">
                                                                                    LI&nbsp;&nbsp; +423 
                                                                                    </option><option value="LT+370">
                                                                                    LT&nbsp;&nbsp; +370 
                                                                                    </option><option value="LU+352">
                                                                                    LU&nbsp;&nbsp; +352 
                                                                                    </option><option value="MO+853">
                                                                                    MO&nbsp;&nbsp; +853 
                                                                                    </option><option value="MK+389">
                                                                                    MK&nbsp;&nbsp; +389 
                                                                                    </option><option value="MG+261">
                                                                                    MG&nbsp;&nbsp; +261 
                                                                                    </option><option value="MW+265">
                                                                                    MW&nbsp;&nbsp; +265 
                                                                                    </option><option value="MY+60">
                                                                                    MY&nbsp;&nbsp; +60 
                                                                                    </option><option value="MV+960">
                                                                                    MV&nbsp;&nbsp; +960 
                                                                                    </option><option value="ML+223">
                                                                                    ML&nbsp;&nbsp; +223 
                                                                                    </option><option value="MT+356">
                                                                                    MT&nbsp;&nbsp; +356 
                                                                                    </option><option value="MH+692">
                                                                                    MH&nbsp;&nbsp; +692 
                                                                                    </option><option value="MQ+596">
                                                                                    MQ&nbsp;&nbsp; +596 
                                                                                    </option><option value="MR+222">
                                                                                    MR&nbsp;&nbsp; +222 
                                                                                    </option><option value="MU+230">
                                                                                    MU&nbsp;&nbsp; +230 
                                                                                    </option><option value="YT+262">
                                                                                    YT&nbsp;&nbsp; +262 
                                                                                    </option><option value="MX+52">
                                                                                    MX&nbsp;&nbsp; +52 
                                                                                    </option><option value="FM+691">
                                                                                    FM&nbsp;&nbsp; +691 
                                                                                    </option><option value="MD+373">
                                                                                    MD&nbsp;&nbsp; +373 
                                                                                    </option><option value="MC+377">
                                                                                    MC&nbsp;&nbsp; +377 
                                                                                    </option><option value="MN+976">
                                                                                    MN&nbsp;&nbsp; +976 
                                                                                    </option><option value="ME+382">
                                                                                    ME&nbsp;&nbsp; +382 
                                                                                    </option><option value="MS+1664">
                                                                                    MS&nbsp;&nbsp; +1664 
                                                                                    </option><option value="MA+212">
                                                                                    MA&nbsp;&nbsp; +212 
                                                                                    </option><option value="MZ+258">
                                                                                    MZ&nbsp;&nbsp; +258 
                                                                                    </option><option value="MM+95">
                                                                                    MM&nbsp;&nbsp; +95 
                                                                                    </option><option value="NA+264">
                                                                                    NA&nbsp;&nbsp; +264 
                                                                                    </option><option value="NR+674">
                                                                                    NR&nbsp;&nbsp; +674 
                                                                                    </option><option value="NP+977">
                                                                                    NP&nbsp;&nbsp; +977 
                                                                                    </option><option value="NL+31">
                                                                                    NL&nbsp;&nbsp; +31 
                                                                                    </option><option value="AN+599">
                                                                                    AN&nbsp;&nbsp; +599 
                                                                                    </option><option value="NC+687">
                                                                                    NC&nbsp;&nbsp; +687 
                                                                                    </option><option value="NZ+64">
                                                                                    NZ&nbsp;&nbsp; +64 
                                                                                    </option><option value="NI+505">
                                                                                    NI&nbsp;&nbsp; +505 
                                                                                    </option><option value="NE+227">
                                                                                    NE&nbsp;&nbsp; +227 
                                                                                    </option><option value="NG+234">
                                                                                    NG&nbsp;&nbsp; +234 
                                                                                    </option><option value="NU+683">
                                                                                    NU&nbsp;&nbsp; +683 
                                                                                    </option><option value="NF+672">
                                                                                    NF&nbsp;&nbsp; +672 
                                                                                    </option><option value="MP+1670">
                                                                                    MP&nbsp;&nbsp; +1670 
                                                                                    </option><option value="NO+47">
                                                                                    NO&nbsp;&nbsp; +47 
                                                                                    </option><option value="OM+968">
                                                                                    OM&nbsp;&nbsp; +968 
                                                                                    </option><option value="PK+92">
                                                                                    PK&nbsp;&nbsp; +92 
                                                                                    </option><option value="PW+680">
                                                                                    PW&nbsp;&nbsp; +680 
                                                                                    </option><option value="PS+970">
                                                                                    PS&nbsp;&nbsp; +970 
                                                                                    </option><option value="PA+507">
                                                                                    PA&nbsp;&nbsp; +507 
                                                                                    </option><option value="PG+675">
                                                                                    PG&nbsp;&nbsp; +675 
                                                                                    </option><option value="PY+595">
                                                                                    PY&nbsp;&nbsp; +595 
                                                                                    </option><option value="PE+51">
                                                                                    PE&nbsp;&nbsp; +51 
                                                                                    </option><option value="PH+63">
                                                                                    PH&nbsp;&nbsp; +63 
                                                                                    </option><option value="PN+872">
                                                                                    PN&nbsp;&nbsp; +872 
                                                                                    </option><option value="PL+48">
                                                                                    PL&nbsp;&nbsp; +48 
                                                                                    </option><option value="PT+351">
                                                                                    PT&nbsp;&nbsp; +351 
                                                                                    </option><option value="PR+1939">
                                                                                    PR&nbsp;&nbsp; +1939 
                                                                                    </option><option value="QA+974">
                                                                                    QA&nbsp;&nbsp; +974 
                                                                                    </option><option value="RO+40">
                                                                                    RO&nbsp;&nbsp; +40 
                                                                                    </option><option value="RU+7">
                                                                                    RU&nbsp;&nbsp; +7 
                                                                                    </option><option value="RW+250">
                                                                                    RW&nbsp;&nbsp; +250 
                                                                                    </option><option value="RE+262">
                                                                                    RE&nbsp;&nbsp; +262 
                                                                                    </option><option value="BL+590">
                                                                                    BL&nbsp;&nbsp; +590 
                                                                                    </option><option value="SH+290">
                                                                                    SH&nbsp;&nbsp; +290 
                                                                                    </option><option value="KN+1869">
                                                                                    KN&nbsp;&nbsp; +1869 
                                                                                    </option><option value="LC+1758">
                                                                                    LC&nbsp;&nbsp; +1758 
                                                                                    </option><option value="MF+590">
                                                                                    MF&nbsp;&nbsp; +590 
                                                                                    </option><option value="PM+508">
                                                                                    PM&nbsp;&nbsp; +508 
                                                                                    </option><option value="VC+1784">
                                                                                    VC&nbsp;&nbsp; +1784 
                                                                                    </option><option value="WS+685">
                                                                                    WS&nbsp;&nbsp; +685 
                                                                                    </option><option value="SM+378">
                                                                                    SM&nbsp;&nbsp; +378 
                                                                                    </option><option value="ST+239">
                                                                                    ST&nbsp;&nbsp; +239 
                                                                                    </option><option value="SA+966">
                                                                                    SA&nbsp;&nbsp; +966 
                                                                                    </option><option value="SN+221">
                                                                                    SN&nbsp;&nbsp; +221 
                                                                                    </option><option value="RS+381">
                                                                                    RS&nbsp;&nbsp; +381 
                                                                                    </option><option value="SC+248">
                                                                                    SC&nbsp;&nbsp; +248 
                                                                                    </option><option value="SL+232">
                                                                                    SL&nbsp;&nbsp; +232 
                                                                                    </option><option value="SG+65">
                                                                                    SG&nbsp;&nbsp; +65 
                                                                                    </option><option value="SK+421">
                                                                                    SK&nbsp;&nbsp; +421 
                                                                                    </option><option value="SI+386">
                                                                                    SI&nbsp;&nbsp; +386 
                                                                                    </option><option value="SB+677">
                                                                                    SB&nbsp;&nbsp; +677 
                                                                                    </option><option value="SO+252">
                                                                                    SO&nbsp;&nbsp; +252 
                                                                                    </option><option value="ZA+27">
                                                                                    ZA&nbsp;&nbsp; +27 
                                                                                    </option><option value="SS+211">
                                                                                    SS&nbsp;&nbsp; +211 
                                                                                    </option><option value="GS+500">
                                                                                    GS&nbsp;&nbsp; +500 
                                                                                    </option><option value="ES+34">
                                                                                    ES&nbsp;&nbsp; +34 
                                                                                    </option><option value="LK+94">
                                                                                    LK&nbsp;&nbsp; +94 
                                                                                    </option><option value="SD+249">
                                                                                    SD&nbsp;&nbsp; +249 
                                                                                    </option><option value="SR+597">
                                                                                    SR&nbsp;&nbsp; +597 
                                                                                    </option><option value="SJ+47">
                                                                                    SJ&nbsp;&nbsp; +47 
                                                                                    </option><option value="SZ+268">
                                                                                    SZ&nbsp;&nbsp; +268 
                                                                                    </option><option value="SE+46">
                                                                                    SE&nbsp;&nbsp; +46 
                                                                                    </option><option value="CH+41">
                                                                                    CH&nbsp;&nbsp; +41 
                                                                                    </option><option value="SY+963">
                                                                                    SY&nbsp;&nbsp; +963 
                                                                                    </option><option value="TW+886">
                                                                                    TW&nbsp;&nbsp; +886 
                                                                                    </option><option value="TJ+992">
                                                                                    TJ&nbsp;&nbsp; +992 
                                                                                    </option><option value="TZ+255">
                                                                                    TZ&nbsp;&nbsp; +255 
                                                                                    </option><option value="TH+66">
                                                                                    TH&nbsp;&nbsp; +66 
                                                                                    </option><option value="TL+670">
                                                                                    TL&nbsp;&nbsp; +670 
                                                                                    </option><option value="TG+228">
                                                                                    TG&nbsp;&nbsp; +228 
                                                                                    </option><option value="TK+690">
                                                                                    TK&nbsp;&nbsp; +690 
                                                                                    </option><option value="TO+676">
                                                                                    TO&nbsp;&nbsp; +676 
                                                                                    </option><option value="TT+1868">
                                                                                    TT&nbsp;&nbsp; +1868 
                                                                                    </option><option value="TN+216">
                                                                                    TN&nbsp;&nbsp; +216 
                                                                                    </option><option value="TR+90">
                                                                                    TR&nbsp;&nbsp; +90 
                                                                                    </option><option value="TM+993">
                                                                                    TM&nbsp;&nbsp; +993 
                                                                                    </option><option value="TC+1649">
                                                                                    TC&nbsp;&nbsp; +1649 
                                                                                    </option><option value="TV+688">
                                                                                    TV&nbsp;&nbsp; +688 
                                                                                    </option><option value="UG+256">
                                                                                    UG&nbsp;&nbsp; +256 
                                                                                    </option><option value="UA+380">
                                                                                    UA&nbsp;&nbsp; +380 
                                                                                    </option><option value="AE+971">
                                                                                    AE&nbsp;&nbsp; +971 
                                                                                    </option><option value="GB+44">
                                                                                    GB&nbsp;&nbsp; +44 
                                                                                    </option><option value="US+1">
                                                                                    US&nbsp;&nbsp; +1 
                                                                                    </option><option value="UY+598">
                                                                                    UY&nbsp;&nbsp; +598 
                                                                                    </option><option value="UZ+998">
                                                                                    UZ&nbsp;&nbsp; +998 
                                                                                    </option><option value="VU+678">
                                                                                    VU&nbsp;&nbsp; +678 
                                                                                    </option><option value="VE+58">
                                                                                    VE&nbsp;&nbsp; +58 
                                                                                    </option><option value="VN+84">
                                                                                    VN&nbsp;&nbsp; +84 
                                                                                    </option><option value="VG+1284">
                                                                                    VG&nbsp;&nbsp; +1284 
                                                                                    </option><option value="VI+1340">
                                                                                    VI&nbsp;&nbsp; +1340 
                                                                                    </option><option value="WF+681">
                                                                                    WF&nbsp;&nbsp; +681 
                                                                                    </option><option value="YE+967">
                                                                                    YE&nbsp;&nbsp; +967 
                                                                                    </option><option value="ZM+260">
                                                                                    ZM&nbsp;&nbsp; +260 
                                                                                    </option><option value="ZW+263">
                                                                                    ZW&nbsp;&nbsp; +263 
                                                                                    </option>
                                                                            </select>
                                                                        </div>
                                                                        <div className='col-8'>
                                                                            <input type='tel' pattern="[0-9]*" className="form-control" style={{height:"38px"}} placeholder='Mobile No' required/>
                                                                        </div>                                                                                                                            
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                                                <label className='gray'>Alternate No</label>
                                                                <div className="form-group">
                                                                    <div className="row">
                                                                        <div className="col-4">
                                                                            <select className="form-control">
                                                                                <option value="IN" selected="">IN &nbsp; +91</option>
                                                                                <option value="AF+93">
                                                                                    AF&nbsp;&nbsp; +93 
                                                                                    </option><option value="AX+358">
                                                                                    AX&nbsp;&nbsp; +358 
                                                                                    </option><option value="AL+355">
                                                                                    AL&nbsp;&nbsp; +355 
                                                                                    </option><option value="DZ+213">
                                                                                    DZ&nbsp;&nbsp; +213 
                                                                                    </option><option value="AS+1684">
                                                                                    AS&nbsp;&nbsp; +1684 
                                                                                    </option><option value="AD+376">
                                                                                    AD&nbsp;&nbsp; +376 
                                                                                    </option><option value="AO+244">
                                                                                    AO&nbsp;&nbsp; +244 
                                                                                    </option><option value="AI+1264">
                                                                                    AI&nbsp;&nbsp; +1264 
                                                                                    </option><option value="AQ+672">
                                                                                    AQ&nbsp;&nbsp; +672 
                                                                                    </option><option value="AG+1268">
                                                                                    AG&nbsp;&nbsp; +1268 
                                                                                    </option><option value="AR+54">
                                                                                    AR&nbsp;&nbsp; +54 
                                                                                    </option><option value="AM+374">
                                                                                    AM&nbsp;&nbsp; +374 
                                                                                    </option><option value="AW+297">
                                                                                    AW&nbsp;&nbsp; +297 
                                                                                    </option><option value="AU+61">
                                                                                    AU&nbsp;&nbsp; +61 
                                                                                    </option><option value="AT+43">
                                                                                    AT&nbsp;&nbsp; +43 
                                                                                    </option><option value="AZ+994">
                                                                                    AZ&nbsp;&nbsp; +994 
                                                                                    </option><option value="BS+1242">
                                                                                    BS&nbsp;&nbsp; +1242 
                                                                                    </option><option value="BH+973">
                                                                                    BH&nbsp;&nbsp; +973 
                                                                                    </option><option value="BD+880">
                                                                                    BD&nbsp;&nbsp; +880 
                                                                                    </option><option value="BB+1246">
                                                                                    BB&nbsp;&nbsp; +1246 
                                                                                    </option><option value="BY+375">
                                                                                    BY&nbsp;&nbsp; +375 
                                                                                    </option><option value="BE+32">
                                                                                    BE&nbsp;&nbsp; +32 
                                                                                    </option><option value="BZ+501">
                                                                                    BZ&nbsp;&nbsp; +501 
                                                                                    </option><option value="BJ+229">
                                                                                    BJ&nbsp;&nbsp; +229 
                                                                                    </option><option value="BM+1441">
                                                                                    BM&nbsp;&nbsp; +1441 
                                                                                    </option><option value="BT+975">
                                                                                    BT&nbsp;&nbsp; +975 
                                                                                    </option><option value="BO+591">
                                                                                    BO&nbsp;&nbsp; +591 
                                                                                    </option><option value="BA+387">
                                                                                    BA&nbsp;&nbsp; +387 
                                                                                    </option><option value="BW+267">
                                                                                    BW&nbsp;&nbsp; +267 
                                                                                    </option><option value="BR+55">
                                                                                    BR&nbsp;&nbsp; +55 
                                                                                    </option><option value="IO+246">
                                                                                    IO&nbsp;&nbsp; +246 
                                                                                    </option><option value="BN+673">
                                                                                    BN&nbsp;&nbsp; +673 
                                                                                    </option><option value="BG+359">
                                                                                    BG&nbsp;&nbsp; +359 
                                                                                    </option><option value="BF+226">
                                                                                    BF&nbsp;&nbsp; +226 
                                                                                    </option><option value="BI+257">
                                                                                    BI&nbsp;&nbsp; +257 
                                                                                    </option><option value="KH+855">
                                                                                    KH&nbsp;&nbsp; +855 
                                                                                    </option><option value="CM+237">
                                                                                    CM&nbsp;&nbsp; +237 
                                                                                    </option><option value="CA+1">
                                                                                    CA&nbsp;&nbsp; +1 
                                                                                    </option><option value="CV+238">
                                                                                    CV&nbsp;&nbsp; +238 
                                                                                    </option><option value="KY+ 345">
                                                                                    KY&nbsp;&nbsp; + 345 
                                                                                    </option><option value="CF+236">
                                                                                    CF&nbsp;&nbsp; +236 
                                                                                    </option><option value="TD+235">
                                                                                    TD&nbsp;&nbsp; +235 
                                                                                    </option><option value="CL+56">
                                                                                    CL&nbsp;&nbsp; +56 
                                                                                    </option><option value="CN+86">
                                                                                    CN&nbsp;&nbsp; +86 
                                                                                    </option><option value="CX+61">
                                                                                    CX&nbsp;&nbsp; +61 
                                                                                    </option><option value="CC+61">
                                                                                    CC&nbsp;&nbsp; +61 
                                                                                    </option><option value="CO+57">
                                                                                    CO&nbsp;&nbsp; +57 
                                                                                    </option><option value="KM+269">
                                                                                    KM&nbsp;&nbsp; +269 
                                                                                    </option><option value="CG+242">
                                                                                    CG&nbsp;&nbsp; +242 
                                                                                    </option><option value="CD+243">
                                                                                    CD&nbsp;&nbsp; +243 
                                                                                    </option><option value="CK+682">
                                                                                    CK&nbsp;&nbsp; +682 
                                                                                    </option><option value="CR+506">
                                                                                    CR&nbsp;&nbsp; +506 
                                                                                    </option><option value="CI+225">
                                                                                    CI&nbsp;&nbsp; +225 
                                                                                    </option><option value="HR+385">
                                                                                    HR&nbsp;&nbsp; +385 
                                                                                    </option><option value="CU+53">
                                                                                    CU&nbsp;&nbsp; +53 
                                                                                    </option><option value="CY+357">
                                                                                    CY&nbsp;&nbsp; +357 
                                                                                    </option><option value="CZ+420">
                                                                                    CZ&nbsp;&nbsp; +420 
                                                                                    </option><option value="DK+45">
                                                                                    DK&nbsp;&nbsp; +45 
                                                                                    </option><option value="DJ+253">
                                                                                    DJ&nbsp;&nbsp; +253 
                                                                                    </option><option value="DM+1767">
                                                                                    DM&nbsp;&nbsp; +1767 
                                                                                    </option><option value="DO+1849">
                                                                                    DO&nbsp;&nbsp; +1849 
                                                                                    </option><option value="EC+593">
                                                                                    EC&nbsp;&nbsp; +593 
                                                                                    </option><option value="EG+20">
                                                                                    EG&nbsp;&nbsp; +20 
                                                                                    </option><option value="SV+503">
                                                                                    SV&nbsp;&nbsp; +503 
                                                                                    </option><option value="GQ+240">
                                                                                    GQ&nbsp;&nbsp; +240 
                                                                                    </option><option value="ER+291">
                                                                                    ER&nbsp;&nbsp; +291 
                                                                                    </option><option value="EE+372">
                                                                                    EE&nbsp;&nbsp; +372 
                                                                                    </option><option value="ET+251">
                                                                                    ET&nbsp;&nbsp; +251 
                                                                                    </option><option value="FK+500">
                                                                                    FK&nbsp;&nbsp; +500 
                                                                                    </option><option value="FO+298">
                                                                                    FO&nbsp;&nbsp; +298 
                                                                                    </option><option value="FJ+679">
                                                                                    FJ&nbsp;&nbsp; +679 
                                                                                    </option><option value="FI+358">
                                                                                    FI&nbsp;&nbsp; +358 
                                                                                    </option><option value="FR+33">
                                                                                    FR&nbsp;&nbsp; +33 
                                                                                    </option><option value="GF+594">
                                                                                    GF&nbsp;&nbsp; +594 
                                                                                    </option><option value="PF+689">
                                                                                    PF&nbsp;&nbsp; +689 
                                                                                    </option><option value="GA+241">
                                                                                    GA&nbsp;&nbsp; +241 
                                                                                    </option><option value="GM+220">
                                                                                    GM&nbsp;&nbsp; +220 
                                                                                    </option><option value="GE+995">
                                                                                    GE&nbsp;&nbsp; +995 
                                                                                    </option><option value="DE+49">
                                                                                    DE&nbsp;&nbsp; +49 
                                                                                    </option><option value="GH+233">
                                                                                    GH&nbsp;&nbsp; +233 
                                                                                    </option><option value="GI+350">
                                                                                    GI&nbsp;&nbsp; +350 
                                                                                    </option><option value="GR+30">
                                                                                    GR&nbsp;&nbsp; +30 
                                                                                    </option><option value="GL+299">
                                                                                    GL&nbsp;&nbsp; +299 
                                                                                    </option><option value="GD+1473">
                                                                                    GD&nbsp;&nbsp; +1473 
                                                                                    </option><option value="GP+590">
                                                                                    GP&nbsp;&nbsp; +590 
                                                                                    </option><option value="GU+1671">
                                                                                    GU&nbsp;&nbsp; +1671 
                                                                                    </option><option value="GT+502">
                                                                                    GT&nbsp;&nbsp; +502 
                                                                                    </option><option value="GG+44">
                                                                                    GG&nbsp;&nbsp; +44 
                                                                                    </option><option value="GN+224">
                                                                                    GN&nbsp;&nbsp; +224 
                                                                                    </option><option value="GW+245">
                                                                                    GW&nbsp;&nbsp; +245 
                                                                                    </option><option value="GY+595">
                                                                                    GY&nbsp;&nbsp; +595 
                                                                                    </option><option value="HT+509">
                                                                                    HT&nbsp;&nbsp; +509 
                                                                                    </option><option value="VA+379">
                                                                                    VA&nbsp;&nbsp; +379 
                                                                                    </option><option value="HN+504">
                                                                                    HN&nbsp;&nbsp; +504 
                                                                                    </option><option value="HK+852">
                                                                                    HK&nbsp;&nbsp; +852 
                                                                                    </option><option value="HU+36">
                                                                                    HU&nbsp;&nbsp; +36 
                                                                                    </option><option value="IS+354">
                                                                                    IS&nbsp;&nbsp; +354 
                                                                                    </option><option value="IN+91">
                                                                                    IN&nbsp;&nbsp; +91 
                                                                                    </option><option value="ID+62">
                                                                                    ID&nbsp;&nbsp; +62 
                                                                                    </option><option value="IR+98">
                                                                                    IR&nbsp;&nbsp; +98 
                                                                                    </option><option value="IQ+964">
                                                                                    IQ&nbsp;&nbsp; +964 
                                                                                    </option><option value="IE+353">
                                                                                    IE&nbsp;&nbsp; +353 
                                                                                    </option><option value="IM+44">
                                                                                    IM&nbsp;&nbsp; +44 
                                                                                    </option><option value="IL+972">
                                                                                    IL&nbsp;&nbsp; +972 
                                                                                    </option><option value="IT+39">
                                                                                    IT&nbsp;&nbsp; +39 
                                                                                    </option><option value="JM+1876">
                                                                                    JM&nbsp;&nbsp; +1876 
                                                                                    </option><option value="JP+81">
                                                                                    JP&nbsp;&nbsp; +81 
                                                                                    </option><option value="JE+44">
                                                                                    JE&nbsp;&nbsp; +44 
                                                                                    </option><option value="JO+962">
                                                                                    JO&nbsp;&nbsp; +962 
                                                                                    </option><option value="KZ+77">
                                                                                    KZ&nbsp;&nbsp; +77 
                                                                                    </option><option value="KE+254">
                                                                                    KE&nbsp;&nbsp; +254 
                                                                                    </option><option value="KI+686">
                                                                                    KI&nbsp;&nbsp; +686 
                                                                                    </option><option value="KP+850">
                                                                                    KP&nbsp;&nbsp; +850 
                                                                                    </option><option value="KR+82">
                                                                                    KR&nbsp;&nbsp; +82 
                                                                                    </option><option value="KW+965">
                                                                                    KW&nbsp;&nbsp; +965 
                                                                                    </option><option value="KG+996">
                                                                                    KG&nbsp;&nbsp; +996 
                                                                                    </option><option value="LA+856">
                                                                                    LA&nbsp;&nbsp; +856 
                                                                                    </option><option value="LV+371">
                                                                                    LV&nbsp;&nbsp; +371 
                                                                                    </option><option value="LB+961">
                                                                                    LB&nbsp;&nbsp; +961 
                                                                                    </option><option value="LS+266">
                                                                                    LS&nbsp;&nbsp; +266 
                                                                                    </option><option value="LR+231">
                                                                                    LR&nbsp;&nbsp; +231 
                                                                                    </option><option value="LY+218">
                                                                                    LY&nbsp;&nbsp; +218 
                                                                                    </option><option value="LI+423">
                                                                                    LI&nbsp;&nbsp; +423 
                                                                                    </option><option value="LT+370">
                                                                                    LT&nbsp;&nbsp; +370 
                                                                                    </option><option value="LU+352">
                                                                                    LU&nbsp;&nbsp; +352 
                                                                                    </option><option value="MO+853">
                                                                                    MO&nbsp;&nbsp; +853 
                                                                                    </option><option value="MK+389">
                                                                                    MK&nbsp;&nbsp; +389 
                                                                                    </option><option value="MG+261">
                                                                                    MG&nbsp;&nbsp; +261 
                                                                                    </option><option value="MW+265">
                                                                                    MW&nbsp;&nbsp; +265 
                                                                                    </option><option value="MY+60">
                                                                                    MY&nbsp;&nbsp; +60 
                                                                                    </option><option value="MV+960">
                                                                                    MV&nbsp;&nbsp; +960 
                                                                                    </option><option value="ML+223">
                                                                                    ML&nbsp;&nbsp; +223 
                                                                                    </option><option value="MT+356">
                                                                                    MT&nbsp;&nbsp; +356 
                                                                                    </option><option value="MH+692">
                                                                                    MH&nbsp;&nbsp; +692 
                                                                                    </option><option value="MQ+596">
                                                                                    MQ&nbsp;&nbsp; +596 
                                                                                    </option><option value="MR+222">
                                                                                    MR&nbsp;&nbsp; +222 
                                                                                    </option><option value="MU+230">
                                                                                    MU&nbsp;&nbsp; +230 
                                                                                    </option><option value="YT+262">
                                                                                    YT&nbsp;&nbsp; +262 
                                                                                    </option><option value="MX+52">
                                                                                    MX&nbsp;&nbsp; +52 
                                                                                    </option><option value="FM+691">
                                                                                    FM&nbsp;&nbsp; +691 
                                                                                    </option><option value="MD+373">
                                                                                    MD&nbsp;&nbsp; +373 
                                                                                    </option><option value="MC+377">
                                                                                    MC&nbsp;&nbsp; +377 
                                                                                    </option><option value="MN+976">
                                                                                    MN&nbsp;&nbsp; +976 
                                                                                    </option><option value="ME+382">
                                                                                    ME&nbsp;&nbsp; +382 
                                                                                    </option><option value="MS+1664">
                                                                                    MS&nbsp;&nbsp; +1664 
                                                                                    </option><option value="MA+212">
                                                                                    MA&nbsp;&nbsp; +212 
                                                                                    </option><option value="MZ+258">
                                                                                    MZ&nbsp;&nbsp; +258 
                                                                                    </option><option value="MM+95">
                                                                                    MM&nbsp;&nbsp; +95 
                                                                                    </option><option value="NA+264">
                                                                                    NA&nbsp;&nbsp; +264 
                                                                                    </option><option value="NR+674">
                                                                                    NR&nbsp;&nbsp; +674 
                                                                                    </option><option value="NP+977">
                                                                                    NP&nbsp;&nbsp; +977 
                                                                                    </option><option value="NL+31">
                                                                                    NL&nbsp;&nbsp; +31 
                                                                                    </option><option value="AN+599">
                                                                                    AN&nbsp;&nbsp; +599 
                                                                                    </option><option value="NC+687">
                                                                                    NC&nbsp;&nbsp; +687 
                                                                                    </option><option value="NZ+64">
                                                                                    NZ&nbsp;&nbsp; +64 
                                                                                    </option><option value="NI+505">
                                                                                    NI&nbsp;&nbsp; +505 
                                                                                    </option><option value="NE+227">
                                                                                    NE&nbsp;&nbsp; +227 
                                                                                    </option><option value="NG+234">
                                                                                    NG&nbsp;&nbsp; +234 
                                                                                    </option><option value="NU+683">
                                                                                    NU&nbsp;&nbsp; +683 
                                                                                    </option><option value="NF+672">
                                                                                    NF&nbsp;&nbsp; +672 
                                                                                    </option><option value="MP+1670">
                                                                                    MP&nbsp;&nbsp; +1670 
                                                                                    </option><option value="NO+47">
                                                                                    NO&nbsp;&nbsp; +47 
                                                                                    </option><option value="OM+968">
                                                                                    OM&nbsp;&nbsp; +968 
                                                                                    </option><option value="PK+92">
                                                                                    PK&nbsp;&nbsp; +92 
                                                                                    </option><option value="PW+680">
                                                                                    PW&nbsp;&nbsp; +680 
                                                                                    </option><option value="PS+970">
                                                                                    PS&nbsp;&nbsp; +970 
                                                                                    </option><option value="PA+507">
                                                                                    PA&nbsp;&nbsp; +507 
                                                                                    </option><option value="PG+675">
                                                                                    PG&nbsp;&nbsp; +675 
                                                                                    </option><option value="PY+595">
                                                                                    PY&nbsp;&nbsp; +595 
                                                                                    </option><option value="PE+51">
                                                                                    PE&nbsp;&nbsp; +51 
                                                                                    </option><option value="PH+63">
                                                                                    PH&nbsp;&nbsp; +63 
                                                                                    </option><option value="PN+872">
                                                                                    PN&nbsp;&nbsp; +872 
                                                                                    </option><option value="PL+48">
                                                                                    PL&nbsp;&nbsp; +48 
                                                                                    </option><option value="PT+351">
                                                                                    PT&nbsp;&nbsp; +351 
                                                                                    </option><option value="PR+1939">
                                                                                    PR&nbsp;&nbsp; +1939 
                                                                                    </option><option value="QA+974">
                                                                                    QA&nbsp;&nbsp; +974 
                                                                                    </option><option value="RO+40">
                                                                                    RO&nbsp;&nbsp; +40 
                                                                                    </option><option value="RU+7">
                                                                                    RU&nbsp;&nbsp; +7 
                                                                                    </option><option value="RW+250">
                                                                                    RW&nbsp;&nbsp; +250 
                                                                                    </option><option value="RE+262">
                                                                                    RE&nbsp;&nbsp; +262 
                                                                                    </option><option value="BL+590">
                                                                                    BL&nbsp;&nbsp; +590 
                                                                                    </option><option value="SH+290">
                                                                                    SH&nbsp;&nbsp; +290 
                                                                                    </option><option value="KN+1869">
                                                                                    KN&nbsp;&nbsp; +1869 
                                                                                    </option><option value="LC+1758">
                                                                                    LC&nbsp;&nbsp; +1758 
                                                                                    </option><option value="MF+590">
                                                                                    MF&nbsp;&nbsp; +590 
                                                                                    </option><option value="PM+508">
                                                                                    PM&nbsp;&nbsp; +508 
                                                                                    </option><option value="VC+1784">
                                                                                    VC&nbsp;&nbsp; +1784 
                                                                                    </option><option value="WS+685">
                                                                                    WS&nbsp;&nbsp; +685 
                                                                                    </option><option value="SM+378">
                                                                                    SM&nbsp;&nbsp; +378 
                                                                                    </option><option value="ST+239">
                                                                                    ST&nbsp;&nbsp; +239 
                                                                                    </option><option value="SA+966">
                                                                                    SA&nbsp;&nbsp; +966 
                                                                                    </option><option value="SN+221">
                                                                                    SN&nbsp;&nbsp; +221 
                                                                                    </option><option value="RS+381">
                                                                                    RS&nbsp;&nbsp; +381 
                                                                                    </option><option value="SC+248">
                                                                                    SC&nbsp;&nbsp; +248 
                                                                                    </option><option value="SL+232">
                                                                                    SL&nbsp;&nbsp; +232 
                                                                                    </option><option value="SG+65">
                                                                                    SG&nbsp;&nbsp; +65 
                                                                                    </option><option value="SK+421">
                                                                                    SK&nbsp;&nbsp; +421 
                                                                                    </option><option value="SI+386">
                                                                                    SI&nbsp;&nbsp; +386 
                                                                                    </option><option value="SB+677">
                                                                                    SB&nbsp;&nbsp; +677 
                                                                                    </option><option value="SO+252">
                                                                                    SO&nbsp;&nbsp; +252 
                                                                                    </option><option value="ZA+27">
                                                                                    ZA&nbsp;&nbsp; +27 
                                                                                    </option><option value="SS+211">
                                                                                    SS&nbsp;&nbsp; +211 
                                                                                    </option><option value="GS+500">
                                                                                    GS&nbsp;&nbsp; +500 
                                                                                    </option><option value="ES+34">
                                                                                    ES&nbsp;&nbsp; +34 
                                                                                    </option><option value="LK+94">
                                                                                    LK&nbsp;&nbsp; +94 
                                                                                    </option><option value="SD+249">
                                                                                    SD&nbsp;&nbsp; +249 
                                                                                    </option><option value="SR+597">
                                                                                    SR&nbsp;&nbsp; +597 
                                                                                    </option><option value="SJ+47">
                                                                                    SJ&nbsp;&nbsp; +47 
                                                                                    </option><option value="SZ+268">
                                                                                    SZ&nbsp;&nbsp; +268 
                                                                                    </option><option value="SE+46">
                                                                                    SE&nbsp;&nbsp; +46 
                                                                                    </option><option value="CH+41">
                                                                                    CH&nbsp;&nbsp; +41 
                                                                                    </option><option value="SY+963">
                                                                                    SY&nbsp;&nbsp; +963 
                                                                                    </option><option value="TW+886">
                                                                                    TW&nbsp;&nbsp; +886 
                                                                                    </option><option value="TJ+992">
                                                                                    TJ&nbsp;&nbsp; +992 
                                                                                    </option><option value="TZ+255">
                                                                                    TZ&nbsp;&nbsp; +255 
                                                                                    </option><option value="TH+66">
                                                                                    TH&nbsp;&nbsp; +66 
                                                                                    </option><option value="TL+670">
                                                                                    TL&nbsp;&nbsp; +670 
                                                                                    </option><option value="TG+228">
                                                                                    TG&nbsp;&nbsp; +228 
                                                                                    </option><option value="TK+690">
                                                                                    TK&nbsp;&nbsp; +690 
                                                                                    </option><option value="TO+676">
                                                                                    TO&nbsp;&nbsp; +676 
                                                                                    </option><option value="TT+1868">
                                                                                    TT&nbsp;&nbsp; +1868 
                                                                                    </option><option value="TN+216">
                                                                                    TN&nbsp;&nbsp; +216 
                                                                                    </option><option value="TR+90">
                                                                                    TR&nbsp;&nbsp; +90 
                                                                                    </option><option value="TM+993">
                                                                                    TM&nbsp;&nbsp; +993 
                                                                                    </option><option value="TC+1649">
                                                                                    TC&nbsp;&nbsp; +1649 
                                                                                    </option><option value="TV+688">
                                                                                    TV&nbsp;&nbsp; +688 
                                                                                    </option><option value="UG+256">
                                                                                    UG&nbsp;&nbsp; +256 
                                                                                    </option><option value="UA+380">
                                                                                    UA&nbsp;&nbsp; +380 
                                                                                    </option><option value="AE+971">
                                                                                    AE&nbsp;&nbsp; +971 
                                                                                    </option><option value="GB+44">
                                                                                    GB&nbsp;&nbsp; +44 
                                                                                    </option><option value="US+1">
                                                                                    US&nbsp;&nbsp; +1 
                                                                                    </option><option value="UY+598">
                                                                                    UY&nbsp;&nbsp; +598 
                                                                                    </option><option value="UZ+998">
                                                                                    UZ&nbsp;&nbsp; +998 
                                                                                    </option><option value="VU+678">
                                                                                    VU&nbsp;&nbsp; +678 
                                                                                    </option><option value="VE+58">
                                                                                    VE&nbsp;&nbsp; +58 
                                                                                    </option><option value="VN+84">
                                                                                    VN&nbsp;&nbsp; +84 
                                                                                    </option><option value="VG+1284">
                                                                                    VG&nbsp;&nbsp; +1284 
                                                                                    </option><option value="VI+1340">
                                                                                    VI&nbsp;&nbsp; +1340 
                                                                                    </option><option value="WF+681">
                                                                                    WF&nbsp;&nbsp; +681 
                                                                                    </option><option value="YE+967">
                                                                                    YE&nbsp;&nbsp; +967 
                                                                                    </option><option value="ZM+260">
                                                                                    ZM&nbsp;&nbsp; +260 
                                                                                    </option><option value="ZW+263">
                                                                                    ZW&nbsp;&nbsp; +263 
                                                                                    </option>
                                                                            </select>
                                                                        </div>
                                                                        <div className='col-8'>
                                                                            <input type='text' className="form-control" style={{height:"38px"}} placeholder='Alternate No'/>
                                                                        </div>                                                                                                                            
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row' style={{marginTop:"2%"}}>
                                                            <div className='col-12'>                
                                                                <div className="mar-t-4 mar-b-4 term-condition-text">
                                                                    <p style={{}}>
                                                                        <input type="checkbox" required /> 
                                                                        <span>&nbsp;Agree with <a href="/" style={{textDecoration:"none"}}>terms and conditions </a> and the <a href="/" style={{textDecoration:"none"}}>cancellation policy.</a></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="submit" style={{backgroundColor:"#01b46c", fontWeight:"700", fontSize:"18px"}} className="btn btn-secondary billing-proceed font-bold" value="PROCEED">PROCEED</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className='col-lg-3 col-md-12 col-sm-12 hide'>
                                        <h2>Trip Summary</h2>
                                        {rendertrip}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div id='showpaymentpage' style={{display:"none"}}>
                {<PaymentGatewayPage />}
            </div>
        </>
    );
}

export default Travellersdetail;