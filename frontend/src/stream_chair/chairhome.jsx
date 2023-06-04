import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Chairhome = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>chairhome</h2>
      {/* <Link to="/chairhome/teach_register"><button type="submit" className="log_btn">add Teachers</button></Link> */}
      {/* <Link to="/chairhome/stud_register"><button type="submit" className="log_btn">add Students</button></Link> */}
      <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/teach_register")}>add Teachers</button>
      <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/stud_register")}>add Students</button>
      {/* <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/teach_register")}>add Teachers</button> */}
      {/* <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/stud_register")}>add Students</button> */}


    </div>
  )
}

export default Chairhome


