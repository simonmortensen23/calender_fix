import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Alert, Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
      });
      const { username, password1, password2 } = signUpData;
    
      const [errors, setErrors] = useState({});
    
      const navigate = useNavigate();
    
      const handleChange = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("/dj-rest-auth/registration/", signUpData);
          navigate.push("/signin");
        } catch (err) {
          setErrors(err.response?.data);
        }
      };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className='d-none'>Username</Form.Label>
        <Form.Control className={styles.Input} type="text" placeholder="Username" name='username' value={username}
                onChange={handleChange} />
      </Form.Group>
      {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}



      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className='d-none'>Password</Form.Label>
        <Form.Control className={styles.Input} type="password" placeholder="Password" name='password1' value={password1}
                onChange={handleChange} />
      </Form.Group>
      {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}


      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className='d-none'>Password2</Form.Label>
        <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name='password2' value={password2}
                onChange={handleChange} />
      </Form.Group>
      {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

      
      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
      </Col>
    </Row>
  );
};

export default SignUpForm;