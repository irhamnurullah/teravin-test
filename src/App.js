import React from 'react';
import NewLayout from './layout';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/detail';
import 'antd/dist/antd.css';
import Pengajuan from './pages/pengajuan';

export default function App() {
  return (
    <BrowserRouter>
      <NewLayout>
        <h2>Teravin Test React.Js</h2>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Detail />} />
          <Route path="/pengajuan" element={<Pengajuan />} />
        </Routes>
      </NewLayout>
    </BrowserRouter>
  );
}
