import React, { useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NavbarWrapper from "common/components/Navbar";
import Drawer from "common/components/Drawer";
import Button from "common/components/Button";
import Logo from "common/components/UIElements/Logo";
import Box from "common/components/Box";
import HamburgMenu from "common/components/HamburgMenu";
import Container from "common/components/UI/Container";
import { DrawerContext } from "common/contexts/DrawerContext";

import { MENU_ITEMS,MENU_ITEMS_AR } from "common/data/SaasClassic";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";

import LogoImage from "common/assets/image/saasClassic/logo-white.png";
import LogoImageAlt from "common/assets/image/saasClassic/logo.png";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const router = useRouter();
  const { locale } = router;
  const { navbar } = locale === "en" ? en : ar;

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar"   dir={locale === "ar" ? "rtl" : "ltr"}>
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={ locale === "ar"?MENU_ITEMS_AR:MENU_ITEMS}
              offset={-70}
            />
            <Link href="#" className="navbar_button">
              <Button
                {...button}
                title={navbar.navbarButton}
                className="main-B"
              />
              <Button
                {...button}
                title={navbar.navbarButton}
                className="B-alt"
              />
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={ locale === "ar"?MENU_ITEMS_AR:MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <Link href="#" className="navbar_drawer_button">
                <Button {...button} title={navbar.navbarButton} />
              </Link>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["180px", "200px"],
  },
  button: {
    type: "button",
    fontSize: "16px",
    fontWeight: "700",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "secondaryWithBg",
    minHeight: "auto",
    height: "40px",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default Navbar;
