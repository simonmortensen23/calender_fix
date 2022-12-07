import React, { useState } from 'react'
import signup from '../../assets/signup.png'

import { Alert, Form, Button, Col, Row, Container, Image } from "react-bootstrap";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";


function TaskCreate() {

  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title:'',
    task_info:'',
    due_date:'',
    task_status: '',
    
  })

  const {title, task_info, due_date, task_status} = taskData;
  const history = useHistory();


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
    

    try {
      const {data} = await axiosReq.post('/calender/', taskData);
      history.push(`/calender/${data.id}`);
    }catch(err) {
      if (err.response?.status !== 401){
        setErrors(err.response?.data)
      }
    }
  }


  const formFields = (
    
    <div className="text-center container">
       
  <Form.Group>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name='title' placeholder="Title of Task" value={title} onChange={handleChange} />
  </Form.Group>
  {errors.title?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
  
  
  <Form.Group>
    <Form.Label>Task Details</Form.Label>
    <Form.Control as="textarea" name='task_info' rows={3} value={task_info} onChange={handleChange} />
  </Form.Group>
  {errors.task_info?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
    <Form.Group>
      <Form.Label>Due Date</Form.Label>
      <Form.Control type='date' name='due_date' value={due_date} onChange={handleChange} />
    </Form.Group>
    {errors.due_date?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
    <Form.Group>
    
      <Form.Control name='task_status' as='select' value={task_status} onChange={handleChange}>
      <option>Open this select menu</option>
      <option value='IN PROGRESS'>In Progress</option>
      <option value='IDLE'>Idle</option>
      <option value='DONE'>Done</option>
    </Form.Control>
    </Form.Group>
    {errors.task_status?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
  <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
      
     
    </div>
  )



  return (
    <Form onSubmit={handleSubmit}>
    <Row className={styles.Row}>
      <Col className="py-2 p-0 p-md-2  d-md-none" md={7} lg={8}>
        <Container
          className={`${appStyles.Content} d-flex justify-content-center`}
        >
     
          <div className="d-md-none">{formFields}</div>
        </Container>
      </Col>
      <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
    
        <Container className={`d-flex justify-content-center`}>{formFields}
        <Col
        md={6}
        className={` ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={signup}
        />
      </Col>
        </Container>
      </Col>
      
    </Row>
  </Form>
  )
}

export default TaskCreate