import React, { useState } from 'react';
import '../style/allRegister.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FaculRegistration() {
  const [department, setDepartment] = useState('');

  // const validationSchema = Yup.object().shape({
  //   username: Yup.string().required('Name is required'),
  //   email: Yup.string().email('Invalid email').required('Email is required'),
  //   password: Yup.string().required('Password is required'),
  //   confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //   .required('Confirm Password is required'),
  // });

  const initialValues = {
    FacultyName: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

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
               
                <p>Welcome , please <b className='head'>Add Faculty</b></p>

              </div>
              <br />

              <label>
                <div className="select">
                  <Field
                    as="select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="" disabled hidden>
                   --- Select a Faculity ---
                    </option>
                    <option value="department1">Electrical and Computer engineering</option>
                    <option value="department2">computing Faculity</option>
                    <option value="department3">Mechanical and Industrial Engineering</option>
                    <option value="department4">Chemical and Food Engineering</option>
                    <option value="department5">Civil, Hydraulic and Water Engineering</option>

                  </Field>
                  <div className="select-arrow"></div>
                </div>
              </label>
     
           

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

// export default function SupRegistrationForm() {
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
//             <p>Welcome , please <b className='head'>Register Faculity Heads</b></p>
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
//                   </div>  

//             <label>
//                     <div className='select'>
//                        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
//                         <option value="" disabled hidden>Select a Faculity</option>
//                         <option value="department1">Electrical and Computer engineering</option>
//                         <option value="department2">computing Faculity</option>
//                         <option value="department2">Mechanical and Industrial Engineering</option>
//                         <option value="department2">Chemical and Food Engineering</option>
//                         <option value="department2">Civil, Hydraulic and Water Engineering</option>
//                    </select>
//                         {/* <div className="select-arrow"></div> */}

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
//                    <Link className="btn" to="/login/main"> Register </Link>

//               </div>
//           </div>  
//       </>
//     )       
// }
