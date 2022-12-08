import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import calendar from '../assets/calendar.png'
import styles from "../styles/NavBar.module.css"
import {NavLink} from 'react-router-dom'
import axios from "axios";
import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext'
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from '../utils/utils'

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp()
    } catch (err) {
      console.log(err);
    }
  };
  
  const addTaskIcon = (
    <NavLink className={styles.NavLink} to='/calender/create'><i className="fas fa-plus-square"></i>Create Task</NavLink>
    )
    
    const loggedInIcons = (
      <>
      <NavLink className={styles.NavLink} to='/calender'>
      <i className="fas fa-list"></i>
      {currentUser?.username}'s tasks'
      </NavLink>
      
      <NavLink className={styles.NavLink} to='/' onClick={handleSignOut}>
      <i className="fas fa-sign-out-alt"></i>
      Logout
      </NavLink> 
      
      </>
      );
      
      const loggedOutIcons = <> <NavLink className={styles.NavLink} to='/signin'><i className='fas fa-sign-in-alt'></i>Sign In</NavLink>
      <NavLink className={styles.NavLink} to='/signup'><i className="fas fa-user-plus"></i>Sign Up</NavLink></>
      
      
      return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
        <NavLink to='/'>
        <Navbar.Brand><img src={calendar} alt='calendar' height='45' /></Navbar.Brand>
        </NavLink>
        {currentUser && addTaskIcon}
        <Navbar.Toggle ref={ref}
        onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-start">
        <NavLink  className={styles.NavLink} to='/'><i className='fas fa-home'></i>Home</NavLink>
        {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        )
      }
      
      export default NavBar;