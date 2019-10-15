import React from "react";
import Menu from 'react-burger-menu/lib/menus/slide';
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
    return (
        <MotherDiv>
            <Menu pageWrapId={"page-wrap"} className="hamburgerMenu" width={150} right>
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="work" className="menu-item" to="/work">About</Link>
                <Link id="Contact" className="menu-item" to="/work">Work</Link>
                <Link id="Contact" className="menu-item" to="/contact">Contact</Link>
            </Menu>
        </MotherDiv>
    )
}

export default BurgerMenu;

const MotherDiv = styled.div``