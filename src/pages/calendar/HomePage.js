import React, { useEffect, useState } from 'react'
import { Button, Container, Card, Stack } from 'react-bootstrap'
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import styles from "../../styles/HomePage.module.css";
import { useCurrentUser, useSetCurrentUser } from '../../context/CurrentUserContext'

import { axiosReq } from "../../api/axiosDefault";
import CalenderPost from "./CalenderPost";
import calendar from "../../assets/calendar.png"

const HomePage = () => {
    const currentUser = useCurrentUser();
    const [hasLoaded, setHasLoaded] = useState(false)
    const [tasks, setTasks] = useState({ results: []})




    useEffect(() => {
      const fetchTasks = async () => {
          try {
              const { data } = await axiosReq.get(`/calender/`);
              setTasks(data);
              setHasLoaded(true);
            } catch (err) {
              console.log(err);
            }
          };
      
          setHasLoaded(false);
          fetchTasks();
        }, []);

    const loggedInView = <>{hasLoaded ? (
      <>
        {tasks.results.length ? (
          tasks.results.map((task) => (
            <CalenderPost key={task.id} {...task} setPosts={setTasks} />
          ))
        ) : (
          <Container>
            <p>No results</p>
          </Container>
        )}
      </>
    ) : (
      <Container>
        <p>Loading</p>
      </Container>
    )}</>
    const loggedOutView = <>
    <Container className={`${appStyles.Content} ${styles.HomePage}`}>
    <Card>
    
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
    <div className='my-auto p-0 p-md-2' md={6}>
    {currentUser ? loggedInView : loggedOutView}
    </div>
  )
}

export default HomePage