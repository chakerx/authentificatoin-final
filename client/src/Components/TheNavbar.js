import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { LogOut } from '../Redux/UserSlice';

const TheNavbar = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(state=> state.User.isAuth)
  const dispatch = useDispatch()

  const logged = ()=>{
    dispatch(LogOut())   //logOut masnou3a de reducers fil UserSlice.js
    navigate('/login')
  }

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
      {isAuth ? <Button onClick={logged} variant="outline-secondary">LogOut</Button> :
        <>
        <Nav.Link as={Link} to="/register">Rgister</Nav.Link>  {/* hadha /register li katba marbota bel /register li katba fel app.js */}
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </>}
      </Nav>
    </Container>
  </Navbar>
  )
}

export default TheNavbar