import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import btnStyles from "../../styles/Button.module.css"

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";


function TaskCreate() {

  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title:'',
    task_info:'',
    due_date:'',
    status: [],
  })

  const {title, task_info, due_date, status} = taskData;
  const history = useHistory();


  const handleChange = (event) => {
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
    taskData.append('status', status)

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
    <Form.Select aria-label="Default select example">
      <Form.Control name='status' value={status} onChange={handleChange}/>
      <option>Open this select menu</option>
      <option value={status}>Idle</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group>
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
    <Row>
      <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
        <Container
          className={`d-flex flex-column justify-content-center`}
        >
       
          <div className="d-md-none">{formFields}</div>
        </Container>
      </Col>
      <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
        <Container>{formFields}</Container>
      </Col>
    </Row>
  </Form>
  )
}

export default TaskCreate