import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./NavBar.styles.css";
import Marquee from "react-fast-marquee";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter as Router, Link } from "react-router-dom"
import LogoItem from "./LogoItem";
import CartWidget from "../card/CartWidget";

const NavBarPublic = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const mobileNavbarStyle = {
    background: "white",
    height: "98px",
    width: "100%",
    position: "fixed",
    bottom: "0",
    zIndex: "99",
    textAlign: "center",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    filter: "drop-shadow(2px 4px 6px black)",
  };

  const mobileNavbarStyleInter = {
    width: "102%",
    position: "fixed",
    bottom: "17px",
    zIndex: "99",
    textAlign: "center",
    display: { xs: "block", sm: "none" },
  };

  const mobileNavbarIconContainer = {
    background: "white",
    borderRadius: "42%",
    marginTop: "-45px",
  };

  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>
        <Marquee
          gradient={false}
          style={{
            padding: "0",
            maxHeight: "100px",
            color: "#0E315A",
            margin: "0",
            background: "white",
            textTransform: "uppercase",
            paddingTop: "3px",
          }}
        >
          <span style={{ color: 'black', fontWeight: 'bold', marginLeft: '20px' }}>¡Bienvenido al sistema de gestión de compra de pasajes en tu terminal digital!  <span style={{ marginLeft: '20px' }}>Pronto estaremos en pleno funcionamiento, clase por clase ira mejorando nuestro sistema </span></span>
        </Marquee>
        <AppBar
          position="sticky"
          style={{ background: "white", color: "#0E315A", boxShadow: "none" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/login">
               <LogoItem />
              </Link>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "end",
                }}
              >
               <LogoItem />

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="/pasaje-interurbano">
                    <MenuItem
                      key={"/pasaje-interurbano"}
                      // onClick={handleCloseNavMenu}
                    >
                      {/* <ArrowDownwardIcon /> */}
                      <Typography textAlign="center">PASAJES INTERURBANOS</Typography>
                    </MenuItem>
                  </Link>
                  <Link to="/pasaje-media">
                    <MenuItem
                      key={"/pasaje-media"}
                      // onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">PASAJES DE MEDIA DISTANCIA</Typography>
                    </MenuItem>
                  </Link>

                  <a href="https://shop.terminalmendoza.com.ar/search">
                    <MenuItem
                      key={"/pasaje-interurbano"}
                      // onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">
                        PASAJES DE LARGA DISTANCIA
                      </Typography>
                    </MenuItem>
                  </a>
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  marginLeft: { sm: "11%" },
                }}
              >
                <Link to="/pasaje-interurbano">
                  <Button
                    key={"arribos"}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#0E315A",
                      display: "block",
                      fontSize: "20px",
                      marginRight: "50px",
                    }}
                  >
                    PASAJES INTERURBANOS
                  </Button>
                </Link>
                <Link to="/pasaje-media">
                  <Button
                    key={"/pasaje-media"}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#0E315A",
                      display: "block",
                      fontSize: "20px",
                      marginRight: "50px",
                    }}
                  >
                    PASAJES DE MEDIA DISTANCIA
                  </Button>
                </Link>
                <Link to="/pasaje-larga">
                  <Button
                    key={"/pasaje-larga"}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#0E315A",
                      display: "block",
                      fontSize: "20px",
                      marginRight: "50px",
                    }}
                  >
                    PASAJES DE LARGA DISTANCIA
                  </Button>
                </Link>
                <Box style={{marginTop: 27}}>
                <CartWidget />
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      </>
  );
};

export default NavBarPublic;
