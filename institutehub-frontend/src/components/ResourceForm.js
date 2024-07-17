// src/components/ResourceForm.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const ResourceSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  link: Yup.string().url('Invalid URL').required('Required'),
  description: Yup.string().required('Required'),
});

const ResourceForm = () => (
  <Container maxWidth="sm">
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Add Resource
      </Typography>
      <Formik
        initialValues={{ title: '', link: '', description: '' }}
        validationSchema={ResourceSchema}
        onSubmit={(values) => {
          // Handle resource creation logic here
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="title"
                as={TextField}
                variant="outlined"
                fullWidth
                label="Title"
                error={touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="link"
                as={TextField}
                variant="outlined"
                fullWidth
                label="Link"
                error={touched.link && !!errors.link}
                helperText={touched.link && errors.link}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="description"
                as={TextField}
                variant="outlined"
                fullWidth
                label="Description"
                multiline
                rows={4}
                error={touched.description && !!errors.description}
                helperText={touched.description && errors.description}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Resource
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  </Container>
);

export default ResourceForm;
