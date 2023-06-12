
// // import React, { useState } from 'react';
// // import '../style/allRegister.css';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';

// // export default function FaculRegistration() {
// //   const [faculty, setFaculty] = useState('');

// //   const initialValues = {
// //     FacultyName: '',
// //   };

// //   const validationSchema = Yup.object().shape({
// //     FacultyName: Yup.string().required('Faculty Name is required'),
// //   });

// //   const handleSubmit = (values, { setSubmitting }) => {
// //     setTimeout(() => {
// //       alert(JSON.stringify(values, null, 2));
// //       setSubmitting(false);
// //     }, 400);
// //   };

// //   return (
// //     <Formik
// //       initialValues={initialValues}
// //       validationSchema={validationSchema}
// //       onSubmit={handleSubmit}
// //     >
// //       {({ isSubmitting }) => (
// //         <Form>
// //           <div className="form">
// //             <div className="form-body">
// //               <div className="header">
// //                 <p>Welcome, please <b className='head'>Add Faculty</b></p>
// //               </div>
// //               <br />

// //               <label>
// //                 <div className="select">
// //                   <Field
// //                     className="form__input"
// //                     type="text"
// //                     id="faculty"
// //                     placeholder="Enter Faculty Name"
// //                     name="FacultyName"
// //                     value={faculty}
// //                     onChange={(e) => setFaculty(e.target.value)}
// //                   />
// //                   <ErrorMessage name="FacultyName" />
// //                 </div>
// //               </label>

// //               <button type="submit" className="btn" disabled={isSubmitting}>
// //                 Add
// //               </button>
// //             </div>
// //           </div>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // }


// // import React, { useState } from 'react';
// // import '../style/allRegister.css';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import axios from 'axios';

// // export default function FaculRegistration() {
// //   const [faculty, setFaculty] = useState('');

// //   const initialValues = {
// //     FacultyName: '',
// //   };

// //   const validationSchema = Yup.object().shape({
// //     FacultyName: Yup.string().required('Faculty Name is required'),
// //   });

// //   const handleSubmit = async (values, { setSubmitting }) => {
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/createfaculty',
// //         values, {

// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': 'Bearer ' + token
// //         }
// //       })
// //         .then((response) => {
// //           // console.log(response.data);
// //           alert('Faculty added successfully');;
// //         })

// //     } catch (error) {
// //       alert('Error adding faculty');
// //     }
// //     setSubmitting(false);
// //   };

// //   return (
// //     <Formik
// //       initialValues={initialValues}
// //       validationSchema={validationSchema}
// //       onSubmit={handleSubmit}
// //     >
// //       {({ isSubmitting }) => (
// //         <Form>
// //           <div className="form">
// //             <div className="form-body">
// //               <div className="header">
// //                 <p>Welcome, please <b className='head'>Add Faculty</b></p>
// //               </div>
// //               <br />

// //               <label>
// //                 <div className="select">
// //                   <Field
// //                     className="form__input"
// //                     type="text"
// //                     id="faculty"
// //                     placeholder="Enter Faculty Name"
// //                     name="FacultyName"
// //                     value={faculty}
// //                     onChange={(e) => setFaculty(e.target.value)}
// //                   />
// //                   <ErrorMessage name="FacultyName" />
// //                 </div>
// //               </label>

// //               <button type="submit" className="btn" disabled={isSubmitting}>
// //                 Add
// //               </button>
// //             </div>
// //           </div>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // }


// import React, { useState } from 'react';
// import '../style/allRegister.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// export default function FaculRegistration({ token }) { // Pass token as a prop
//   const [faculty, setFaculty] = useState('');

//   const initialValues = {
//     FacultyName: '',
//   };

//   // const validationSchema = Yup.object().shape({
//   //   FacultyName: Yup.string().required('Faculty Name is required'),
//   // });
//   try {
//     const formData = new FormData();
//     formData.append('department', department);

//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');
//     console.log(token)
//     console.log(role)

//     const handleSubmit = async (values, { setSubmitting }) => {
//       try {
//         axios.post('http://localhost:5000/api/createfaculty', formData, {

//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + token
//           }
//         })
//           .then((response) => {
//             alert('Faculty added successfully');
//           })

//       } catch (error) {
//         alert('Error adding faculty');
//       }
//       setSubmitting(false);
//     };

//     return (
//       <Formik
//         initialValues={initialValues}
//         // validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div className="form">
//               <div className="form-body">
//                 <div className="header">
//                   <p>Welcome, please <b className='head'>Add Faculty</b></p>
//                 </div>
//                 <br />

//                 <label>
//                   <div className="select">
//                     <Field
//                       className="form__input"
//                       type="text"
//                       id="faculty"
//                       placeholder="Enter Faculty Name"
//                       name="FacultyName"
//                       value={faculty}
//                       onChange={(e) => setFaculty(e.target.value)}
//                     />
//                     <ErrorMessage name="FacultyName" />
//                   </div>
//                 </label>

//                 <button type="submit" className="btn" disabled={isSubmitting}>
//                   Add
//                 </button>
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     );
//   }

// formData.append('department', department);

//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');
//   console.log(token)
//   console.log(role)

//   if (!token) {
//     throw new Error('Token not found');
//   }
//   axios.post('http://localhost:5000/api/registerTeacher', formData, {

//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token
//     }
//   })

//     .then((response) => {
//       // console.log(response.data);
//       alert('Teacher added successfully');
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//       alert(error.response.data.error);
//       // or display the error message in the UI using state or props
//     });
// } finally {
//   setSubmitting(false);
// }
// };