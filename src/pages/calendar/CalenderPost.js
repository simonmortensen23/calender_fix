import React from 'react'
import { Card, ListGroup, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from "../../context/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefault";
import styles from '../../styles/CalenderPost.module.css'
import useClickOutsideToggle from "../../hooks/useClickOutsideToggle";


const CalenderPost = (props) => {
  const {
    id,
    title,
    task_info,
    due_date,
    task_status,
    created_at,
    updated_at,
    taskOverview,
    members,
    membership,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = membership?.value === 'OWNER';
  const history = useHistory();
  

  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  

  const handleEdit = () => {
    history.push(`/calender/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/calender/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  console.log({membership})
  return (
    <Card className={styles.Card} >
      <Card.Body>
        <Link to={`/calender/${id}`}>
        {title && <Card.Title className={styles.Title}>{title}</Card.Title>}
          </Link>
          {id && <Card.Text className='text-left'>Task ID: {id}</Card.Text>}
        {task_info && <Card.Text className={`${styles.Info} shadow-sm p-3 mb-5 bg-white rounded`}><h4>Task Info:</h4><span className='text-danger '>{task_info}</span></Card.Text>}
      </Card.Body>
      <Accordion defaultActiveKey="1">
      <Accordion.Item  eventKey="0">
        <Accordion.Header >Additional Task Info</Accordion.Header>
        
         
        <Accordion.Body>
      <Card.Body>
       
        <ListGroup className="list-group-flush">
        {task_status && <ListGroup.Item>Status: {task_status}</ListGroup.Item>}
        {created_at && <ListGroup.Item>Created at: {created_at}</ListGroup.Item>}
        {updated_at && <ListGroup.Item>Updated at: {updated_at}</ListGroup.Item>}
        {due_date && <ListGroup.Item>Due date: {due_date}</ListGroup.Item>}
        {membership && <ListGroup.Item>Membership: {membership.human}</ListGroup.Item>}
        {members && <ListGroup.Item>Members: {members.map(member => member.username).join(', ')}</ListGroup.Item>}
      </ListGroup>
        
        
       
      </Card.Body>
      </Accordion.Body>
     
      </Accordion.Item>
      </Accordion>
      
      {taskOverview && is_owner && (
          <>
          <Card.Body>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
          </Card.Body>
          </>
        )}
        
    </Card>
  ) 
  
}

export default CalenderPost