import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// const ExamForm = () => {
//     const initialValues = {
//         title: '',
//         totalMarks: '',
//         marksPerRightAnswer: '',
//         studentId: '',
//         examId: '',
//         startTime: '',
//         endTime: '',
//         pending: true,  
//     };

//     const validationSchema = Yup.object({
//         title: Yup.string().required('Required'),
//         totalMarks: Yup.number().required('Required'),
//         marksPerRightAnswer: Yup.string().required('Required'),
//         studentId: Yup.string().required('Required'),
//         examId: Yup.string().required('Required'),
//         startTime: Yup.date().required('Required'),
//         endTime: Yup.date().required('Required'),
//     });

//     const onSubmit = (values, { setSubmitting, resetForm }) => {
//         axios.post('http://localhost:5000/api/createStudentExam', values)
//             .then((response) => {
//                 console.log('Exam created successfully:', response.data);
//                 resetForm();
//             })
//             .catch((error) => {
//                 console.error('Error creating exam:', error);
//             })
//             .finally(() => {
//                 setSubmitting(false);
//             });
//     };

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//         >
//             {({ isSubmitting }) => (
//                 <Form>
// <div className="mb-3">
//     <label htmlFor="title" className="form-label">Exam Title</label>
//     <Field type="text" className="form-control" id="title" name="title" />
//     <ErrorMessage name="title" className="form-text text-danger" />
// </div>
// <div className="mb-3">
//     <label htmlFor="totalMarks" className="form-label">Total Marks</label>
//     <Field type="number" className="form-control" id="totalMarks" name="totalMarks" />
//     <ErrorMessage name="totalMarks" className="form-text text-danger" />
// </div>
// <div className="mb-3">
//     <label htmlFor="marksPerRightAnswer" className="form-label">Marks Per Right Answer</label>
//     <Field type="text" className="form-control" id="marksPerRightAnswer" name="marksPerRightAnswer" />
//     <ErrorMessage name="marksPerRightAnswer" className="form-text text-danger" />
// </div>
// <div className="mb-3">
//     <label htmlFor="studentId" className="form-label">Student ID</label>
//     <Field type="text" className="form-control" id="studentId" name="studentId" />
//     <ErrorMessage name="studentId" className="form-text text-danger" />
// </div>
// <div className="mb-3">
//     <label htmlFor="examId" className="form-label">Exam ID</label>
//     <Field type="text" className="form-control" id="examId" name="examId" />
//     <ErrorMessage name="examId" className="form-text text-danger" />
// </div>
// <div className="mb-3">
//     <label htmlFor="startTime" className="form-label">Start Time</label>
//     <Field type="datetime-local" className="form-control" id="startTime" name="startTime" />
//     <ErrorMessage name="startTime" className="form-text text-danger" />
// </div>
// <div className="mb-3">
//     <label htmlFor="endTime" className="form-label">End Time</label>
//     <Field type="datetime-local" className="form-control" id="endTime" name="endTime" />
//     <ErrorMessage name="endTime" className="form-text text-danger" />
// </div>
//                     <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Create Exam</button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default ExamForm;




import React, { useState } from 'react';
import axios from 'axios';

const CreateStudentExam = () => {
    const [title, setTitle] = useState('');
    const [totalMarks, setTotalMarks] = useState('');
    const [marksPerRightAnswer, setMarksPerRightAnswer] = useState('');
    const [studentId, setStudentId] = useState('');
    const [examId, setExamId] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };

            await axios.post(
                'http://localhost:5000/api/createStudentExam',
                {
                    title,
                    totalMarks,
                    marks_per_right_answer: marksPerRightAnswer,
                    studentId,
                    examId,
                    startTime,
                    endTime,
                    pending,
                },
                config
            );
            setSuccess('Student exam created successfully.');
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div>
            <h1>Create Student Exam</h1>
            <form onSubmit={handleSubmit}>
                {/* Add form fields here */}
                {/* ... */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Exam Title</label>
                    <Field type="text" className="form-control" id="title" name="title" />
                    <ErrorMessage name="title" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="totalMarks" className="form-label">Total Marks</label>
                    <Field type="number" className="form-control" id="totalMarks" name="totalMarks" />
                    <ErrorMessage name="totalMarks" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="marksPerRightAnswer" className="form-label">Marks Per Right Answer</label>
                    <Field type="text" className="form-control" id="marksPerRightAnswer" name="marksPerRightAnswer" />
                    <ErrorMessage name="marksPerRightAnswer" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="studentId" className="form-label">Student ID</label>
                    <Field type="text" className="form-control" id="studentId" name="studentId" />
                    <ErrorMessage name="studentId" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="examId" className="form-label">Exam ID</label>
                    <Field type="text" className="form-control" id="examId" name="examId" />
                    <ErrorMessage name="examId" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="startTime" className="form-label">Start Time</label>
                    <Field type="datetime-local" className="form-control" id="startTime" name="startTime" />
                    <ErrorMessage name="startTime" className="form-text text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="endTime" className="form-label">End Time</label>
                    <Field type="datetime-local" className="form-control" id="endTime" name="endTime" />
                    <ErrorMessage name="endTime" className="form-text text-danger" />
                </div>

                <button type="submit">Create</button>
            </form>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
        </div>
    );
};

export default CreateStudentExam;