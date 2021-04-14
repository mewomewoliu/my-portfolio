import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './More/Contact/Contact';
import MiaoHome from './Home/MiaoHome';
import More from './More/More';
import Projects from './Projects/Projects';
import '../App.css';
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Poppins';
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;
const Ul = styled.ul`
  text-decoration: none;
  list-style: none;
`;


function Nav() {
  return (
    
     
      <Router>
      <div className='nav-list' >
        
          <Ul>
            <li > 
              <Link to="/"><Title>Miao</Title></Link>
            </li>
            <li>
              <Link to="/projects"><Title>Projects</Title></Link>
            </li>
            <li>
              <Link to="/more"><Title>More</Title>  </Link>
              </li>
              <li>
              <Link to="/contact"> <Title>Contact</Title></Link>
            </li>
          </Ul>
        </div>
      
      </Router>
 
      
      

    
  );
}

export default Nav;
