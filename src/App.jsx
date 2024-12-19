import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InPlay from "./pages/InPlay";
import Today from "./pages/Today";
import Tomorrow from "./pages/Tomorrow";
import Fullmarket from "./pages/Fullmarket";
import Cricket from "./pages/Cricket";
import { AppContext, AppProvider } from "./Context/AppContext";
import Multimarket from "./pages/Multimarket";
import Soccer from "./pages/Soccer";
import Tennis from "./pages/Tennis";
import ESoccer from "./pages/ESoccer";
import Kabaddi from "./pages/kabaddi";
import VirtualCricket from "./pages/VirtualCricket";
import Login from "./Config/Login";
import MyAccount from "./pages/MyAccount";
import Summary from "./pages/Summary";
import AccountCashStatement from "./pages/AccountCashStatement";
import Current_bets from "../src/pages/MyBeat/Current_bets";
import Bets_history from "./pages/MyBeat/Bets_history";
import Profit_loss from "./pages/MyBeat/Profit_loss";
import MobileNav from "./components/Mobilenav/MobileNav";
import AuthLogin from "./pages/AuthLogin";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Livebeat from "./pages/Livebeat/Livebeat";
import Dragon from "./pages/Dragon/Dragon";


const App = () => {
  return (
    
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
};

const MainApp = () => {
  const { loginOpen } = useContext(AppContext);
  
  return (
    <div>
      <ToastContainer />
      <Navbar />
    
      <Routes>
        <Route index element={<Home />} />
        <Route path="in-play" element={<InPlay />} />
        <Route path="Today" element={<Today />} />
        <Route path="tomorrow" element={<Tomorrow />} />
        <Route path="fullMarket" element={<Fullmarket />} />
        <Route path="cricket" element={<Cricket />} />
        <Route path="multi-markets" element={<Multimarket />} />
        <Route path="Soccer" element={<Soccer />} />
        <Route path="tennis" element={<Tennis />} />
        <Route path="e-soccer" element={<ESoccer />} />
        <Route path="kabaddi" element={<Kabaddi />} />
        <Route path="virtual-cricket" element={<VirtualCricket />} />
        <Route path="myAccount/profile" element={<MyAccount />} />
        <Route path="myAccount/summary" element={<Summary />} />
        <Route path="myAccount/accountCashStatement" element={<AccountCashStatement />} />
        <Route path="myAccount/current_bets" element={<Current_bets />} />
        <Route path="myAccount/bets-history" element={<Bets_history />} />
        <Route path="myAccount/profit-loss" element={<Profit_loss />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/livebeat" element={<Livebeat />} />
        <Route path="/dragon" element={<Dragon />} />
      </Routes>

      <MobileNav/>

      {loginOpen && <Login />}
    </div>
  );
};

export default App;
