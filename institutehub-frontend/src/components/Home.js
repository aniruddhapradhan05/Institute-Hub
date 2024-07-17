// src/components/Home.js

import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <Container maxWidth="lg" className="home">
      <Typography variant="h2" gutterBottom>
        Welcome to InstituteHub
      </Typography>
      <Typography variant="h5" paragraph>
        Your centralized platform for managing institute activities efficiently.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper className="paper">
            <Typography variant="h6">Manage Events</Typography>
            <Typography paragraph>
              Organize and keep track of all institute events in one place.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/events">
              View Events
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className="paper">
            <Typography variant="h6">Manage Tasks</Typography>
            <Typography paragraph>
              Assign and track tasks efficiently.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/tasks">
              View Tasks
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
