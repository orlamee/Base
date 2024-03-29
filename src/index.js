import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import Loginas from './Login-as';
import CreateAccount from './CreateAccount';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './SignUp';
import ForTeam from './ForTeam';
import Pricing from './Pricing';
import ExploreSpace from './ExploreSpace';
import SpaceOwners from './SpaceOwners';
import ScrollToTop from './Component/scrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/for-team" element={<ForTeam/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/explore" element={<ExploreSpace/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/login-as" element={<Loginas/>}></Route>
      <Route path="/create" element={<CreateAccount/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/space-owners" element={<SpaceOwners/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
