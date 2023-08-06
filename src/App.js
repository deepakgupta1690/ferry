// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Ferry from "./components/ferry/Ferry";
// import Home from "./components/home/Home";
// import Selectferry from "./components/selectferry/Selectferry";
// import Abc from "./components/ferry/Abc";

function App() {
  return (
    <BrowserRouter>
      <Ferry/>
      {/* <Abc/> */}
      {/* <Routes>  */}
        {/* <Route path="/ferry" element={<Ferry />} />
        <Route path="/selectferry" element={<Selectferry />} /> */}
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
