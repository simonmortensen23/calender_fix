import React from 'react'
import { Button } from 'react-bootstrap'
import { useCurrentUser, useSetCurrentUser } from '../../context/CurrentUserContext'

const HomePage = () => {
    const currentUser = useCurrentUser();

    const loggedInView = <><h1>Welcome to your task manager</h1></>
    const loggedOutView = <><div>Welcome to your taskmanager</div>
    <Button href='/signup'>Create Account</Button>
    <Button href='/signin'>Create Account</Button></>
  return (
    <div>
    {currentUser ? loggedInView : loggedOutView}
    </div>
  )
}

export default HomePage