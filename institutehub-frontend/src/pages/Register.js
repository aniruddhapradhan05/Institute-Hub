// src/pages/Register.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const Register = () => (
  <Container maxWidth="sm">
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          // Handle register logic here
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="name"
                as={TextField}
                variant="outlined"
                fullWidth
                label="Name"
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="email"
                as={TextField}
                variant="outlined"
                fullWidth
                label="Email"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="password"
                as={TextField}
                type="password"
                variant="outlined"
                fullWidth
                label="Password"
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
            <Box mt={2}>
              <Typography variant="body2">
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  </Container>
);

export default Register;
