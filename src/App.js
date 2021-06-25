import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import AddBlog from './Components/Admin/AddBlog';
import ManageBlog from './Components/Admin/ManageBlog';
import Blogs from './Components/Home/Blog/Blogs';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import BlogDetail from './Components/Home/Blog/BlogDetail';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router><NavBar/>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <PrivateRoute path="/admin">
           <Admin></Admin>
         </PrivateRoute>
         <Route path="/addBlog">
           <AddBlog/>
         </Route>
         <Route path="/manageBlogs">
          <ManageBlog></ManageBlog>
         </Route>
         <Route path="/blogs">
          <Blogs></Blogs>
         </Route>
         <Route path="/login">
          <Login/>
         </Route>
         <Route path="/blog/:id">
          <BlogDetail/>
         </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
    </>
  );
}

export default App;
