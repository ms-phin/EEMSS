
//import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ExamForm from '../components/examfrom'
// const LoginForm = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const handleInputChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value,
//         });
//     };
// const onSubmit = (values, { setSubmitting, resetForm }) => {
//     const token = localStorage.getItem('token');
//     axios.post('http://localhost:5000/api/createStudentExam', values, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     })
//         .then((response) => {
//             console.log('Exam created successfully:', response.data);
//             resetForm();
//         })
//         .catch((error) => {
//             console.error('Error creating exam:', error);
//         })
//         .finally(() => {
//             setSubmitting(false);
//         });
// };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:5000/api/login/user', formData)
//             .then((response) => {
//                 localStorage.setItem('token', response.data.token);
//                 setIsAuthenticated(true);
//             })
//             .catch((error) => {
//                 console.error('Error logging in:', error);
//             });
//     };
//     // useEffect(() => {
//     //     if (isAuthenticated) {
//     //         history.push('/createStudentExam'); // Replace with the URL of the dashboard page
//     //     }
//     // }, [isAuthenticated, history]);
//     return (
//         <div>
//             {isAuthenticated ? (
//                 <ExamForm />
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Log in</button>
//                 </form>
//             )}
//         </div>
//     );

// }
// export default LoginForm;import React, { useState } from "react";


// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
// import useNavigate from 'react-router-dom'

import React, { useState } from 'react';
import axios from 'axios';
import './logfrom.css';


import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login/user', {
                email,
                password,
            }).then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.role);
                console.log(response.data.token);
                console.log(response.data.role);
                // Check the role and route to the appropriate dashboard
                if (response.data.role === 'teacher') {
                    navigate('/teacherdashboard');
                } else if (response.data.role === 'chair') {
                    navigate('/chairdashboard');
                } else if (response.data.role === 'student') {
                    navigate('/studentdashboard');
                }
            }).catch((error) => {
                alert(error.response.data.massage
                )
            })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="formm">
                    <div className="log_form">
                        <div className="username">
                            <input className="input_login" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className="log_password">
                            <input className="input_login" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <br />
                        <button className="log_btn" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;






// return (
//     <form onSubmit={handleSubmit}>
//         <div className="formm">
//             <div className="log_form">
//                 <div className="username">
//                     {/* <label className="form__label" for="email">Email </label> */}
//                     <input type="username" id="un" className="input_login" placeholder="Username" value={username} onChange={(handleUsernameChange)} />
//                 </div>
//                 <div className="log_password">
//                     {/* <label className="form__label" for="password">Password </label> */}
//                     <input className="input_login" type="password" id="password" placeholder="Password" value={password} onChange={(handlePasswordChange)} />
//                 </div>
//                 <button type="submit" className="log_btn">Login</button>
//                 {/* <Link className="log_btn" type="submit"> Login </Link> */}
//                 <div className='forgot'>
//                     <Link to="/password/forgot" ><p>Forgot Password ?</p></Link>
//                 </div>
//             </div>
//         </div>
//     </form>
// );