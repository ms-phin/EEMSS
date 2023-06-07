import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Chairhome = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/teach_register")}>add Teachers</button>
      <button type="submit" className="log_btn" onClick={() => navigate("/chairhome/stud_register")}>add Students</button>


    </div>
  )
}

export default Chairhome


