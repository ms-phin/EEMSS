import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExamForm from '../components/examfrom'
const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
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
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login/user', formData)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                setIsAuthenticated(true);
            })
            .catch((error) => {
                console.error('Error logging in:', error);
            });
    };
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         history.push('/createStudentExam'); // Replace with the URL of the dashboard page
    //     }
    // }, [isAuthenticated, history]);
    return (
        <div>
            {isAuthenticated ? (
                <ExamForm />
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            )}
        </div>
    );

}
export default LoginForm;