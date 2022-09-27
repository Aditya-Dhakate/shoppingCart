import React, { useContext, useEffect, useState } from 'react'
import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCartAlt } from 'react-icons/bi'
import { Link } from '@reach/router';
import { useCart } from 'react-use-cart';


export const Header = () => {

  const {theme, setThemeMode} = useContext(ThemeContext);
  const [darkMode, SetDarkMode] = useState(theme);

  useEffect(() =>{
    setThemeMode(darkMode);
    console.log(darkMode)
  },[darkMode])


  const {
    isEmpty,
    totalItems,
  } = useCart(); 

  return (
    <>
        <Navbar  collapseOnSelect expand="md" 
                   variant={darkMode ? 'dark' : 'light'}
                   className={darkMode ? "bg-light-black  border-bottom" : "bg-ligth border-bottom"}
                styl={{width : "100%", postion:"fixed" , zIndex:100}} 
        >
      <Container>
        <Link to='/'>
        <Navbar.Brand className={darkMode ? "text-dark-primary" : "text-light-primary"}>
            <b>E-commerce Shop</b>
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
             className={darkMode ? "text-dark-primary" : "text-light-primary"} 
              onClick={()=>SetDarkMode(!darkMode)}
             >
                {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem"/>}
            </Nav.Link>
            <Link 
             to='/cart'
            className={`${darkMode ? "text-dark-primary" : "text-light-primary"} d-flex align-items-center`}
             
            >
                <BiCartAlt size="2rem"/>
                 { !isEmpty && <span style={{position:'relative', left:"-21px", 
                 top:"-12px"}}>{totalItems}</span>}
                <span style={{ marginleft: !isEmpty ? "-13px" : 0}}>Cart</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}
