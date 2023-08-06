import React from 'react';
import './Ferry.css';
import { useReducer } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PbtoHvl from './PbtoHvl';
import Travellersdetail from './Travellersdetail';
import PbtoNI from './PbtoNI';
import HvltoPb from './HvltoPb';
import HvltoNI from './HvltoNI';
import NItoPb from './NItoPb';
import NItoHvl from './NItoHvl';
import PbtoHvlrt2 from './PbtoHvlrt2';
import PbtoNIrt2 from './PbtoNIrt2';
import HvltoPbrt2 from './HvltoPbrt2';
import HvltoNIrt2 from './HvltoNIrt2';
import NItoPbrt2 from './NItoPbrt2';
import NItoHvlrt2 from './NItoHvlrt2';
import PbtoHvlmt1 from './PbtoHvlmt1';
import PbtoNImt1 from './PbtoNImt1';
import HvltoPbmt1 from './HvltoPbmt1';
import HvltoNImt1 from './HvltoNImt1';
import NItoPbmt1 from './NItoPbmt1';
import NItoHvlmt1 from './NItoHvlmt1';
import PbtoHvlmt2 from './PbtoHvlmt2';
import PbtoNImt2 from './PbtoNImt2';
import HvltoPbmt2 from './HvltoPbmt2';
import HvltoNImt2 from './HvltoNImt2';
import NItoPbmt2 from './NItoPbmt2';
import NItoHvlmt2 from './NItoHvlmt2';
import PbtoHvlmt3 from './PbtoHvlmt3';
import PbtoNImt3 from './PbtoNImt3';
import HvltoPbmt3 from './HvltoPbmt3';
import HvltoNImt3 from './HvltoNImt3';
import NItoPbmt3 from './NItoPbmt3';
import NItoHvlmt3 from './NItoHvlmt3';
import PbtoHvlmt4 from './PbtoHvlmt4';
import PbtoNImt4 from './PbtoNImt4';
import HvltoPbmt4 from './HvltoPbmt4';
import HvltoNImt4 from './HvltoNImt4';
import NItoPbmt4 from './NItoPbmt4';
import NItoHvlmt4 from './NItoHvlmt4';
import PbtoHvlmt5 from './PbtoHvlmt5';
import PbtoNImt5 from './PbtoNImt5';
import HvltoPbmt5 from './HvltoPbmt5';
import HvltoNImt5 from './HvltoNImt5';
import NItoPbmt5 from './NItoPbmt5';
import NItoHvlmt5 from './NItoHvlmt5';

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
      // storing value of one way "from" field
      setOwFrom(event.target.value);
    };

    const onewayOptionChange = (event) => {
      // storing value of one way "to" field
      setOwTo(event.target.value);
    };

    const roundtripOptionChangefrom = (event) => {
      dispatch({ type: 'SELECT_OPTION', value: event.target.value });
      // storing value of Round Trip "from" field
      setRtFrom(event.target.value);
    };

    const roundtripOptionChange = (event) => {
      // storing value of Round Trip "to" field
      setRtTo(event.target.value);
    };

    const handleOptionChange = (event) => {
      dispatch({ type: 'SELECT_OPTION', value: event.target.value });
      // storing value of Multiple Trip 1 "from" field
      setFrom(event.target.value);
    };

    const handleOptionChangetrip2 = (event) => {
      dispatch1({ type: 'SELECT_OPTION1', value: event.target.value });
      // storing value of Multiple Trip 2 "from" field
      setFrom1(event.target.value);
    };

    const handleOptionChangetrip3 = (event) => {
      dispatch2({ type: 'SELECT_OPTION2', value: event.target.value });
      // storing value of Multiple Trip 3 "from" field
      setFrom2(event.target.value);
    };

    const handleOptionChangetrip4 = (event) => {
      dispatch3({ type: 'SELECT_OPTION3', value: event.target.value });
      // storing value of Multiple Trip 4 "from" field
      setFrom3(event.target.value);
    };

    const handleOptionChangetrip5 = (event) => {
      dispatch4({ type: 'SELECT_OPTION4', value: event.target.value });
      // storing value of Multiple Trip 5 "from" field
      setFrom4(event.target.value);
    };

    const handleOptionChange1 = (event) => {
      // storing value of Multiple Trip 1 "to" field
      setTo(event.target.value);
    };

    const handleOptionChange2 = (event) => {
      // storing value of Multiple Trip 2 "to" field
      setTo1(event.target.value);
    };

    const handleOptionChange3 = (event) => {
      // storing value of Multiple Trip 3 "to" field
      setTo2(event.target.value);
    };

    const handleOptionChange4 = (event) => {
      // storing value of Multiple Trip 4 "to" field
      setTo3(event.target.value);
    };

    const handleOptionChange5 = (event) => {
      // storing value of Multiple Trip 5 "to" field
      setTo4(event.target.value);
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
      // storing One way trip date
      setOwDate(event.target.value);
    };

    const rt1handleDateChange = (event) => {
      // storing Round way trip1 date
      setRt1Date(event.target.value);
    };

    const rt2handleDateChange = (event) => {
      // storing Round way trip2 date
      setRt2Date(event.target.value);
    };

    const handleDateChange = (event) => {
      // storing Multiple Trip trip1 date
      setSelectedDate(event.target.value);
    };

    const handleDateChange1 = (event) => {
      // storing Multiple Trip trip2 date
      setSelectedDate1(event.target.value);
    };

    const handleDateChange2 = (event) => {
      // storing Multiple Trip trip3 date
      setSelectedDate2(event.target.value);
    };

    const handleDateChange3 = (event) => {
      // storing Multiple Trip trip4 date
      setSelectedDate3(event.target.value);
    };

    const handleDateChange4 = (event) => {
      // storing Multiple Trip trip5 date
      setSelectedDate4(event.target.value);
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

  let renderOWContent;
  // Rendering pages according to conditions for One Way Trip
  if (owfrom === 'PortBlair' && owto === 'Havelock (Swaraj Dweep)') {
    renderOWContent = <div><PbtoHvl /></div>;
  } else if(owfrom === 'PortBlair' && owto === 'Neil Island (Shaheed Dweep)') {
    renderOWContent = <div><PbtoNI /></div>;
  } else if(owfrom === 'Havelock (Swaraj Dweep)' && owto === 'Neil Island (Shaheed Dweep)') {
    renderOWContent = <div><HvltoNI /></div>;
  } else if(owfrom === 'Havelock (Swaraj Dweep)' && owto === 'PortBlair') {
    renderOWContent = <div><HvltoPb /></div>;
  } else if(owfrom === 'Neil Island (Shaheed Dweep)' && owto === 'PortBlair') {
    renderOWContent = <div><NItoPb /></div>;
  } else if(owfrom === 'Neil Island (Shaheed Dweep)' && owto === 'Havelock (Swaraj Dweep)'){
    renderOWContent = <div><NItoHvl /></div>;
  }
  
  let renderrtContent;
  // Rendering pages according to conditions for Round Way Trip2
  if (rtfrom === 'PortBlair' && rtto === 'Havelock (Swaraj Dweep)') {
    renderrtContent = <HvltoPb />;
  } else if(rtfrom === 'PortBlair' && rtto === 'Neil Island (Shaheed Dweep)') {
    renderrtContent = <NItoPb />;
  } else if(rtfrom === 'Havelock (Swaraj Dweep)' && rtto === 'Neil Island (Shaheed Dweep)') {
    renderrtContent = <NItoHvl />;
  } else if(rtfrom === 'Havelock (Swaraj Dweep)' && rtto === 'PortBlair') {
    renderrtContent = <PbtoHvl />;
  } else if(rtfrom === 'Neil Island (Shaheed Dweep)' && rtto === 'PortBlair') {
    renderrtContent = <PbtoNI />;
  } else if(rtfrom === 'Neil Island (Shaheed Dweep)' && rtto === 'Havelock (Swaraj Dweep)'){
    renderrtContent = <HvltoNI />;
  }

  let renderrtContent1;
  // Rendering pages according to conditions for Round Way Trip1
  if ((rtfrom === 'PortBlair' && rtto === 'Havelock (Swaraj Dweep)') || (from === 'PortBlair' && to === 'Havelock (Swaraj Dweep)')) {
    renderrtContent1 = <PbtoHvlrt2 />;
  } else if((rtfrom === 'PortBlair' && rtto === 'Neil Island (Shaheed Dweep)') || (from === 'PortBlair' && to === 'Neil Island (Shaheed Dweep)')) {
    renderrtContent1 = <PbtoNIrt2 />;
  } else if((rtfrom === 'Havelock (Swaraj Dweep)' && rtto === 'Neil Island (Shaheed Dweep)') || (from === 'Havelock (Swaraj Dweep)' && to === 'Neil Island (Shaheed Dweep)')) {
    renderrtContent1 = <HvltoNIrt2 />;
  } else if((rtfrom === 'Havelock (Swaraj Dweep)' && rtto === 'PortBlair') || (from === 'Havelock (Swaraj Dweep)' && to === 'PortBlair')) {
    renderrtContent1 = <HvltoPbrt2 />;
  } else if((rtfrom === 'Neil Island (Shaheed Dweep)' && rtto === 'PortBlair') || (from === 'Neil Island (Shaheed Dweep)' && to === 'PortBlair')) {
    renderrtContent1 = <NItoPbrt2 />;
  } else if((rtfrom === 'Neil Island (Shaheed Dweep)' && rtto === 'Havelock (Swaraj Dweep)') || (from === 'Neil Island (Shaheed Dweep)' && to === 'Havelock (Swaraj Dweep)')){
    renderrtContent1 = <NItoHvlrt2 />;
  }

  let rendermtContent1;
  // Rendering pages according to conditions for Multiple Trip Trip1
  if ((from === 'PortBlair' && to === 'Havelock (Swaraj Dweep)')) {
    rendermtContent1 = <PbtoHvlmt1 />;
  } else if((from === 'PortBlair' && to === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent1 = <PbtoNImt1 />;
  } else if((from === 'Havelock (Swaraj Dweep)' && to === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent1 = <HvltoNImt1 />;
  } else if((from === 'Havelock (Swaraj Dweep)' && to === 'PortBlair')) {
    rendermtContent1 = <HvltoPbmt1 />;
  } else if((from === 'Neil Island (Shaheed Dweep)' && to === 'PortBlair')) {
    rendermtContent1 = <NItoPbmt1 />;
  } else if((from === 'Neil Island (Shaheed Dweep)' && to === 'Havelock (Swaraj Dweep)')){
    rendermtContent1 = <NItoHvlmt1 />;
  }

  let rendermtContent2;
  // Rendering pages according to conditions for Multiple Trip Trip2
  if ((to === 'PortBlair' && to1 === 'Havelock (Swaraj Dweep)')) {
    rendermtContent2 = <PbtoHvlmt2 tripcount = {tripcount}/>;
  } else if((to === 'PortBlair' && to1 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent2 = <PbtoNImt2 tripcount = {tripcount}/>;
  } else if((to === 'Havelock (Swaraj Dweep)' && to1 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent2 = <HvltoNImt2 tripcount = {tripcount}/>;
  } else if((to === 'Havelock (Swaraj Dweep)' && to1 === 'PortBlair')) {
    rendermtContent2 = <HvltoPbmt2 tripcount = {tripcount}/>;
  } else if((to === 'Neil Island (Shaheed Dweep)' && to1 === 'PortBlair')) {
    rendermtContent2 = <NItoPbmt2 tripcount = {tripcount}/>;
  } else if((to === 'Neil Island (Shaheed Dweep)' && to1 === 'Havelock (Swaraj Dweep)')){
    rendermtContent2 = <NItoHvlmt2 tripcount = {tripcount}/>;
  }

  let rendermtContent3;
  // Rendering pages according to conditions for Multiple Trip Trip3
  if ((to1 === 'PortBlair' && to2 === 'Havelock (Swaraj Dweep)')) {
    rendermtContent3 = <PbtoHvlmt3 tripcount = {tripcount}/>;
  } else if((to1 === 'PortBlair' && to2 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent3 = <PbtoNImt3 tripcount = {tripcount}/>;
  } else if((to1 === 'Havelock (Swaraj Dweep)' && to2 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent3 = <HvltoNImt3 tripcount = {tripcount}/>;
  } else if((to1 === 'Havelock (Swaraj Dweep)' && to2 === 'PortBlair')) {
    rendermtContent3 = <HvltoPbmt3 tripcount = {tripcount}/>;
  } else if((to1 === 'Neil Island (Shaheed Dweep)' && to2 === 'PortBlair')) {
    rendermtContent3 = <NItoPbmt3 tripcount = {tripcount}/>;
  } else if((to1 === 'Neil Island (Shaheed Dweep)' && to2 === 'Havelock (Swaraj Dweep)')){
    rendermtContent3 = <NItoHvlmt3 tripcount = {tripcount}/>;
  }

  let rendermtContent4;
  // Rendering pages according to conditions for Multiple Trip Trip4
  if ((to2 === 'PortBlair' && to3 === 'Havelock (Swaraj Dweep)')) {
    rendermtContent4 = <PbtoHvlmt4 tripcount = {tripcount}/>;
  } else if((to2 === 'PortBlair' && to3 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent4 = <PbtoNImt4 tripcount = {tripcount}/>;
  } else if((to2 === 'Havelock (Swaraj Dweep)' && to3 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent4 = <HvltoNImt4 tripcount = {tripcount}/>;
  } else if((to2 === 'Havelock (Swaraj Dweep)' && to3 === 'PortBlair')) {
    rendermtContent4 = <HvltoPbmt4 tripcount = {tripcount}/>;
  } else if((to2 === 'Neil Island (Shaheed Dweep)' && to3 === 'PortBlair')) {
    rendermtContent4 = <NItoPbmt4 tripcount = {tripcount}/>;
  } else if((to2 === 'Neil Island (Shaheed Dweep)' && to3 === 'Havelock (Swaraj Dweep)')){
    rendermtContent4 = <NItoHvlmt4 tripcount = {tripcount}/>;
  }

  let rendermtContent5;
  // Rendering pages according to conditions for Multiple Trip Trip5
  if ((to3 === 'PortBlair' && to4 === 'Havelock (Swaraj Dweep)')) {
    rendermtContent5 = <PbtoHvlmt5 tripcount = {tripcount}/>;
  } else if((to3 === 'PortBlair' && to4 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent5 = <PbtoNImt5 tripcount = {tripcount}/>;
  } else if((to3 === 'Havelock (Swaraj Dweep)' && to4 === 'Neil Island (Shaheed Dweep)')) {
    rendermtContent5 = <HvltoNImt5 tripcount = {tripcount}/>;
  } else if((to3 === 'Havelock (Swaraj Dweep)' && to4 === 'PortBlair')) {
    rendermtContent5 = <HvltoPbmt5 tripcount = {tripcount}/>;
  } else if((to3 === 'Neil Island (Shaheed Dweep)' && to4 === 'PortBlair')) {
    rendermtContent5 = <NItoPbmt5 tripcount = {tripcount}/>;
  } else if((to3 === 'Neil Island (Shaheed Dweep)' && to4 === 'Havelock (Swaraj Dweep)')){
    rendermtContent5 = <NItoHvlmt5 tripcount = {tripcount}/>;
  }

  let render;
  // Setting no. of column according to no. of trip selected
  if(tripcount === 2){
    render = <>
                <div className='col-6' id='multitrip1' style={{backgroundColor:"white", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                </div>
                <div className='col-6' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                </div>
             </>
  }

  else if(tripcount === 3){
    render = <>
                <div className='col-4' id='multitrip1' style={{backgroundColor:"white", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                </div>
                <div className='col-4' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                </div>
                <div className='col-4' id='multitrip3' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to1} &rarr; {to2}</span>
                </div>
             </>
  } 

  else if(tripcount === 4){
    render = <>
                <div className='col-3' id='multitrip1' style={{backgroundColor:"white", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                </div>
                <div className='col-3' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                </div>
                <div className='col-3' id='multitrip3' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to1} &rarr; {to2}</span>
                </div>
                <div className='col-3' id='multitrip4' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to2} &rarr; {to3}</span>
                </div>
             </>
  } 

  else if(tripcount === 5){
    render = <>
                <div className='col' id='multitrip1' style={{backgroundColor:"white", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{from} &rarr; {to}</span>
                </div>
                <div className='col' id='multitrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to} &rarr; {to1}</span>
                </div>
                <div className='col' id='multitrip3' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to1} &rarr; {to2}</span>
                </div>
                <div className='col' id='multitrip4' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to2} &rarr; {to3}</span>
                </div>
                <div className='col' id='multitrip5' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"85px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{to3} &rarr; {to4}</span>
                </div>
             </>
  }
  
  return (
    <>
        {/* First page code... */}
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
                <div className="ferry-search text-center pt-4">
                  <button type="button" className='btn btn-success' onClick={selectferry} style={{fontSize:"24px",paddingBottom:"40px", height:"40px"}}>SEARCH</button>
                </div>
            </div>
        </div>
        {/* First page code ends here... */}

        {/* Second page code... */}

        {/* Code for One Way Ferry Selection */}
        <div className="sticky-top-form gray-white-bg" id="selectonewayferry" style={{ display:"none"}}>
            <br></br>
            <div className='container rt'>
              <div className='row'>
                <div className='col-12' style={{backgroundColor:"white", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{owfrom} &rarr; {owto}</span>
                </div>
              </div>
              <div className='row'>
                <div className='col selectferry1'>
                  {renderOWContent}
                </div>
              </div>
            </div>
        </div>
        {/* Code for Round Way Ferry Selection */}
        <div className="sticky-top-form gray-white-bg" id="selectroundtripferry" style={{ display:"none"}}>
          <br></br>
            <div className='container rt'>
              <div className='row'>
                <div className='col-6' id='roundtrip1' style={{backgroundColor:"white", height:"80px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{rtfrom} &rarr; {rtto}</span>
                </div>
                <div className='col-6' id='roundtrip2' style={{backgroundColor:"hsl(0, 1%, 80%)", height:"80px", textAlign:"center", paddingTop:"2%"}}>
                  <span className='rtfromto'>{rtto} &rarr; {rtfrom}</span>
                </div>
              </div>
              <div className='row' id='rt1'>
                <div className='col selectferry1'>
                  {renderrtContent1}
                </div>                
              </div>
              <div className='row' id='rt2' style={{display:"none"}}>
                <div className='col selectferry1'>
                  this is trip 2
                  {renderrtContent}
                </div>                
              </div>
            </div>
        </div> 
        {/* Code for Multiple Trip Ferry Selection */}
        <div className="sticky-top-form gray-white-bg" id="selectmultitripferry" style={{ display:"none"}}>
          <br></br>
            <div className='container rt'>
              <div className='row'>
                {render}
              </div>
              <div className='row' id='mt1'>
                <div className='col selectferry1'>
                  {rendermtContent1}
                </div>                
              </div>
              <div className='row' id='mt2' style={{display:"none"}}>
                <div className='col selectferry1'>
                  {rendermtContent2}
                </div>                
              </div>
              <div className='row' id='mt3' style={{display:"none"}}>
                <div className='col selectferry1'>
                  {rendermtContent3}
                </div>                
              </div>
              <div className='row' id='mt4' style={{display:"none"}}>
                <div className='col selectferry1'>
                  {rendermtContent4}
                </div>                
              </div>
              <div className='row' id='mt5' style={{display:"none"}}>
                <div className='col selectferry1'>
                  {rendermtContent5}
                </div>                
              </div>
            </div>
        </div>
        {/* Second page code ends here... */}
        
        {/* Rendering Third page... */}
        <div id='show' style={{display:"none"}}>
          <Travellersdetail  adults={count} child={count1} infant={count2} owfrom={owfrom} owto={owto} rtfrom={rtfrom} rtto={rtto}
            from={from} to={to} to1={to1} to2={to2} to3={to3} to4={to4} tripcount={tripcount} triptype={triptype} owDate={owDate}
            rt1Date={rt1Date} rt2Date={rt2Date} selectedDate={selectedDate} selectedDate1={selectedDate1} selectedDate2={selectedDate2} 
            selectedDate3={selectedDate3} selectedDate4={selectedDate4}
          />
        </div>
    </>
  )
}

export default Ferry