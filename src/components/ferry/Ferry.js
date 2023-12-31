import React from 'react';
import './Ferry.css';
import { useReducer } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Oneway from './Oneway';
import Travellersdetail from './Travellersdetail';
import Roundtrip1 from './Roundtrip1';
import Roundtrip2 from './Roundtrip2';
import Multipletrip1 from './Multipletrip1';
import Multipletrip2 from './Multipletrip2';
import Multipletrip3 from './Multipletrip3';
import Multipletrip4 from './Multipletrip4';
import Multipletrip5 from './Multipletrip5';

  const initialState = {
    selectedOption: '',
    options: [
      { value: 'PortBlair', label: 'Port Blair' },
      { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
      { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
    ]
  };
  
  function reducer(state, action) {
    if (action.type === 'SELECT_OPTION') {
      if (action.value === 'PortBlair') {
        return {
          ...state,
          selectedOption: action.value,
          options: [
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Havelock (Swaraj Dweep)') {
        return {
          ...state,
          selectedOption: action.value,
          options: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Neil Island (Shaheed Dweep)') {
        return {
          ...state,
          selectedOption: action.value,
          options: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' }
          ]
        };
      } 
    }
  
    return state;
  }

  const initialState1 = {
    selectedOption1: '',
    options1: [
      { value: 'PortBlair', label: 'Port Blair' },
      { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
      { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
    ]
  };

  function reducer1(state1, action) {
    if (action.type === 'SELECT_OPTION1') {
      if (action.value === 'PortBlair') {
        return {
          ...state1,
          selectedOption1: action.value,
          options1: [
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Havelock (Swaraj Dweep)') {
        return {
          ...state1,
          selectedOption1: action.value,
          options1: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Neil Island (Shaheed Dweep)') {
        return {
          ...state1,
          selectedOption1: action.value,
          options1: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' }
          ]
        };
      } 
    }
  
    return state1;
  }

  const initialState2 = {
    selectedOption2: '',
    options2: [
      { value: 'PortBlair', label: 'Port Blair' },
      { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
      { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
    ]
  };

  function reducer2(state2, action) {
    if (action.type === 'SELECT_OPTION2') {
      if (action.value === 'PortBlair') {
        return {
          ...state2,
          selectedOption2: action.value,
          options2: [
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Havelock (Swaraj Dweep)') {
        return {
          ...state2,
          selectedOption2: action.value,
          options2: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Neil Island (Shaheed Dweep)') {
        return {
          ...state2,
          selectedOption2: action.value,
          options2: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' }
          ]
        };
      } 
    }
  
    return state2;
  }

  const initialState3 = {
    selectedOption3: '',
    options3: [
      { value: 'PortBlair', label: 'Port Blair' },
      { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
      { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
    ]
  };

  function reducer3(state3, action) {
    if (action.type === 'SELECT_OPTION3') {
      if (action.value === 'PortBlair') {
        return {
          ...state3,
          selectedOption3: action.value,
          options3: [
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Havelock (Swaraj Dweep)') {
        return {
          ...state3,
          selectedOption3: action.value,
          options3: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Neil Island (Shaheed Dweep)') {
        return {
          ...state3,
          selectedOption3: action.value,
          options3: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' }
          ]
        };
      } 
    }
  
    return state3;
  }

  const initialState4 = {
    selectedOption4: '',
    options4: [
      { value: 'PortBlair', label: 'Port Blair' },
      { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
      { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
    ]
  };

  function reducer4(state4, action) {
    if (action.type === 'SELECT_OPTION4') {
      if (action.value === 'PortBlair') {
        return {
          ...state4,
          selectedOption4: action.value,
          options4: [
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Havelock (Swaraj Dweep)') {
        return {
          ...state4,
          selectedOption4: action.value,
          options4: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Neil Island (Shaheed Dweep)', label: 'Neil Island (Shaheed Dweep)' }
          ]
        };
      } 
      if (action.value === 'Neil Island (Shaheed Dweep)') {
        return {
          ...state4,
          selectedOption4: action.value,
          options4: [
            { value: 'PortBlair', label: 'PortBlair' },
            { value: 'Havelock (Swaraj Dweep)', label: 'Havelock (Swaraj Dweep)' }
          ]
        };
      } 
    }
  
    return state4;
  }

export const Ferry = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [state1, dispatch1] = useReducer(reducer1, initialState1);
    const [state2, dispatch2] = useReducer(reducer2, initialState2);
    const [state3, dispatch3] = useReducer(reducer3, initialState3);
    const [state4, dispatch4] = useReducer(reducer4, initialState4);


    // Tracking no. of adult, child and infant selected
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleMinusClick = (event) => {
      event.preventDefault();
      if (count > 1) {
        setCount(count - 1);
      }
    };

    const handleMinusClick1 = (event) => {
      event.preventDefault();
      if (count1 > 0) {
        setCount1(count1 - 1);
      }
    };

    const handleMinusClick2 = (event) => {
      event.preventDefault();
      if (count2 > 0) {
        setCount2(count2 - 1);
      }
    };

    const handlePlusClick = (event) => {
      event.preventDefault();
      setCount(count + 1);
    };

    const handlePlusClick1 = (event) => {
      event.preventDefault();
      setCount1(count1 + 1);
    };

    const handlePlusClick2 = (event) => {
      event.preventDefault();
      setCount2(count2 + 1);
    };

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [to1, setTo1] = useState("");
    const [to2, setTo2] = useState("");
    const [to3, setTo3] = useState("");
    const [to4, setTo4] = useState("");
    const [owfrom, setOwFrom] = useState("");
    const [owto, setOwTo] = useState("");
    const [rtfrom, setRtFrom] = useState("");
    const [rtto, setRtTo] = useState("");
    const [from1, setFrom1] = useState("");
    const [from2, setFrom2] = useState("");
    const [from3, setFrom3] = useState("");
    const [from4, setFrom4] = useState("");

    const onewayOptionChangefrom = (event) => {
      dispatch({ type: 'SELECT_OPTION', value: event.target.value });
      setOwFrom(event.target.value);
      document.getElementById("owfromerror").style.display = 'none';
      document.getElementById("owfrom").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const onewayOptionChange = (event) => {
      setOwTo(event.target.value);
      document.getElementById("owtoerror").style.display = 'none';
      document.getElementById("owto").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const roundtripOptionChangefrom = (event) => {
      dispatch({ type: 'SELECT_OPTION', value: event.target.value });
      setRtFrom(event.target.value);
      document.getElementById("rtfromerror").style.display = 'none';
      document.getElementById("rtfrom").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const roundtripOptionChange = (event) => {
      setRtTo(event.target.value);
      document.getElementById("rttoerror").style.display = 'none';
      document.getElementById("rtto").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChange = (event) => {
      dispatch({ type: 'SELECT_OPTION', value: event.target.value });
      setFrom(event.target.value);
      document.getElementById("mtfromerror").style.display = 'none';
      document.getElementById("mtfrom").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChangetrip2 = (event) => {
      dispatch1({ type: 'SELECT_OPTION1', value: event.target.value });
      setFrom1(event.target.value);
      document.getElementById("mtfrom1error").style.display = 'none';
      document.getElementById("mtfrom1").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChangetrip3 = (event) => {
      dispatch2({ type: 'SELECT_OPTION2', value: event.target.value });
      setFrom2(event.target.value);
      document.getElementById("mtfrom2error").style.display = 'none';
      document.getElementById("mtfrom2").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChangetrip4 = (event) => {
      dispatch3({ type: 'SELECT_OPTION3', value: event.target.value });
      setFrom3(event.target.value);
      document.getElementById("mtfrom3error").style.display = 'none';
      document.getElementById("mtfrom3").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChangetrip5 = (event) => {
      dispatch4({ type: 'SELECT_OPTION4', value: event.target.value });
      setFrom4(event.target.value);
      document.getElementById("mtfrom4error").style.display = 'none';
      document.getElementById("mtfrom4").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChange1 = (event) => {
      setTo(event.target.value);
      document.getElementById("mttoerror").style.display = 'none';
      document.getElementById("mtto").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChange2 = (event) => {
      setTo1(event.target.value);
      document.getElementById("mtto1error").style.display = 'none';
      document.getElementById("mtto1").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChange3 = (event) => {
      setTo2(event.target.value);
      document.getElementById("mtto2error").style.display = 'none';
      document.getElementById("mtto2").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChange4 = (event) => {
      setTo3(event.target.value);
      document.getElementById("mtto3error").style.display = 'none';
      document.getElementById("mtto3").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleOptionChange5 = (event) => {
      setTo4(event.target.value);
      document.getElementById("mtto4error").style.display = 'none';
      document.getElementById("mtto4").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [selectedDate3, setSelectedDate3] = useState(null);
    const [selectedDate4, setSelectedDate4] = useState(null);
    const [triptype, setTriptype] = useState("");
    const [tripcount, setTripcount] = useState(2);
    const [owDate, setOwDate] = useState(null);
    const [rt1Date, setRt1Date] = useState(null);
    const [rt2Date, setRt2Date] = useState(null);
  
    const owhandleDateChange = (event) => {
      setOwDate(event.target.value);
      document.getElementById("owdateerror").style.display = 'none';
      document.getElementById("owdate").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const rt1handleDateChange = (event) => {
      setRt1Date(event.target.value);
      document.getElementById("rtdateerror").style.display = 'none';
      document.getElementById("rtdate").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const rt2handleDateChange = (event) => {
      setRt2Date(event.target.value);
      document.getElementById("rt1dateerror").style.display = 'none';
      document.getElementById("rt1date").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
      document.getElementById("mtdateerror").style.display = 'none';
      document.getElementById("mtdate").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleDateChange1 = (event) => {
      setSelectedDate1(event.target.value);
      document.getElementById("mtdate1error").style.display = 'none';
      document.getElementById("mtdate1").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleDateChange2 = (event) => {
      setSelectedDate2(event.target.value);
      document.getElementById("mtdate2error").style.display = 'none';
      document.getElementById("mtdate2").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleDateChange3 = (event) => {
      setSelectedDate3(event.target.value);
      document.getElementById("mtdate3error").style.display = 'none';
      document.getElementById("mtdate3").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const handleDateChange4 = (event) => {
      setSelectedDate4(event.target.value);
      document.getElementById("mtdate4error").style.display = 'none';
      document.getElementById("mtdate4").style.borderColor = 'rgba(0,0,0,.16)';
    };

    const selectferry = () =>{
      
      if (triptype === 'One Way Trip'){
        if( owfrom !== '' && owto !== '' && owDate !== null) {
          document.getElementById("selectonewayferry").style.display = 'block';
          document.getElementById("selecttrip").style.display = 'none';
        }
        if(owfrom === ''){
          document.getElementById("owfromerror").style.display = 'block';
          document.getElementById("owfrom").style.borderColor = 'red';
        }
        else{
          document.getElementById("owfromerror").style.display = 'none';
          document.getElementById("owfrom").style.borderColor = 'rgba(0,0,0,.16)';  
        }
        if(owto === ''){
          document.getElementById("owtoerror").style.display = 'block';
          document.getElementById("owto").style.borderColor = 'red';
        }
        else{
          document.getElementById("owtoerror").style.display = 'none';
          document.getElementById("owto").style.borderColor = 'rgba(0,0,0,.16)';
        }
        if(owDate === null){
          document.getElementById("owdateerror").style.display = 'block';
          document.getElementById("owdate").style.borderColor = 'red';
        }
        else{
          document.getElementById("owdateerror").style.display = 'none';
          document.getElementById("owdate").style.borderColor = 'rgba(0,0,0,.16)';
        }
      }

      else if (triptype === 'Round Trip'){
        if(rtfrom !== '' && rtto !== '' && rt1Date !==null && rt2Date !== null) {
          document.getElementById("selectroundtripferry").style.display = 'block';
          document.getElementById("selecttrip").style.display = 'none';
        }
        if(rtfrom === ''){
          document.getElementById("rtfromerror").style.display = 'block';
          document.getElementById("rtfrom").style.borderColor = 'red';
        }
        else{
          document.getElementById("rtfromerror").style.display = 'none';
          document.getElementById("rtfrom").style.borderColor = 'rgba(0,0,0,.16)';
        }
        if(rtto === ''){
          document.getElementById("rttoerror").style.display = 'block';
          document.getElementById("rtto").style.borderColor = 'red';
        }
        else{
          document.getElementById("rttoerror").style.display = 'none';
          document.getElementById("rtto").style.borderColor = 'rgba(0,0,0,.16)';
        }
        if(rt1Date === null){
          document.getElementById("rtdateerror").style.display = 'block';
          document.getElementById("rtdate").style.borderColor = 'red';
        }
        else{
          document.getElementById("rtdateerror").style.display = 'none';
          document.getElementById("rtdate").style.borderColor = 'rgba(0,0,0,.16)';
        }
        if(rt2Date === null){
          document.getElementById("rt1dateerror").style.display = 'block';
          document.getElementById("rt1date").style.borderColor = 'red';
        }
        else{
          document.getElementById("rt1dateerror").style.display = 'none';
          document.getElementById("rt1date").style.borderColor = 'rgba(0,0,0,.16)';
        }
      }

      else if (triptype === 'Multiple Trip') {
        if(tripcount === 2){
          if(from !== '' && to !== '' && from1 !== '' && to1 !== '' && selectedDate !== null && selectedDate1 !== null){
            document.getElementById("selectmultitripferry").style.display = 'block';
            document.getElementById("selecttrip").style.display = 'none'; 
          }
          if(from === ''){
            document.getElementById("mtfromerror").style.display = 'block';
            document.getElementById("mtfrom").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfromerror").style.display = 'none';
            document.getElementById("mtfrom").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to === ''){
            document.getElementById("mttoerror").style.display = 'block';
            document.getElementById("mtto").style.borderColor = 'red';
          }
          else{
            document.getElementById("mttoerror").style.display = 'none';
            document.getElementById("mtto").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from1 === ''){
            document.getElementById("mtfrom1error").style.display = 'block';
            document.getElementById("mtfrom1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom1error").style.display = 'none';
            document.getElementById("mtfrom1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to1 === ''){
            document.getElementById("mtto1error").style.display = 'block';
            document.getElementById("mtto1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto1error").style.display = 'none';
            document.getElementById("mtto1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate === null){
            document.getElementById("mtdateerror").style.display = 'block';
            document.getElementById("mtdate").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdateerror").style.display = 'none';
            document.getElementById("mtdate").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate1 === null){
            document.getElementById("mtdate1error").style.display = 'block';
            document.getElementById("mtdate1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate1error").style.display = 'none';
            document.getElementById("mtdate1").style.borderColor = 'rgba(0,0,0,.16)';
          }
        } 
        if(tripcount === 3){
          if(from !== '' && to !== '' && from1 !== '' && to1 !== '' && from2 !== '' && to2 !== '' && selectedDate !== null && selectedDate1 !== null && selectedDate2 !== null){
            document.getElementById("selectmultitripferry").style.display = 'block';
            document.getElementById("selecttrip").style.display = 'none'; 
          }
          if(from === ''){
            document.getElementById("mtfromerror").style.display = 'block';
            document.getElementById("mtfrom").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfromerror").style.display = 'none';
            document.getElementById("mtfrom").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to === ''){
            document.getElementById("mttoerror").style.display = 'block';
            document.getElementById("mtto").style.borderColor = 'red';
          }
          else{
            document.getElementById("mttoerror").style.display = 'none';
            document.getElementById("mtto").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from1 === ''){
            document.getElementById("mtfrom1error").style.display = 'block';
            document.getElementById("mtfrom1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom1error").style.display = 'none';
            document.getElementById("mtfrom1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to1 === ''){
            document.getElementById("mtto1error").style.display = 'block';
            document.getElementById("mtto1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto1error").style.display = 'none';
            document.getElementById("mtto1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate === null){
            document.getElementById("mtdateerror").style.display = 'block';
            document.getElementById("mtdate").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdateerror").style.display = 'none';
            document.getElementById("mtdate").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate1 === null){
            document.getElementById("mtdate1error").style.display = 'block';
            document.getElementById("mtdate1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate1error").style.display = 'none';
            document.getElementById("mtdate1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from2 === ''){
            document.getElementById("mtfrom2error").style.display = 'block';
            document.getElementById("mtfrom2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom2error").style.display = 'none';
            document.getElementById("mtfrom2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to2 === ''){
            document.getElementById("mtto2error").style.display = 'block';
            document.getElementById("mtto2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto2error").style.display = 'none';
            document.getElementById("mtto2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate2 === null){
            document.getElementById("mtdate2error").style.display = 'block';
            document.getElementById("mtdate2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate2error").style.display = 'none';
            document.getElementById("mtdate2").style.borderColor = 'rgba(0,0,0,.16)';
          }
        }
        if(tripcount === 4){
          if(from !== '' && to !== '' && from1 !== '' && to1 !== '' && from2 !== '' && to2 !== '' && from3 !== '' && to3 !== '' && selectedDate !== null && selectedDate1 !== null && selectedDate2 !== null && selectedDate3 !== null){
            document.getElementById("selectmultitripferry").style.display = 'block';
            document.getElementById("selecttrip").style.display = 'none'; 
          }
          if(from === ''){
            document.getElementById("mtfromerror").style.display = 'block';
            document.getElementById("mtfrom").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfromerror").style.display = 'none';
            document.getElementById("mtfrom").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to === ''){
            document.getElementById("mttoerror").style.display = 'block';
            document.getElementById("mtto").style.borderColor = 'red';
          }
          else{
            document.getElementById("mttoerror").style.display = 'none';
            document.getElementById("mtto").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from1 === ''){
            document.getElementById("mtfrom1error").style.display = 'block';
            document.getElementById("mtfrom1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom1error").style.display = 'none';
            document.getElementById("mtfrom1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to1 === ''){
            document.getElementById("mtto1error").style.display = 'block';
            document.getElementById("mtto1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto1error").style.display = 'none';
            document.getElementById("mtto1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate === null){
            document.getElementById("mtdateerror").style.display = 'block';
            document.getElementById("mtdate").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdateerror").style.display = 'none';
            document.getElementById("mtdate").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate1 === null){
            document.getElementById("mtdate1error").style.display = 'block';
            document.getElementById("mtdate1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate1error").style.display = 'none';
            document.getElementById("mtdate1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from2 === ''){
            document.getElementById("mtfrom2error").style.display = 'block';
            document.getElementById("mtfrom2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom2error").style.display = 'none';
            document.getElementById("mtfrom2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to2 === ''){
            document.getElementById("mtto2error").style.display = 'block';
            document.getElementById("mtto2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto2error").style.display = 'none';
            document.getElementById("mtto2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate2 === null){
            document.getElementById("mtdate2error").style.display = 'block';
            document.getElementById("mtdate2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate2error").style.display = 'none';
            document.getElementById("mtdate2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from3 === ''){
            document.getElementById("mtfrom3error").style.display = 'block';
            document.getElementById("mtfrom3").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom3error").style.display = 'none';
            document.getElementById("mtfrom3").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to3 === ''){
            document.getElementById("mtto3error").style.display = 'block';
            document.getElementById("mtto3").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto3error").style.display = 'none';
            document.getElementById("mtto3").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate3 === null){
            document.getElementById("mtdate3error").style.display = 'block';
            document.getElementById("mtdate3").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate3error").style.display = 'none';
            document.getElementById("mtdate3").style.borderColor = 'rgba(0,0,0,.16)';
          }
        } 
        if(tripcount === 5){
          if(from !== '' && to !== '' && from1 !== '' && to1 !== '' && from2 !== '' && to2 !== '' && from3 !== '' && to3 !== '' && from4 !== '' && to4 !== '' && selectedDate !== null && selectedDate1 !== null && selectedDate2 !== null && selectedDate3 !== null && selectedDate4 !== null){
            document.getElementById("selectmultitripferry").style.display = 'block';
            document.getElementById("selecttrip").style.display = 'none'; 
          }
          if(from === ''){
            document.getElementById("mtfromerror").style.display = 'block';
            document.getElementById("mtfrom").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfromerror").style.display = 'none';
            document.getElementById("mtfrom").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to === ''){
            document.getElementById("mttoerror").style.display = 'block';
            document.getElementById("mtto").style.borderColor = 'red';
          }
          else{
            document.getElementById("mttoerror").style.display = 'none';
            document.getElementById("mtto").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from1 === ''){
            document.getElementById("mtfrom1error").style.display = 'block';
            document.getElementById("mtfrom1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom1error").style.display = 'none';
            document.getElementById("mtfrom1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to1 === ''){
            document.getElementById("mtto1error").style.display = 'block';
            document.getElementById("mtto1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto1error").style.display = 'none';
            document.getElementById("mtto1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate === null){
            document.getElementById("mtdateerror").style.display = 'block';
            document.getElementById("mtdate").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdateerror").style.display = 'none';
            document.getElementById("mtdate").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate1 === null){
            document.getElementById("mtdate1error").style.display = 'block';
            document.getElementById("mtdate1").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate1error").style.display = 'none';
            document.getElementById("mtdate1").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from2 === ''){
            document.getElementById("mtfrom2error").style.display = 'block';
            document.getElementById("mtfrom2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom2error").style.display = 'none';
            document.getElementById("mtfrom2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to2 === ''){
            document.getElementById("mtto2error").style.display = 'block';
            document.getElementById("mtto2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto2error").style.display = 'none';
            document.getElementById("mtto2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate2 === null){
            document.getElementById("mtdate2error").style.display = 'block';
            document.getElementById("mtdate2").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate2error").style.display = 'none';
            document.getElementById("mtdate2").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from3 === ''){
            document.getElementById("mtfrom3error").style.display = 'block';
            document.getElementById("mtfrom3").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom3error").style.display = 'none';
            document.getElementById("mtfrom3").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to3 === ''){
            document.getElementById("mtto3error").style.display = 'block';
            document.getElementById("mtto3").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto3error").style.display = 'none';
            document.getElementById("mtto3").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate3 === null){
            document.getElementById("mtdate3error").style.display = 'block';
            document.getElementById("mtdate3").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate3error").style.display = 'none';
            document.getElementById("mtdate3").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(from4 === ''){
            document.getElementById("mtfrom4error").style.display = 'block';
            document.getElementById("mtfrom4").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtfrom4error").style.display = 'none';
            document.getElementById("mtfrom4").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(to4 === ''){
            document.getElementById("mtto4error").style.display = 'block';
            document.getElementById("mtto4").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtto4error").style.display = 'none';
            document.getElementById("mtto4").style.borderColor = 'rgba(0,0,0,.16)';
          }
          if(selectedDate4 === null){
            document.getElementById("mtdate4error").style.display = 'block';
            document.getElementById("mtdate4").style.borderColor = 'red';
          }
          else{
            document.getElementById("mtdate4error").style.display = 'none';
            document.getElementById("mtdate4").style.borderColor = 'rgba(0,0,0,.16)';
          }
        }      
      }
    }  

    const today = moment();

    const handleTripTypeChange = (e) => {
      const selectedType = e.target.value;
      setTriptype(selectedType);
      if (selectedType === 'One Way Trip') {
        document.getElementById('one_way').style.display = 'block';
        document.getElementById('round_trip').style.display = 'none';
        document.getElementById('multiple_trip').style.display = 'none';
      }
      else if(selectedType === 'Round Trip'){
        document.getElementById('multiple_trip').style.display = 'none';
        document.getElementById('one_way').style.display = 'none';
        document.getElementById('round_trip').style.display = 'block';
      } 
      else if(selectedType === 'Multiple Trip'){
        document.getElementById('multiple_trip').style.display = 'block';
        document.getElementById('one_way').style.display = 'none';
        document.getElementById('round_trip').style.display = 'none';
      }
    };

    const addfield = () =>{
      document.getElementById('trip3').style.display = 'block';
      document.getElementById('addbutton').style.display = 'none';
      setTripcount(tripcount + 1);
      
    }

    const addfield1 = () =>{
      document.getElementById('trip4').style.display = 'block';
      document.getElementById('addbutton1').style.display = 'none';
      document.getElementById('removebutton1').style.display = 'none';
      setTripcount(tripcount + 1);
    }

    const addfield2 = () =>{
      document.getElementById('trip5').style.display = 'block';
      document.getElementById('addbutton2').style.display = 'none';
      document.getElementById('removebutton2').style.display = 'none';
      setTripcount(tripcount + 1);
    }

    const removefield1 = () =>{
      document.getElementById('trip3').style.display = 'none';
      document.getElementById('addbutton').style.display = 'block';
      setTripcount(tripcount - 1);
      
    }

    const removefield2 = () =>{
      document.getElementById('trip4').style.display = 'none';
      document.getElementById('addbutton1').style.display = 'block';
      document.getElementById('removebutton1').style.display = 'block';
      setTripcount(tripcount - 1);
      
    }

    const removefield3 = () =>{
      document.getElementById('trip5').style.display = 'none';
      document.getElementById('addbutton2').style.display = 'block';
      document.getElementById('removebutton2').style.display = 'block';
      setTripcount(tripcount - 1);
      
    }

    const allfilter = () =>{
      if(triptype === "One Way Trip"){
        document.getElementById("nautika_lite").style.display = "block";
        document.getElementById("green_ocean").style.display = "block";
      }
      else if(triptype === "Round Trip"){
        document.getElementById("nautika_litert1").style.display = "block";
        document.getElementById("green_oceanrt1").style.display = "block";
        document.getElementById("nautika_litert2").style.display = "block";
        document.getElementById("green_oceanrt2").style.display = "block";
      }
      else if(triptype === "Multiple Trip"){
        if(tripcount === 2){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "block";
        }
        else if(tripcount === 3){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "block";
          document.getElementById("nautika_litemt3").style.display = "block";
          document.getElementById("green_oceanmt3").style.display = "block";
        }
        else if(tripcount === 4){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "block";
          document.getElementById("nautika_litemt3").style.display = "block";
          document.getElementById("green_oceanmt3").style.display = "block";
          document.getElementById("nautika_litemt4").style.display = "block";
          document.getElementById("green_oceanmt4").style.display = "block";
        }
        else if(tripcount === 5){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "block";
          document.getElementById("nautika_litemt3").style.display = "block";
          document.getElementById("green_oceanmt3").style.display = "block";
          document.getElementById("nautika_litemt4").style.display = "block";
          document.getElementById("green_oceanmt4").style.display = "block";
          document.getElementById("nautika_litemt5").style.display = "block";
          document.getElementById("green_oceanmt5").style.display = "block";
        }
      }
    }

    const nautikalitefilter = () =>{
      if(triptype === "One Way Trip"){
        document.getElementById("nautika_lite").style.display = "block";
        document.getElementById("green_ocean").style.display = "none";
      }
      else if(triptype === "Round Trip"){
        document.getElementById("nautika_litert1").style.display = "block";
        document.getElementById("green_oceanrt1").style.display = "none";
        document.getElementById("nautika_litert2").style.display = "block";
        document.getElementById("green_oceanrt2").style.display = "none";
      }
      else if(triptype === "Multiple Trip"){
        if(tripcount === 2){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "none";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "none";
        }
        else if(tripcount === 3){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "none";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "none";
          document.getElementById("nautika_litemt3").style.display = "block";
          document.getElementById("green_oceanmt3").style.display = "none";
        }
        else if(tripcount === 4){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "none";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "none";
          document.getElementById("nautika_litemt3").style.display = "block";
          document.getElementById("green_oceanmt3").style.display = "none";
          document.getElementById("nautika_litemt4").style.display = "block";
          document.getElementById("green_oceanmt4").style.display = "none";
        }
        else if(tripcount === 5){
          document.getElementById("nautika_litemt1").style.display = "block";
          document.getElementById("green_oceanmt1").style.display = "none";
          document.getElementById("nautika_litemt2").style.display = "block";
          document.getElementById("green_oceanmt2").style.display = "none";
          document.getElementById("nautika_litemt3").style.display = "block";
          document.getElementById("green_oceanmt3").style.display = "none";
          document.getElementById("nautika_litemt4").style.display = "block";
          document.getElementById("green_oceanmt4").style.display = "none";
          document.getElementById("nautika_litemt5").style.display = "block";
          document.getElementById("green_oceanmt5").style.display = "none";
        }
      }
    }

    const greenoceanfilter = () =>{
      if(triptype === "One Way Trip"){
        document.getElementById("nautika_lite").style.display = "none";
        document.getElementById("green_ocean").style.display = "block";
      }
      else if(triptype === "Round Trip"){
        document.getElementById("nautika_litert1").style.display = "none";
        document.getElementById("green_oceanrt1").style.display = "block";
        document.getElementById("nautika_litert2").style.display = "none";
        document.getElementById("green_oceanrt2").style.display = "block";
      }
      else if(triptype === "Multiple Trip"){
        if(tripcount === 2){
          document.getElementById("nautika_litemt1").style.display = "none";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "none";
          document.getElementById("green_oceanmt2").style.display = "block";
        }
        else if(tripcount === 3){
          document.getElementById("nautika_litemt1").style.display = "none";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "none";
          document.getElementById("green_oceanmt2").style.display = "block";
          document.getElementById("nautika_litemt3").style.display = "none";
          document.getElementById("green_oceanmt3").style.display = "block";
        }
        else if(tripcount === 4){
          document.getElementById("nautika_litemt1").style.display = "none";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "none";
          document.getElementById("green_oceanmt2").style.display = "block";
          document.getElementById("nautika_litemt3").style.display = "none";
          document.getElementById("green_oceanmt3").style.display = "block";
          document.getElementById("nautika_litemt4").style.display = "none";
          document.getElementById("green_oceanmt4").style.display = "block";
        }
        else if(tripcount === 5){
          document.getElementById("nautika_litemt1").style.display = "none";
          document.getElementById("green_oceanmt1").style.display = "block";
          document.getElementById("nautika_litemt2").style.display = "none";
          document.getElementById("green_oceanmt2").style.display = "block";
          document.getElementById("nautika_litemt3").style.display = "none";
          document.getElementById("green_oceanmt3").style.display = "block";
          document.getElementById("nautika_litemt4").style.display = "none";
          document.getElementById("green_oceanmt4").style.display = "block";
          document.getElementById("nautika_litemt5").style.display = "none";
          document.getElementById("green_oceanmt5").style.display = "block";
        }
      }
    }

    const [ferryname, setFerryname] = useState('');
    const [departuretime, setDeparturetime] = useState('');
    const [arrivaltime, setArrivaltime] = useState('');
    const [adultprice, setAdultprice] = useState('');
    const [childprice, setChildprice] = useState('');
    const [selectedamenitie, setSelectedamenitie] = useState('');
  
    // Function to update the state values
    const updateStateValues = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerryname(ferryName);
      setDeparturetime(departureTime);
      setArrivaltime(arrivalTime);
      setAdultprice(adultprice);
      setChildprice(childprice);
      setSelectedamenitie(selectedamenitie);
     
    };

    const [ferrynamert2, setFerrynamert2] = useState('');
    const [departuretimert2, setDeparturetimert2] = useState('');
    const [arrivaltimert2, setArrivaltimert2] = useState('');
    const [adultpricert2, setAdultpricert2] = useState('');
    const [childpricert2, setChildpricert2] = useState('');
    const [selectedamenitiert2, setSelectedamenitiert2] = useState('');
  
    // Function to update the state values
    const updateStateValuesrt2 = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerrynamert2(ferryName);
      setDeparturetimert2(departureTime);
      setArrivaltimert2(arrivalTime);
      setAdultpricert2(adultprice);
      setChildpricert2(childprice);
      setSelectedamenitiert2(selectedamenitie);
     
    };

    const [ferrynamert1, setFerrynamert1] = useState('');
    const [departuretimert1, setDeparturetimert1] = useState('');
    const [arrivaltimert1, setArrivaltimert1] = useState('');
    const [adultpricert1, setAdultpricert1] = useState('');
    const [childpricert1, setChildpricert1] = useState('');
    const [selectedamenitiert1, setSelectedamenitiert1] = useState('');
  
    // Function to update the state values
    const updateStateValuesrt1 = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerrynamert1(ferryName);
      setDeparturetimert1(departureTime);
      setArrivaltimert1(arrivalTime);
      setAdultpricert1(adultprice);
      setChildpricert1(childprice);
      setSelectedamenitiert1(selectedamenitie);
     
    };

    const [ferrynamemt1, setFerrynamemt1] = useState('');
    const [departuretimemt1, setDeparturetimemt1] = useState('');
    const [arrivaltimemt1, setArrivaltimemt1] = useState('');
    const [adultpricemt1, setAdultpricemt1] = useState('');
    const [childpricemt1, setChildpricemt1] = useState('');
    const [selectedamenitiemt1, setSelectedamenitiemt1] = useState('');
  
    // Function to update the state values
    const updateStateValuesmt1 = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerrynamemt1(ferryName);
      setDeparturetimemt1(departureTime);
      setArrivaltimemt1(arrivalTime);
      setAdultpricemt1(adultprice);
      setChildpricemt1(childprice);
      setSelectedamenitiemt1(selectedamenitie);
     
    };

    const [ferrynamemt2, setFerrynamemt2] = useState('');
    const [departuretimemt2, setDeparturetimemt2] = useState('');
    const [arrivaltimemt2, setArrivaltimemt2] = useState('');
    const [adultpricemt2, setAdultpricemt2] = useState('');
    const [childpricemt2, setChildpricemt2] = useState('');
    const [selectedamenitiemt2, setSelectedamenitiemt2] = useState('');
  
    // Function to update the state values
    const updateStateValuesmt2 = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerrynamemt2(ferryName);
      setDeparturetimemt2(departureTime);
      setArrivaltimemt2(arrivalTime);
      setAdultpricemt2(adultprice);
      setChildpricemt2(childprice);
      setSelectedamenitiemt2(selectedamenitie);
     
    };

    const [ferrynamemt3, setFerrynamemt3] = useState('');
    const [departuretimemt3, setDeparturetimemt3] = useState('');
    const [arrivaltimemt3, setArrivaltimemt3] = useState('');
    const [adultpricemt3, setAdultpricemt3] = useState('');
    const [childpricemt3, setChildpricemt3] = useState('');
    const [selectedamenitiemt3, setSelectedamenitiemt3] = useState('');
  
    // Function to update the state values
    const updateStateValuesmt3 = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerrynamemt3(ferryName);
      setDeparturetimemt3(departureTime);
      setArrivaltimemt3(arrivalTime);
      setAdultpricemt3(adultprice);
      setChildpricemt3(childprice);
      setSelectedamenitiemt3(selectedamenitie);
     
    };

    const [ferrynamemt4, setFerrynamemt4] = useState('');
    const [departuretimemt4, setDeparturetimemt4] = useState('');
    const [arrivaltimemt4, setArrivaltimemt4] = useState('');
    const [adultpricemt4, setAdultpricemt4] = useState('');
    const [childpricemt4, setChildpricemt4] = useState('');
    const [selectedamenitiemt4, setSelectedamenitiemt4] = useState('');
  
    // Function to update the state values
    const updateStateValuesmt4 = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerrynamemt4(ferryName);
      setDeparturetimemt4(departureTime);
      setArrivaltimemt4(arrivalTime);
      setAdultpricemt4(adultprice);
      setChildpricemt4(childprice);
      setSelectedamenitiemt4(selectedamenitie);
     
    };

    const [ferrynamemt5, setFerrynamemt5] = useState('');
    const [departuretimemt5, setDeparturetimemt5] = useState('');
    const [arrivaltimemt5, setArrivaltimemt5] = useState('');
    const [adultpricemt5, setAdultpricemt5] = useState('');
    const [childpricemt5, setChildpricemt5] = useState('');
    const [selectedamenitiemt5, setSelectedamenitiemt5] = useState('');
  
    // Function to update the state values
    const updateStateValuesmt5 = (ferryName, departureTime, arrivalTime, adultprice, childprice, selectedamenitie) => {
      setFerrynamemt5(ferryName);
      setDeparturetimemt5(departureTime);
      setArrivaltimemt5(arrivalTime);
      setAdultpricemt5(adultprice);
      setChildpricemt5(childprice);
      setSelectedamenitiemt5(selectedamenitie);
     
    };

  let render;
  if(tripcount === 2){
    render = <>
                <div className='col-2'>
                </div>
                <div className='col-4' id='multitrip1' style={{backgroundColor:"white", height:"150px", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate}</label>
                </div>
                <div className='col-4' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate1}</label>
                </div>
                <div className='col-2'>
                </div>
             </>
  }
  else if(tripcount === 3){
    render = <>
                <div className='col-1'></div>
                <div className='col-3' id='multitrip1' style={{backgroundColor:"white", height:"150px", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate}</label>
                </div>
                <div className='col-3' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate1}</label>
                </div>
                <div className='col-3' id='multitrip3' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to1} &rarr; {to2}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate2}</label>
                </div>
                <div className='col-1'></div>
             </>
  } 
  else if(tripcount === 4){
    render = <>
                <div className='col-2'>
                </div>
                <div className='col-2' id='multitrip1' style={{backgroundColor:"white", height:"150px", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate}</label>
                </div>
                <div className='col-2' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate1}</label>
                </div>
                <div className='col-2' id='multitrip3' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to1} &rarr; {to2}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate2}</label>
                </div>
                <div className='col-2' id='multitrip4' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to2} &rarr; {to3}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate3}</label>
                </div>
                <div className='col-2'>
                </div>
             </>
  } 
  else if(tripcount === 5){
    render = <>
                <div className='col-1'></div>
                <div className='col-2' id='multitrip1' style={{backgroundColor:"white", height:"150px", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate}</label>
                </div>
                <div className='col-2' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate1}</label>
                </div>
                <div className='col-2' id='multitrip3' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to1} &rarr; {to2}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate2}</label>
                </div>
                <div className='col-2' id='multitrip4' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to2} &rarr; {to3}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate3}</label>
                </div>
                <div className='col-2' id='multitrip5' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", marginLeft:"1%", borderRadius:"15px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to3} &rarr; {to4}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {selectedDate4}</label>
                </div>
                <div className='col-1'></div>
             </>
  }
  
  return (
    <>
        <div className="sticky-top-form gray-white-bg" id='selecttrip'>
            <div className="container" style={{marginLeft:"10%"}}>
                <div className="row">
                    <div className="col" style={{marginTop:"60px"}}>
                        <h2>
                            Book Your Andaman Ferry
                        </h2>
                    </div>
                </div>
            </div>
            <div id="multi-ferry-form" style={{marginTop:"30px"}}>
                <div className="container" style={{paddingBottom:"30px"}}>
                    <div className="row" style={{marginTop:"2%"}}>
                        <div className="col-lg-4 col-md-12 col-sm-12 quantity-text font-medium">
                            Select Your Trip
                        </div>
                    </div>
                    {/* Select Trip Type*/}
                    <div className="row" id="selecttripradiobutton" style={{marginTop:"2%"}}>
                        <div className="col-lg-4 col-md-12 col-sm-12 gray1 font-medium">
                          <input type="radio" name="triptype" value="One Way Trip" onChange={handleTripTypeChange} />&nbsp;&nbsp;
                          One way Trip
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 gray1 font-medium">
                          <input type="radio" name="triptype" value="Round Trip" onChange={handleTripTypeChange} />&nbsp;&nbsp;
                          Round Trip
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 gray1 font-medium">
                          <input type="radio" name="triptype" value="Multiple Trip" onChange={handleTripTypeChange} />&nbsp;&nbsp;
                          Multiple Trip
                        </div>
                    </div>
                    {/* One Way Trip */}
                    <div id="one_way" style={{display:"none"}}>
                      <div className="row" style={{marginTop:"2%"}}>
                          <div className="col-sm-12 col-md-4 col-lg-4 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">From</p>
                              <div className="input-group input-from mb-3">
                                  <select className="form-control col-md-12" id='owfrom' value={owfrom} onChange={onewayOptionChangefrom} required>
                                      <option>Select</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="PortBlair">Port Blair</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Havelock (Swaraj Dweep)">Havelock (Swaraj Dweep)</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Neil Island (Shaheed Dweep)">Neil Island (Shaheed Dweep)</option>
                                  </select>
                                  <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </span> 
                              </div>
                              <p id='owfromerror' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">To</p>
                              <div className="input-group input-to mb-3">
                                  <select className="form-control col-md-12" id='owto' value={owto} onChange={onewayOptionChange} required>
                                      <option>Select</option>
                                      {state.options.map((option) => (
                                          <option key={option.value} className="font-medium font-size-small gray mar-b-1 mob-top" value={option.value}>{option.label}</option>
                                      ))}
                                  </select>
                                  <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </span>
                              </div>
                              <p id='owtoerror' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                              <div className="select-date d-flex justify-content-between align-items-center">
                                  <div className="w-100">
                                      <input type='date' id='owdate' className='form-control' style={{ height: '38px' }} min={today.format('YYYY-MM-DD')} value={owDate} onChange={owhandleDateChange} required/>
                                  </div>
                              </div>
                              <p id='owdateerror' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                          </div>
                      </div>
                    </div>
                    {/* Round Trip */}
                    <div id="round_trip" style={{display:"none"}}>
                      {/* 1st Journey */}
                      <div className="row" style={{marginTop:"2%"}}>
                          <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">From</p>
                              <div className="input-group input-from mb-3">
                                  <select className="form-control col-md-12" id='rtfrom' value={rtfrom} onChange={roundtripOptionChangefrom} required>
                                      <option>Select</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="PortBlair">Port Blair</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Havelock (Swaraj Dweep)">Havelock (Swaraj Dweep)</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Neil Island (Shaheed Dweep)">Neil Island (Shaheed Dweep)</option>
                                  </select>
                                  <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </span> 
                              </div>
                              <p id='rtfromerror' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">To</p>
                              <div className="input-group input-to mb-3">
                                  <select className="form-control col-md-12" id='rtto' value={rtto} onChange={roundtripOptionChange} required>
                                      <option>Select</option>
                                      {state.options.map((option) => (
                                          <option key={option.value} className="font-medium font-size-small gray mar-b-1 mob-top" value={option.value}>{option.label}</option>
                                      ))}
                                  </select>
                                  <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </span>
                              </div>
                              <p id='rttoerror' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-3 col-lg-3">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                              <div className="select-date d-flex justify-content-between align-items-center">
                                  <div className="w-100">
                                      <input type='date' id='rtdate' className='form-control' style={{ height: '38px' }} min={today.format('YYYY-MM-DD')} value={rt1Date} onChange={rt1handleDateChange} required/>
                                  </div>
                              </div>
                              <p id='rtdateerror' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                          </div>
                          <div className="col-sm-12 col-md-3 col-lg-3">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                              <div className="select-date d-flex justify-content-between align-items-center">
                                  <div className="w-100">
                                      <input type='date' id='rt1date' className='form-control' style={{ height: '38px' }} min={rt1Date} value={rt2Date} onChange={rt2handleDateChange} required/>
                                  </div>
                              </div>
                              <p id='rt1dateerror' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                          </div>
                      </div>
                    </div>
                    {/* Multiple Trip */}
                    <div id="multiple_trip" style={{display:"none"}}>
                      {/* 1st Journey */}
                      <div className="row" style={{marginTop:"1%"}}>
                          <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">From</p>
                              <div className="input-group input-from mb-3">
                                  <select className="form-control col-md-12" onChange={handleOptionChange} id='mtfrom'>
                                      <option>Select</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="PortBlair">Port Blair</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Havelock (Swaraj Dweep)">Havelock (Swaraj Dweep)</option>
                                      <option className="font-medium font-size-small gray mar-b-1 mob-top" value="Neil Island (Shaheed Dweep)">Neil Island (Shaheed Dweep)</option>
                                  </select>
                                  <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </span> 
                              </div>
                              <p id='mtfromerror' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">To</p>
                              <div className="input-group input-to mb-3">
                                  <select className="form-control col-md-12" id='mtto' onChange={handleOptionChange1}>
                                      <option>Select</option>
                                      {state.options.map((option) => (
                                          <option key={option.value} className="font-medium font-size-small gray mar-b-1 mob-top" value={option.value}>{option.label}</option>
                                      ))}
                                  </select>
                                  <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </span>
                              </div>
                              <p id='mttoerror' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-3 col-lg-3">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                              <div className="select-date d-flex justify-content-between align-items-center">
                                  <div className="w-100">
                                      <input type='date' id='mtdate' className='form-control' style={{ height: '38px' }} min={today.format('YYYY-MM-DD')} value={selectedDate} onChange={handleDateChange} />
                                  </div>
                              </div>
                              <p id='mtdateerror' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                          </div>
                      </div>
                      {/* Second Trip */}
                      <div className="row">
                          <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">From</p>
                              <div className="input-group input-from mb-3">
                                  <div className="input-group input-from mb-3">
                                    <select className="form-control col-md-12" id='mtfrom1' onChange={handleOptionChangetrip2}>
                                        <option>Select</option>
                                        <option className="font-medium font-size-small gray mar-b-1 mob-top" value={to}>{to}</option>
                                    </select>
                                    <span className="dropdown-icon">
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </span> 
                                  </div>
                              </div>
                              <p id='mtfrom1error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">To</p>
                              <div className="input-group input-to mb-3">
                                  <select className="form-control col-md-12" id='mtto1' onChange={handleOptionChange2}>
                                      <option>Select</option>
                                      {state1.options1.map((option) => (
                                          <option key={option.value} className="font-medium font-size-small gray mar-b-1 mob-top" value={option.value}>{option.label}</option>
                                      ))}
                                  </select>
                                  <span className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </span>
                              </div>
                              <p id='mtto1error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                          </div>
                          <div className="col-sm-12 col-md-3 col-lg-3">
                              <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                              <div className="select-date d-flex justify-content-between align-items-center">
                                  <div className="w-100">
                                      <input type='date' id='mtdate1' className='form-control' style={{ height: '38px' }} min={selectedDate} value={selectedDate1} onChange={handleDateChange1} />
                                  </div>
                              </div>
                              <p id='mtdate1error' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                          </div>
                          <div className="col-sm-12 col-md-2 col-lg-2 no-padding-right-md" id='addbutton'>
                            <input type="button" value="Add Trip" className='btn btn-primary' onClick={addfield} style={{marginTop:"25%", height:"38px",width:"100px"}} />
                          </div>
                      </div>
                      {/* Third Trip */}
                      <div id='trip3' style={{display:"none"}}>
                        <div className="row" style={{marginTop:"-2%"}}>
                            <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">From</p>
                                <div className="input-group input-from mb-3">
                                    <select className="form-control col-md-12" id='mtfrom2' onChange={handleOptionChangetrip3}>
                                        <option>Select</option>
                                        <option className="font-medium font-size-small gray mar-b-1 mob-top" value={to1}>{to1}</option>
                                    </select>
                                    <span className="dropdown-icon">
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </span> 
                                </div>
                                <p id='mtfrom2error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">To</p>
                                <div className="input-group input-to mb-3">
                                    <select className="form-control col-md-12" id='mtto2' onChange={handleOptionChange3}>
                                        <option>Select</option>
                                        {state2.options2.map((option) => (
                                            <option key={option.value} className="font-medium font-size-small gray mar-b-1 mob-top" value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <span className="dropdown-icon">
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </div>
                                <p id='mtto2error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                                <div className="select-date d-flex justify-content-between align-items-center">
                                    <div className="w-100">
                                        <input type='date' id='mtdate2' className='form-control' style={{ height: '38px' }} min={selectedDate1} value={selectedDate2} onChange={handleDateChange2} />
                                    </div>
                                </div>
                                <p id='mtdate2error' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                            </div>
                            <div className="col-sm-12 col-md-1 col-lg-1 no-padding-right-md">
                              <input type="button" value="Add Trip" id='addbutton1' className='btn btn-primary' onClick={addfield1}  style={{height:"38px",width:"90px", marginTop:"58%"}}/>
                            </div>
                            <div className="col-sm-12 col-md-2 col-lg-2 no-padding-right-md">
                              <input type="button" value="Remove Trip" id='removebutton1' className='btn btn-danger' onClick={removefield1} style={{height:"38px",width:"110px", marginLeft:"10%",marginTop:"24%"}} />
                            </div>
                        </div>
                      </div>
                      {/* Fourth Trip */}
                      <div id='trip4' style={{display:"none"}}>
                        <div className="row" style={{marginTop:"-2%"}}>
                            <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">From</p>
                                <div className="input-group input-from mb-3">
                                    <select className="form-control col-md-12" id='mtfrom3' onChange={handleOptionChangetrip4}>
                                        <option>Select</option>
                                        <option className="font-medium font-size-small gray mar-b-1 mob-top" value={to2}>{to2}</option>
                                    </select>
                                    <span className="dropdown-icon">
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </span> 
                                </div>
                                <p id='mtfrom3error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">To</p>
                                <div className="input-group input-to mb-3">
                                    <select className="form-control col-md-12" id='mtto3' onChange={handleOptionChange4}>
                                        <option>Select</option>
                                        {state3.options3.map((option) => (
                                            <option key={option.value} className="font-medium font-size-small gray mar-b-1 mob-top" value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <span className="dropdown-icon">
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </div>
                                <p id='mtto3error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                                <div className="select-date d-flex justify-content-between align-items-center">
                                    <div className="w-100">
                                        <input type='date' id='mtdate3' className='form-control' style={{ height: '38px' }} min={selectedDate2} value={selectedDate3} onChange={handleDateChange3} />
                                    </div>
                                </div>
                                <p id='mtdate3error' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                            </div>
                            <div className="col-sm-12 col-md-1 col-lg-1 no-padding-right-md">
                              <input type="button" value="Add Trip" id='addbutton2' className='btn btn-primary' onClick={addfield2} style={{height:"38px",width:"90px", marginTop:"58%"}}/>
                            </div>
                            <div className="col-sm-12 col-md-2 col-lg-2 no-padding-right-md">
                              <input type="button" value="Remove Trip" id='removebutton2' className='btn btn-danger' onClick={removefield2} style={{height:"38px",width:"110px", marginLeft:"10%",marginTop:"24%"}}/>
                            </div>
                        </div>
                      </div>
                      {/* Fifth Trip */}
                      <div id='trip5' style={{display:"none"}}>
                        <div className="row" style={{marginTop:"-2%"}}>
                            <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">From</p>
                                <div className="input-group input-from mb-3">
                                  <select className="form-control col-md-12" id='mtfrom4' onChange={handleOptionChangetrip5}>
                                        <option>Select</option>
                                        <option className="font-medium font-size-small gray mar-b-1 mob-top" value={to3}>{to3}</option>
                                    </select>
                                </div>
                                <p id='mtfrom4error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 no-padding-right-md">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">To</p>
                                <div className="input-group input-to mb-3">
                                    <select className="form-control col-md-12" id='mtto4' onChange={handleOptionChange5}>
                                        <option>Select</option>
                                        {state4.options4.map((option) => (
                                            <option key={option.value} className="font-medium font-size-small gray mar-b-1 mob-top" value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <span className="dropdown-icon">
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </div>
                                <p id='mtto4error' style={{display:"none", color:"red", fontSize:"12px", marginTop:"-5%"}}>Please select the location </p>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <p className="font-medium font-size-small gray mar-b-1 mob-top">Date of Journey</p>
                                <div className="select-date d-flex justify-content-between align-items-center">
                                    <div className="w-100">
                                        <input type='date' id='mtdate4' className='form-control' style={{ height: '38px' }} min={selectedDate3} value={selectedDate4} onChange={handleDateChange4} />
                                    </div>
                                </div>
                                <p id='mtdate4error' style={{display:"none", color:"red", fontSize:"12px"}}>Please select the date </p>
                            </div>
                            <div className="col-sm-12 col-md-2 col-lg-2 no-padding-right-md">
                            <input type="button" value="Remove Trip" id='removebutton3' className='btn btn-danger' onClick={removefield3} style={{marginTop:"25%", height:"38px",width:"110px"}}/>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Passengers Details */}
                    <div className="row" style={{marginTop:"2%"}}>
                        <div className="col-lg-3 col-md-12 col-sm-12 quantity-text font-medium">
                            Select Passengers
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 gray font-medium">
                            <p>Adults<span className="font-regular font-size-smallest gray-light mob-text"> (Above 12 Years<sup>*</sup>)</span></p>
                            <div className="input-box">
                              <button className="button button-minus" onClick={handleMinusClick}> - </button>
                              <div className="number">{count}</div>
                              <button className="button button-plus" onClick={handlePlusClick}> + </button>
                            </div>
                        </div>                       
                        <div className="col-lg-3 col-md-12 col-sm-12 gray font-medium">
                            <p>Child<span className="font-regular font-size-smallest gray-light mob-text"> (2-12 Years<sup>*</sup>)</span></p>
                            <div className="input-box">
                              <button className="button button-minus" onClick={handleMinusClick1}> - </button>
                              <div className="number">{count1}</div>
                              <button className="button button-plus" onClick={handlePlusClick1}> + </button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 gray font-medium">
                            <p>Infants<span className="font-regular font-size-smallest gray-light mob-text"> (Below 2 Years<sup>*</sup>)</span></p>
                            <div className="input-box">
                              <button className="button button-minus" onClick={handleMinusClick2}> - </button>
                              <div className="number">{count2}</div>
                              <button className="button button-plus" onClick={handlePlusClick2}> + </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      <span className="font-regular font-size-smallest gray-light mob-text">* Age as of the date of journey.</span>
                    </div>
                </div>
            </div>
            <div className="ferry-search text-center">
              <button type="button" className='btn btn-success' onClick={selectferry} style={{fontSize:"24px",paddingBottom:"40px", height:"40px", marginBottom:"32px"}}>SEARCH</button>
            </div>
        </div>

        <div className="sticky-top-form gray-white-bg1" id="selectonewayferry" style={{ display:"none"}}>
            <br></br>
            <div className='container rt'>
              <div className='row'>
                <div className='col-4'>

                </div>
                <div className='col-4' style={{backgroundColor:"white", height:"150px", textAlign:"center", paddingTop:"2%", borderRadius:"15px"}}>
                  <span className='rtfromto'>{owfrom} &rarr; {owto}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {owDate}</label>
                </div>
                <div className='col-4'>
                  
                </div>
              </div>
            </div>
            <div className='container-fluid rt'>
              <div className='row'>
                <div className='col-3'>
                  <div className="container">
                    <div className='row'>
                      <div className='container' style={{ backgroundColor:"rgb(254, 187, 2)"}}>
                          <div className='row'>
                              <div className='col'>
                                  <h4 style={{textAlign:"center", marginTop:"10%"}}>No. Of Passengers</h4>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"4%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Adult: {count}</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"4%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Child: {count1}</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"10%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Infant: {count2}</span>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className='row my-5'>
                      <div className='container' style={{ backgroundColor:"white"}}>
                          <div className='row'>
                              <div className='col'>
                                  <h4 style={{textAlign:"center", marginTop:"10%",backgroundColor:"#e6f7ff",padding:"10px"}}>Ferry Operater Filter</h4>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%", marginTop:"4%"}}>
                                <input type="radio" name='filter' onChange={allfilter}/>&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>All Ferry</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' onChange={nautikalitefilter}/>&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Nautika Lite</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' onChange={greenoceanfilter} />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Green Ocean</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Nautika</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%", marginBottom:"10%"}}>
                                <input type="radio" name='filter' />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Green Ocean 1</span>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-9'>
                  <div><Oneway updateStateValues={updateStateValues} /></div>
                </div>
              </div>
            </div>
        </div>

        <div className="sticky-top-form gray-white-bg1" id="selectroundtripferry" style={{ display:"none"}}>
          <br></br>
            <div className='container rt'>
              <div className='row'>
                <div className='col-2'>
                  
                </div>
                <div className='col-4' id='roundtrip1' style={{backgroundColor:"white", height:"150px", textAlign:"center", paddingTop:"2%", borderRadius:"15px"}}>
                  <span className='rtfromto'>{rtfrom} &rarr; {rtto}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {rt1Date}</label>
                </div>
                <div className='col-4' id='roundtrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"150px", textAlign:"center", paddingTop:"2%", borderRadius:"15px", marginLeft:"2%"}}>
                  <span className='rtfromto'>{rtto} &rarr; {rtfrom}</span>
                  <br></br>
                  <label style={{marginTop:"10%", color:"#0000008e"}}>Date: {rt2Date}</label>
                </div>
                <div className='col-2'>
                  
                </div>
              </div>
            </div>
            <div className='container-fluid rt'>
              <div className='row'>
                <div className='col-3'>
                  <div className="container">
                    <div className='row'>
                      <div className='container' style={{ backgroundColor:"rgb(254, 187, 2)"}}>
                          <div className='row'>
                              <div className='col'>
                                  <h4 style={{textAlign:"center", marginTop:"10%"}}>No. Of Passengers</h4>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"4%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Adult: {count}</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"4%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Child: {count1}</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"10%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Infant: {count2}</span>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className='row my-5'>
                      <div className='container' style={{ backgroundColor:"white"}}>
                          <div className='row'>
                              <div className='col'>
                                  <h4 style={{textAlign:"center", marginTop:"10%",backgroundColor:"#e6f7ff",padding:"10px"}}>Ferry Operater Filter</h4>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%", marginTop:"4%"}}>
                                <input type="radio" name='filter' onChange={allfilter}/>&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>All Ferry</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' onChange={nautikalitefilter}/>&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Nautika Lite</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' onChange={greenoceanfilter} />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Green Ocean</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Nautika</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%", marginBottom:"10%"}}>
                                <input type="radio" name='filter' />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Green Ocean 1</span>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-9'>
                  <div className='container'>
                    <div className='row' id='rt1'>
                      <div className='col'>
                        <Roundtrip1 updateStateValuesrt1={updateStateValuesrt1}/>
                      </div>                
                    </div>
                    <div className='row' id='rt2' style={{display:"none"}}>
                      <div className='col'>
                        this is trip 2
                        <Roundtrip2 updateStateValuesrt2={updateStateValuesrt2}/>
                      </div>                
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div> 

        <div className="sticky-top-form gray-white-bg1" id="selectmultitripferry" style={{ display:"none"}}>
          <br></br>
            <div className='container rt'>
              <div className='row'>
                {render}
              </div>
            </div>
            <div className='container-fluid rt'>
              <div className='row'>
                <div className='col-3'>
                  <div className="container">
                    <div className='row'>
                      <div className='container' style={{ backgroundColor:"rgb(254, 187, 2)"}}>
                          <div className='row'>
                              <div className='col'>
                                  <h4 style={{textAlign:"center", marginTop:"10%"}}>No. Of Passengers</h4>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"4%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Adult: {count}</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"4%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Child: {count1}</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"50px", marginLeft:"6%", marginRight:"6%", marginTop:"4%", marginBottom:"10%", textAlign:"center"}}>
                                  <span style={{fontSize:"24px"}}>Infant: {count2}</span>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className='row my-5'>
                      <div className='container' style={{ backgroundColor:"white"}}>
                          <div className='row'>
                              <div className='col'>
                                  <h4 style={{textAlign:"center", marginTop:"10%",backgroundColor:"#e6f7ff",padding:"10px"}}>Ferry Operater Filter</h4>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%", marginTop:"4%"}}>
                                <input type="radio" name='filter' onChange={allfilter}/>&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>All Ferry</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' onChange={nautikalitefilter}/>&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Nautika Lite</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' onChange={greenoceanfilter} />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Green Ocean</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%"}}>
                                <input type="radio" name='filter' />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Nautika</span>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col' style={{backgroundColor:"white", height:"35px", marginLeft:"6%", marginRight:"6%", marginBottom:"10%"}}>
                                <input type="radio" name='filter' />&nbsp;&nbsp;
                                  <span style={{fontSize:"18px"}}>Green Ocean 1</span>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-9'>
                  <div className='container'>
                    <div className='row' id='mt1'>
                      <div className='col'>
                        <Multipletrip1 updateStateValuesmt1={updateStateValuesmt1}/>
                      </div>                
                    </div>
                    <div className='row' id='mt2' style={{display:"none"}}>
                      <div className='col'>
                        <Multipletrip2 tripcount = {tripcount} updateStateValuesmt2={updateStateValuesmt2}/>
                      </div>                
                    </div>
                    <div className='row' id='mt3' style={{display:"none"}}>
                      <div className='col'>
                        <Multipletrip3 tripcount = {tripcount} updateStateValuesmt3={updateStateValuesmt3}/>
                      </div>                
                    </div>
                    <div className='row' id='mt4' style={{display:"none"}}>
                      <div className='col'>
                        <Multipletrip4 tripcount = {tripcount} updateStateValuesmt4={updateStateValuesmt4}/>
                      </div>                
                    </div>
                    <div className='row' id='mt5' style={{display:"none"}}>
                      <div className='col'>
                        <Multipletrip5 updateStateValuesmt5={updateStateValuesmt5}/>
                      </div>                
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
        <div id='show' style={{display:"none"}}>
          <Travellersdetail  adults={count} child={count1} infant={count2} owfrom={owfrom} owto={owto} rtfrom={rtfrom} rtto={rtto}
            from={from} to={to} to1={to1} to2={to2} to3={to3} to4={to4} tripcount={tripcount} triptype={triptype} owDate={owDate}
            rt1Date={rt1Date} rt2Date={rt2Date} selectedDate={selectedDate} selectedDate1={selectedDate1} selectedDate2={selectedDate2} 
            selectedDate3={selectedDate3} selectedDate4={selectedDate4} ferryName={ferryname} departureTime={departuretime} arrivalTime={arrivaltime}
            adultprice={adultprice} childprice={childprice} selectedamenitie={selectedamenitie} ferryNamert2={ferrynamert2} departureTimert2={departuretimert2} 
            arrivalTimert2={arrivaltimert2} adultpricert2={adultpricert2} childpricert2={childpricert2} selectedamenitiert2={selectedamenitiert2}
            ferryNamert1={ferrynamert1} departureTimert1={departuretimert1} arrivalTimert1={arrivaltimert1} adultpricert1={adultpricert1} childpricert1={childpricert1} selectedamenitiert1={selectedamenitiert1}
            ferryNamemt1={ferrynamemt1} departureTimemt1={departuretimemt1} arrivalTimemt1={arrivaltimemt1} adultpricemt1={adultpricemt1} childpricemt1={childpricemt1} selectedamenitiemt1={selectedamenitiemt1}
            ferryNamemt2={ferrynamemt2} departureTimemt2={departuretimemt2} arrivalTimemt2={arrivaltimemt2} adultpricemt2={adultpricemt2} childpricemt2={childpricemt2} selectedamenitiemt2={selectedamenitiemt2}
            ferryNamemt3={ferrynamemt3} departureTimemt3={departuretimemt3} arrivalTimemt3={arrivaltimemt3} adultpricemt3={adultpricemt3} childpricemt3={childpricemt3} selectedamenitiemt3={selectedamenitiemt3}
            ferryNamemt4={ferrynamemt4} departureTimemt4={departuretimemt4} arrivalTimemt4={arrivaltimemt4} adultpricemt4={adultpricemt4} childpricemt4={childpricemt4} selectedamenitiemt4={selectedamenitiemt4}
            ferryNamemt5={ferrynamemt5} departureTimemt5={departuretimemt5} arrivalTimemt5={arrivaltimemt5} adultpricemt5={adultpricemt5} childpricemt5={childpricemt5} selectedamenitiemt5={selectedamenitiemt5}
          />
        </div>
    </>
  )
}

export default Ferry