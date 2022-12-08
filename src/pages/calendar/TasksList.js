import React, { useEffect, useState } from "react";



import Container from "react-bootstrap/Container";

import { axiosReq } from "../../api/axiosDefault";
import CalenderPost from "./CalenderPost";
import { useCurrentUser} from '../../context/CurrentUserContext'




function TasksList(props) {
  
  const [tasks, setTasks] = useState({ results: []})
  const [hasLoaded, setHasLoaded] = useState(false)
  const currentUser = useCurrentUser();
  
  
  

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
      
    const loggedOutView = <> <h1>Welcome to your taskmanager</h1> <p>Log in to see your list of tasks</p> </>


  return (
    <div className='my-auto p-0 p-md-2' md={6}>
    {currentUser ? loggedInView : loggedOutView}
    </div>
  );
}

export default TasksList;