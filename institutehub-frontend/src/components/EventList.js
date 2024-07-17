// src/components/EventList.js

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const events = [
  { id: 1, title: 'Event 1', date: '2024-07-01', description: 'Description for Event 1' },
  { id: 2, title: 'Event 2', date: '2024-07-15', description: 'Description for Event 2' },
];

const EventList = () => (
  <Container maxWidth="lg">
    <Typography variant="h4" gutterBottom>
      Events
    </Typography>
    <Grid container spacing={4}>
      {events.map((event) => (
        <Grid item xs={12} sm={6} key={event.id}>
          <Paper className="paper">
            <Typography variant="h6">{event.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {event.date}
            </Typography>
            <Typography variant="body1">{event.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default EventList;
