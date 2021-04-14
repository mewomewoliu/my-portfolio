import React from "react";
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// 
// import Projects from './Pages/Projects/Projects'
// import Gallery from './Pages/Projects/Gallery'
import Projects from './Projects'


//  <Router>
//      <Switch>
//         <Route exact path="/" component={MiaoHome} />
//         <Route path="/projects" component={Projects} />
//         <Route path="/more" component={More} />
//         <Route path="/contact" component={Contact} />
//         </Switch>
//       </Router>

function App() {
  return (

    <div className="App">

          <Projects/>
    

    </div>
  );
}

export default App;
