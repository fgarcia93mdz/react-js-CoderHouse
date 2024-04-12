import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import jwt_decode from "jwt-decode";
import NavBarContainer from "./components/navbar/NavBarContainer";
import ItemListContainer from "./components/home/ItemListContainer";



const AppWebRouter = () => {

  return (
    <>
      <NavBarContainer />
      <ItemListContainer greeting={"Aquí comienza el sistema de ecommerce de Franco Garcia"} />

      <Routes>
        
      </Routes>
    </>
  );
};

export default AppWebRouter;
