import React, { useState,useEffect } from 'react';
import '../style/allRegister.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function DeptRegistration() {
  const [department, setDepartment] = useState('');
  
 const [faculity, setFaculity] = useState('');
 const [faculityOptions, setFaculityOptions] = useState([]);
 
  // const validationSchema = Yup.object().shape({
  //   username: Yup.string().required('Username is required'),
  //   email: Yup.string().email('Invalid email').required('Email is required'),
  //   password: Yup.string().required('Password is required'),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //     .required('Confirm Password is required'),
  // });

  const initialValues = {
    FacultyName: '',
    DepartmentName: '',
    
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/getFaculties')
      .then((response) => {
        setFaculityOptions(response.data);
        console.log(response.data)

      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

    

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form">
            <div className="form-body">
              <div className="header">
               
                <p>Welcome , please <b className='head'>Add Department</b></p>

              </div>
              <br />
              
              <label>
              <div className="select">
                <Field
                  as="select"
                  value={faculity}
                  onChange={(e) => setFaculity(e.target.value)}
                  name="faculity"
                >
                  <option value="" disabled hidden>
                    --- Select a faculity ---
                  </option>
                  {faculityOptions &&
                    faculityOptions.map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.name}
                      </option>
                    ))}
                </Field>
                <div className="select-arrow"></div>
              </div>
            </label>
                <div className="username">
                  <Field
                    className="form__input"
                    type="text"
                    id="department"
                    placeholder="Enter department Name"
                    name="department"
                  />
                  <ErrorMessage name="username" />
                </div>
              

              <button type="submit" className="btn" disabled={isSubmitting}>
                Add
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

// import React, {useState} from 'react';
// import '../style/allRegister.css'
// import { Link } from "react-router-dom";

// // import Footer from './footer';

// // import MetaData from '../more/metadata';

//     // } else {
//     //   setUser({ ...user, [e.target.name]: e.target.value });
//     // }

// export default function FaculRegistrationForm() {
//     const [department, setDepartment] = useState('');

//     const [avatar, setAvatar] = useState("/profile.png");
//     const [avatarPreview, setAvatarPreview] = useState("/profile.png");
//   const registerDataChange = (e) => {
//       if (e.target.name === "avatar") {
//         const reader = new FileReader();
  
//         reader.onload = () => {
//           if (reader.readyState === 2) {
//             setAvatarPreview(reader.result);
//             setAvatar(reader.result);
//           }
//         };
  
//         reader.readAsDataURL(e.target.files[0]);}
//           };
//     return(
//         <>
//         {/* <MetaData title="BiT EEMS"/> */}

//       {/* <Header/> */}
       
//       <div className="form">

//           <div className="form-body">
//           <div className="header">
//             <p>Welcome , please <b className='head'>Add Department Heads</b></p>
//           </div>
//           <br></br>
//           <div className='enter'>
//               <div className="username">

//                   <input className="form__input" type="text" id="firstName" placeholder="Enter Full Name"/>
//               </div>

//               <div className="email">

//                   <input  type="email" id="email" className="form__input" placeholder="Enter Email"/>
//               </div>

//               <div className="password">

//                   <input className="form__input" type="password"  id="password" placeholder="Enter Password"/>
//               </div>

//               <div className="confirm-password">
//                   <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
//                   </div>
                  
//               </div>

//             <label>
//                     <div className='select'>
//                         <select value={department} onChange={(e) => setDepartment(e.target.value)}>
//                         <option className='select' value="" disabled hidden placeholder='Select a department'>Select a department</option>
//                         <option value="department1">Electrical engineering</option>
//                         <option value="department2">Computer engineering</option>
//                         </select>
//                         <div className="select-arrow"></div>

//                     </div>

//               </label>
//                   <div id="registerImage">
//                     <img  src={avatarPreview} alt="Avatar Preview" />
//                     <input
//                     type="file"
//                     name="avatar"
//                     accept="image/*"
//                     onChange={registerDataChange}
//                     />
//                 </div>  
//                   <Link className="btn" to="/login/main"> Add </Link>

//               </div>
//           </div>  
//       </>
//     )       
// }

