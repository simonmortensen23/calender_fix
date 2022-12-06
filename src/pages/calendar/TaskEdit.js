import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ListGroup, Modal } from 'react-bootstrap';
import Alert from "react-bootstrap/Alert";

import btnStyles from "../../styles/Button.module.css"
import appStyles from "../../App.module.css";

import { useHistory } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefault";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function TaskEdit() {

  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title:'',
    task_info:'',
    due_date:'',
    task_status: '',
    members: [],
    membership: '',
    
  })

  const {title, task_info, due_date, task_status, members, membership} = taskData;
  const history = useHistory();
  const { id } = useParams()

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/calender/${id}/`)
            const { title, task_info, due_date, task_status, is_owner, members, membership } = data
            const parsed_due_date = new Date(due_date).toISOString().substring(0, 10);

            setTaskData({ title, task_info, due_date: parsed_due_date, task_status, members, membership })
        } catch (err){
            console.log(err)
        }
    }
    handleMount()
  }, [history, id]);

  const handleChange = (event) => {
    console.log({name: event.target.name, value: event.target.value});
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const taskData = new FormData();

    taskData.append('title', title)
    taskData.append('task_info', task_info)
    taskData.append('due_date', due_date)
    taskData.append('status', task_status)
    taskData.append('members', members)
    

    try {
      await axiosReq.put(`/calender/${id}/`, taskData);
      history.push(`/calender/${id}`);
    }catch(err) {
      if (err.response?.status !== 401){
        setErrors(err.response?.data)
      }
    }
  }


  const formFields = (
    <div className="text-center">
       
  <Form.Group>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name='title' placeholder="Title of Task" value={title} onChange={handleChange} />
  </Form.Group>
  
  
  <Form.Group>
    <Form.Label>Task Details</Form.Label>
    <Form.Control as="textarea" name='task_info' rows={3} value={task_info} onChange={handleChange} />
  </Form.Group>
    <Form.Group>
      <Form.Label>Due Date</Form.Label>
      <Form.Control type='date' name='due_date' value={due_date} onChange={handleChange} />
    </Form.Group>
    <Form.Group>
    
      <Form.Control name='task_status' as='select' value={task_status} onChange={handleChange}>
      <option>Open this select menu</option>
      <option value='IN PROGRESS'>In Progress</option>
      <option value='IDLE'>Idle</option>
      <option value='DONE'>Done</option>
    </Form.Control>
    </Form.Group>
    <Form.Group>
   
    </Form.Group>
  <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
  
    </div>
  )



  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container
              className={` ${appStyles.Content} d-flex justify-content-center`}
            >
                
              <div className="">{formFields}</div>
            
            </Container>
            <MemberList members={members} />
          </Col>
            
        </Row>
        
      </Form>
      
      
    </Container>

    
    
  )
}

function MemberList({ members }) {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [taskData, setTaskData] = useState({
    username: '',
  })

    
  const history = useHistory();
  const { id } = useParams()
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setTaskData({
      username: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const taskDataForm = new FormData();
    taskDataForm.append('username', taskData?.username)
    
    console.log('SENDING USERNAMNE', taskData?.username);

    try {
      await axiosReq.post(`/calender/${id}/add_member`, taskDataForm);
      history.push(`/calender/${id}`);
    }catch(err) {
      if (err.response?.status !== 401){
        setErrors(err.response?.data)
      }
    }
  }

  const handleDelete = async () => {
    if (!taskData?.username) {
      // TODO
      console.warn('No username was provided and no error handling is made...');
      return;
    }

    try {
      await axiosRes.post(`/calender/${id}/remove_member`, { username: taskData?.username });
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  console.log({ members })
  


  const onMemberClick = (member) => {
    console.log(' on member click:', member);
  };

  return (
    <>
    <Container>
    <div>Members: </div>
      {members.map((member, i) => (
        <div key={i}>
          
          <ListGroup>
            <ListGroup.Item>{member.username}</ListGroup.Item></ListGroup>
          
        </div>
      ))}
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} onClick={handleShow}>
          Edit Members
        </Button>
    </Container>
    <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name='add member' placeholder="Add a new member" value={taskData.username} onChange={handleChange} />
  </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handleSubmit} variant="primary">Add Member</Button>
            <Button onClick={handleDelete} variant="primary">Delete Member</Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}



export default TaskEdit