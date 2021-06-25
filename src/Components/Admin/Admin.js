import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div style={{display:'flex',marginLeft:"5%",marginTop:'5%'}}>
          <div>
          <Link  to="/addBlog">Add Blog</Link>
            <br/>
            <Link  to="/manageBlogs">Manage Blog</Link>
          </div>
            
            <div style={{marginLeft:"10%"}}>
            <h2>This is Admin Panel</h2>
            <br/>
            <p>Here you can add a new Blog <Link  to="/addBook">click here</Link></p>
            
            <p>or,</p>
            
            <p>You can change your old book  <Link  to="/manageProduct">click here</Link></p>
            </div>
        </div>
    );
};

export default Admin;