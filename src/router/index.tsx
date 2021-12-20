import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '@/page/Home';

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Routers;
