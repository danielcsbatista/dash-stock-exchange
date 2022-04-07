import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import List from '../pages/List';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';
const AppRoute: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='list/:type' element={<List />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default AppRoute;
