// src/components/EventForm.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const EventSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  description: Yup.string().required('Required'),
});

const EventForm = () => (
  <Container maxWidth="sm">
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Create Event
      </Typography>
      <Formik
        initialValues={{ title: '', date: '', description: '' }}
        validationSchema={EventSchema}
        onSubmit={(values) => {
          // Handle event creation logic here
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
                name="date"
                as={TextField}
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={touched.date && !!errors.date}
                helperText={touched.date && errors.date}
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
              Create Event
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  </Container>
);

export default EventForm;
