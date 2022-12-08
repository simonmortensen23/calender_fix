import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefault";
import CalenderPost from "./CalenderPost";




function TaskOverview() {
  const { id } = useParams();
  const [task, setTask] = useState({ results: [] })
  
  
 
  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{data: task}] = await Promise.all([
                axiosReq.get(`/calender/${id}`)
            ])
            setTask({results:[task]})
            console.log(task)
        } catch(err) {
            console.log(err)
        }
    }
    handleMount()
  }, [id])


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2 col" lg={8}>
        
        <CalenderPost {...task.results[0]} setTasks={setTask} taskOverview />
      </Col>
    </Row>
  );
}

export default TaskOverview;
