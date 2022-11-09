import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import btnStyles from "../../styles/Button.module.css"

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function TaskEdit() {

  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title:'',
    task_info:'',
    due_date:'',
    task_status: '',
    
  })

  const {title, task_info, due_date, task_status} = taskData;
  const history = useHistory();
  const { id } = useParams()

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/calender/${id}/`)
            const { title, task_info, due_date, task_status, is_owner } = data
            const parsed_due_date = new Date(due_date).toISOString().substring(0, 10);

            setTaskData({ title, task_info, due_date: parsed_due_date, task_status })
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
      <option value='A'>In Progress</option>
      <option value='B'>Idle</option>
      <option value='C'>Done</option>
    </Form.Control>
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
    <Form onSubmit={handleSubmit}>
    <Row>
      <Col className="py-2 p-0 p-md-2 d-md-none" md={7} lg={8}>
        <Container
          className={`d-flex justify-content-center`}
        >
       
          <div className="d-md-none">{formFields}</div>
        </Container>
      </Col>
      <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
        <Container className={`d-flex justify-content-center`}>{formFields}</Container>
      </Col>
    </Row>
  </Form>
  )
}

export default TaskEdit