import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "demos/ComponentRenderer.js";
import MainLandingPage from "demos/MainLandingPage.js";
import Homepage from "main/Homepage.js"
import Register from "main/Register.js"
import Login from "main/Login.js"
import PrivacyPolicy from "main/PrivacyPolicy.js"
import TermsOfService from "main/TermsOfService.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/treact">
          <MainLandingPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/terms-of-service">
          <TermsOfService />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

