import React from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "./container/SignIn";
import Home from "./container/Home";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Signin />} />
    </Routes>
  );
};

export default ApplicationRoutes;
