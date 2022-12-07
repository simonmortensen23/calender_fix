import React from 'react'
import { Button, Container, Card, Stack } from 'react-bootstrap'
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import styles from "../../styles/HomePage.module.css";
import { useCurrentUser, useSetCurrentUser } from '../../context/CurrentUserContext'
import calendar from "../../assets/calendar.png"

const HomePage = () => {
    const currentUser = useCurrentUser();

    const loggedInView = <><Container className={styles.HomeContainer}>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={calendar} />
      <Card.Body>
        <Card.Title className={'font-weight-bold'}>Welcome to your Task Planner</Card.Title>
        <Card.Text>
          Welcome to your personal Task Planner! Make your task lists and share them with your friends. From here you can either create a task or check your own list of tasks.
        </Card.Text>
        <Stack gap={2} className=" mx-auto">
        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} href='/calender/create'>Create Task</Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} href='/calender'>Task List</Button>
      </Stack>
      </Card.Body>
    </Card>
    
 
    </Container></>
    const loggedOutView = <>
    <Container className={styles.HomeContainer}>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={calendar} />
      <Card.Body>
        <Card.Title className={'font-weight-bold'}>Welcome to your Task Planner</Card.Title>
        <Card.Text>
          Welcome to your personal Task Planner! Make your task lists and share them with your friends. If you are not already a member press "Sign-Up" button or sign-in to see your tasks.
        </Card.Text>
        <Stack gap={2} className=" mx-auto">
        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} href='/signup'>Sign Up</Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} href='/signin'>Sign In</Button>
      </Stack>
      </Card.Body>
    </Card>
    
 
    </Container>
    </>
  return (
    <div>
    {currentUser ? loggedInView : loggedOutView}
    </div>
  )
}

export default HomePage