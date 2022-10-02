import { Container } from '@material-ui/core';
import React from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { gapi } from 'gapi-script';

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "433496439221-sm92ocm3rtfs9nurjvegq2k8fhcldv52.apps.googleusercontent.com",
    plugin_name: "social-media-app",
  });
});

function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
