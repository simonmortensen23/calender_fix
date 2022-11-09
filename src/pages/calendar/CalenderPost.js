import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from "../../context/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefault";


const CalenderPost = (props) => {
  const {
    id,
    owner,
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
  const is_owner = currentUser?.username === owner; 
  const history = useHistory();
  

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

  return (
    <Card>
      <Card.Body>
        <Link to={`/calender/${id}`}>
        {title && <Card.Title className='text-center'>{title}</Card.Title>}
          </Link>
      </Card.Body>
      <Card.Body>
        {id && <Card.Text className='text-center'>Task ID:{id}</Card.Text>}
        {task_info && <Card.Text className='text-center'>Task Info:{task_info}</Card.Text>}
        <ListGroup className="list-group-flush">
        {task_status && <ListGroup.Item>Status: {task_status}</ListGroup.Item>}
        {created_at && <ListGroup.Item>Created at: {created_at}</ListGroup.Item>}
        {updated_at && <ListGroup.Item>Updated at: {updated_at}</ListGroup.Item>}
        {due_date && <ListGroup.Item>Due date: {due_date}</ListGroup.Item>}
        {membership && <ListGroup.Item>Membership: {membership.human}</ListGroup.Item>}
        {members && <ListGroup.Item>Members: {members.map(member => member.username).join(', ')}</ListGroup.Item>}
      </ListGroup>
        
        
        {taskOverview &&  (
          <Button onClick={handleEdit}>Edit</Button>
        )}
      </Card.Body>
    </Card>
  ) 
  
}

export default CalenderPost