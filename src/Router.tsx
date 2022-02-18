import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import NotFound from "./views/404";
import Main from "./views/Main";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/404" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
