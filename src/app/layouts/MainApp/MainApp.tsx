import React from 'react';
import { Header } from '../../components/Header';
import { Route, Routes } from 'react-router-dom';
import { HomeRoutes } from '../../configs/routes';
import { Footer } from '../../components/Footer';

export const MainApp = () => {
  return (
    <div className="w-screen h-screen bg-main">
      <Header />
      <Routes>
        {HomeRoutes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};
