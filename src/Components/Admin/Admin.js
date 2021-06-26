import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const Admin = () => {
  return (
    <div class="md:flex pl-14 pt-14 bg-red-200 h-screen  " >
      <div class=" ">
        <SideBar />
      </div>

      <div class="ml-14 md:flex justify-center text-lg tracking-wide" >
       <div>
       <h2>This is Admin Panel</h2>
        <br />
        <p>Here you can add a new Blog</p>

        <p>or,</p>

        <p>You can Delete your old Blog </p>
       </div>
        

       
      </div>
    </div>
  );
};

export default Admin;