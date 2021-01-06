import React,{Suspense} from "react";
import NavbarMenu from "./Navbar/Navbar";
import {  Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./LandingPage/LandingPage";
import "../App.css";
import Profile from "./Profile/Profile";
import GiveAd from "./GiveAd/GiveAd";
import MyAds from "./MyAds/MyAds";
import MyMessages from "./MyMessages/MyMessages";
import EditProfile from "./EditProfile/EditProfile";
import OneAd from "./OneAd/OneAd";
import Footer from "../Footer/Footer";



const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NavbarMenu />
    <div style={{ minHeight: "calc(100vh - 80px)" }}>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage,null)} />
        <Route exact path="/hesabim/profilim" component={Auth(Profile,true)} />
        <Route exact path="/ilanver" component={Auth(GiveAd)} />
        <Route exact path="/ilanlarım" component={Auth(MyAds)} />
        <Route exact path="/mesajlarim" component={Auth(MyMessages)} />
        <Route exact path="/profilduzenle" component={Auth(EditProfile)} />
        <Route exact path="/tasarim" component={Auth(OneAd)} />
      </Switch>
    </div>
<Footer/>
    
  </Suspense>
);

export default App;
