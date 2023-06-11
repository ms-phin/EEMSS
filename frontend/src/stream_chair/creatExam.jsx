import React from 'react';
import '../style/exam.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const CreatExam = () => {
    const initialValues = {

        departmentId: '',
        courseId: '',
        numofqns: '',
    };
    const validationSchema = Yup.object({
        departmentId: Yup.string().required('Required'),
        courseId: Yup.number().required('Required'),
        numofqns: Yup.string().required('Required'),

    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        axios.post('http://localhost:5000/api/createStudentExam', values)
            .then((response) => {
                console.log('Exam created successfully:', response.data);
                resetForm();
            })
            .catch((error) => {
                console.error('Error creating exam:', error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>

                    <div><h2>Prepare an exam here </h2></div>

                    <div className="mb-3">
                        <label htmlFor="examId" className="forum">Department Id</label>
                        <Field type="text" className="for" id="deptid" name="deptid" />
                        <ErrorMessage name="deptid" className="form-text text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="examId" className="forum">Course Id</label>
                        <Field type="text" className="for" id="course" name="course" />
                        <ErrorMessage name="course" className="form-text text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="duration" className="forum">Number of questions</label>
                        <Field type="number" className="for" id="numqn" name="numqn" min="1" />
                        <ErrorMessage name="numqn" className="form-text text-danger" />
                    </div>

                    <button type="submit" className="button button-primary" disabled={isSubmitting}> Submit </button>
                </Form>
            )}
        </Formik>
    );
};

export default CreatExam;