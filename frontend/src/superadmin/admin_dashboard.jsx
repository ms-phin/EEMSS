import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Students from './studlist';
import '../style/chair.css'
import { Visibility } from "@material-ui/icons";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const Admindash = () => {
  const [questions, setQuestions] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/logout/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <>

      {/* <Header/> */}
      <div>
        <Link
          to="/"
          onMouseEnter={() => setShowProfile(true)}
          onMouseLeave={() => setShowProfile(false)}
          className='view'>
          View Profile
        </Link>

        {showProfile && (
          <div className="profile_container">
            <div className="image_container">
              <img
                src=""
                alt=""
                className="student_image"
              />
            </div>
            <div className="data_container">
              <span className="">Name: Abebe Kebede</span>
              <span className="">Id: 11031234</span>
              {/* <Link className='logout'>Log out</Link> */}
              <Link className='logout' onClick={handleLogout}>Log out</Link>

            </div>
          </div>
        )}
      </div>
      <div className="home">
        {/* <FeaturedInfo /> */}
        <div className="homeWidgets">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Admin Dashboard</h3>
                <ul className="sidebarList">
                  <Link to="/" className="link">
                    <li className="sidebarListItem active">
                      <LineStyle className="sidebarIcon" />
                      Home
                    </li>
                  </Link>

                  <Link to="/admindash/facul_add" className="link">
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Add Faculty
                    </li>
                  </Link>
                  <Link to="/admindash/dept_add" className="link">
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Add Department
                    </li>
                  </Link>
                  <Link to="/admindash/chair_add" className="link">
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Add Stream chairperson
                    </li>
                  </Link>

                  <Link to="/admindash/chairs" className="link">
                    <li className="sidebarListItem">
                      <Visibility className="widgetSmIcon" />
                      See chairperson's List
                    </li>
                  </Link>
                  <Link to="/admindash/teachers" className="link">
                    <li className="sidebarListItem">
                      <Visibility className="widgetSmIcon" />
                      See Teachers's List
                    </li>
                  </Link>
                  <Link to="/admindash/students" className="link">
                    <li className="sidebarListItem">
                      <Visibility className="widgetSmIcon" />
                      See Student's List
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <Students />

        </div>
      </div>
    </>

  );
}
export default Admindash