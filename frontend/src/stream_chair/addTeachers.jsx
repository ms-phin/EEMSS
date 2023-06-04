// import React, { useState } from 'react';
// import '../style/allRegister.css';
// import { Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// export default function DeptRegistrationForm() {
//   const [department, setDepartment] = useState('');
//   const [avatar, setAvatar] = useState('/profile.png');
//   const [avatarPreview, setAvatarPreview] = useState('/profile.png');

//   const registerDataChange = (e) => {
//     if (e.target.name === 'avatar') {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setAvatarPreview(reader.result);
//           setAvatar(reader.result);
//         }
//       };

//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm Password is required'),
//   });

//   const initialValues = {
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   };

//   // const handleSubmit = (values, { setSubmitting }) => {
//   //   setTimeout(() => {
//   //     alert(JSON.stringify(values, null, 2));
//   //     setSubmitting(false);
//   //   }, 400);
//   // };
//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const formData = new FormData();
//       formData.append('username', values.username);
//       formData.append('email', values.email);
//       formData.append('password', values.password);
//       formData.append('confirmPassword', values.confirmPassword);
//       formData.append('departmentId', department);

//       const response = await axios.post('http://localhost:5000/api/registerTeacher', formData);

//       console.log(response.data);
//       alert('Teacher added successfully');
//     } catch (error) {
//       console.log(error.response.data);
//       alert(error.response.data.error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div className="form">
//             <div className="form-body">
//               <div className="header">

//                 <p>Welcome , please <b className='head'>Add Teachers</b></p>

//               </div>
//               <br />
//               <div className="enter">
//                 <div className="username">
//                   <Field
//                     className="form__input"
//                     type="text"
//                     id="username"
//                     placeholder="Enter Full Name"
//                     name="username"
//                   />
//                   <ErrorMessage name="username" />
//                 </div>

//                 <div className="email">
//                   <Field
//                     type="email"
//                     id="email"
//                     className="form__input"
//                     placeholder="Enter Email"
//                     name="email"
//                   />
//                   <ErrorMessage name="email" />
//                 </div>

//                 <div className="password">
//                   <Field
//                     className="form__input"
//                     type="password"
//                     id="password"
//                     placeholder="Enter Password"
//                     name="password"
//                   />
//                   <ErrorMessage name="password" />
//                 </div>

//                 <div className="confirm-password">
//                   <Field
//                     className="form__input"
//                     type="password"
//                     id="confirmPassword"
//                     placeholder="Confirm Password"
//                     name="confirmPassword"
//                   />
//                   <ErrorMessage name="confirmPassword" />
//                 </div>
//               </div>

//               <label>
//                 <div className="select">
//                   <Field
//                     as="select"
//                     value={department}
//                     onChange={(e) => setDepartment(e.target.value)}
//                   >
//                     <option value="" disabled hidden>
//                     Select a Course
//                     </option>
//                     <option value="department1">Java</option>
//                     <option value="department2">OOP</option>
//                     <option value="department3">Database</option>
//                     <option value="department3">Distributed system</option>
//                     <option value="department3">Signal and Analysis</option>
//                     <option value="department3">Embeded Systems</option>
//                     <option value="department3">Software Engineering</option>
//                   </Field>
//                   <div className="select-arrow"></div>
//                 </div>
//               </label>

//               <div id="registerImage">
//                 <img src={avatarPreview} alt="Avatar Preview" />
//                 <Field
//                   type="file"
//                   name="avatar"
//                   accept="image/*"
//                   onChange={registerDataChange}
//                 />
//               </div>

//               <button type="submit" className="btn" disabled={isSubmitting}>
//                 Add
//               </button>
//             </div>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// }


import React, { useState, useEffect } from 'react';
import '../style/allRegister.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function DeptRegistrationForm() {
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [courseOptions, setCourseOptions] = useState([]);
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [image, setImage] = useState(null);

  const registerDataChange = (e) => {
    if (e.target.name === 'image') {
      setImage(e.target.files[0]);
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null,
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/getAllDepartment')
      .then((response) => {
        setDepartmentOptions(response.data.departments);
        console.log(response.data.departments)

      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(response.data.departments)
    axios
      .get('http://localhost:5000/api/getAllCourses')
      .then((response) => {
        setCourseOptions(response.data.courses);
        console.log(response.data.courses)

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append('username', values.username);
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('confirmPassword', values.confirmPassword);
      formData.append('image', image);
      formData.append('course', course);
      formData.append('department', department);

      const response = await axios.post(
        'http://localhost:5000/api/registerTeacher',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token') && localStorage.getItem('role')}`,
          }
        }
      );


      console.log(response.data);
      alert('Teacher added successfully');
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form">
            <div className="form-body">
              <div className="header">
                <p>
                  Welcome, please <b className="head">Add Teachers</b>
                </p>
              </div>
              <br />
              <div className="enter">
                <div className="username">
                  <Field
                    className="form__input"
                    type="text"
                    id="username"
                    placeholder="Enter Full Name"
                    name="username"
                  />
                  <ErrorMessage name="username" />
                </div>

                <div className="email">
                  <Field
                    type="email"
                    id="email"
                    className="form__input"
                    placeholder="Enter Email"
                    name="email"
                  />
                  <ErrorMessage name="email" />
                </div>

                <div className="password">
                  <Field
                    className="form__input"
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    name="password"
                  />
                  <ErrorMessage name="password" />
                </div>

                <div className="confirm-password">
                  <Field
                    className="form__input"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                  />
                  <ErrorMessage name="confirmPassword" />
                </div>
              </div>

              <label>
                <div className="select">
                  <Field
                    as="select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Select a Department
                    </option>
                    {departmentOptions &&
                      departmentOptions.map((option) => (
                        <option key={option._id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                  </Field>
                  <div className="select-arrow"></div>
                </div>
              </label>
              <label>
                <div className="select">
                  <Field
                    as="select"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Select a Course
                    </option>
                    {courseOptions &&
                      courseOptions.map((option) => (
                        <option key={option._id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                  </Field>
                  <div className="select-arrow"></div>
                </div>
              </label>


              <div id="registerImage">
                <img src={image ? URL.createObjectURL(image) : null} alt="Selected Image" />
                <Field
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={registerDataChange}
                />
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
