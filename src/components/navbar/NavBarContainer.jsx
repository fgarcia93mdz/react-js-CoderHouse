import React, { useState, useEffect } from "react";


const NavBarPublic = React.lazy(() => import("./NavBarPublic"));


const NavBarContainer = () => {
  const [rol, setRol] = useState(null);
  const [name, setName] = useState(null);

  
  return (
    <>
      {(() => {
        switch (rol) {
          default:
            return <NavBarPublic />;
        }
      })()}
    </>
  );
};

export default NavBarContainer;
