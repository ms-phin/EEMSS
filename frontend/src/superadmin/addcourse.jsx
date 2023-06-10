import React, { useState } from 'react';
import '../style/allRegister.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Course() {
  const [department, setDepartment] = useState('');
  const [avatar, setAvatar] = useState('/profile.png');
  const [avatarPreview, setAvatarPreview] = useState('/profile.png');

  const registerDataChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Name is required'),
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
      validationSchema={validationSchema}
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
                    Select a Faculity
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
     
              <div id="registerImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <Field
                  type="file"
                  name="avatar"
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

