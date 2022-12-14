import styles from "./App.module.css"
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container'
import {Route, Switch} from 'react-router-dom'
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import './api/axiosDefault';
import TaskCreate from "./pages/calendar/TaskCreate";
import TaskOverview from "./pages/calendar/TaskOverview";
import TasksList from "./pages/calendar/TasksList"
import TaskEdit from "./pages/calendar/TaskEdit";
import HomePage from "./pages/calendar/HomePage";




function App() {
   

  return (
    
    <div className={`${styles.App} ${styles.Background}`}>
    <NavBar/>
    <Container className={styles.Main}>
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/calender/create' render={() => <TaskCreate />} />
        <Route exact path='/calender/:id/edit' render={() => <TaskEdit />} />
        <Route exact path='/calender/:id' render={() => <TaskOverview />} />
        <Route exact path='/calender' render={() => <TasksList message="No tasks found."/>} />
        <Route exact path='/signin' render={() => <SignInForm />} />
        <Route exact path='/signup' render={() => <SignUpForm />} />
        <Route render={() => <p>Page not found!</p>}/>
      </Switch>
      
    </Container>
    </div>
    
  );
}

export default App;
