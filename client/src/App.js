import { Container } from '@material-ui/core';
import React from 'react';

import './App.css';

import { gapi } from 'gapi-script';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetails';

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "433496439221-sm92ocm3rtfs9nurjvegq2k8fhcldv52.apps.googleusercontent.com",
    plugin_name: "social-media-app",
  });
});

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" element={(!user ? <Auth /> : <Navigate to="/posts" />)} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
