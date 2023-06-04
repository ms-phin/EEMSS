import React from 'react'
import { Link } from "react-router-dom";
import "./home.css"
import Header from "./header";
import Footer from './footer';
const Home = ({ role, features }) => {
  return (
    <>   
    <Header/>

    <div>
      <h2>Welcome, {role}!</h2>
      {features && features.includes('dashboard') && (
        <div>
          <h3>Dashboard</h3>
          <p>This is the dashboard.</p>
        </div>
      )}
      {features && features.includes('users') && (
        <div>
          <h3>Users</h3>
          <p>This is the users page.</p>
        </div>
      )}
      {features && features.includes('reports') && (
        <div>
          <h3>Reports</h3>
          <p>This is the reports page.</p>
        </div>
      )}
    </div>
    </>
 
  );
};

export default Home;