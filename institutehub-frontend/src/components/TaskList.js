// src/components/TaskList.js

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const tasks = [
  { id: 1, title: 'Task 1', dueDate: '2024-07-10', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', dueDate: '2024-07-20', description: 'Description for Task 2' },
];

const TaskList = () => (
  <Container maxWidth="lg">
    <Typography variant="h4" gutterBottom>
      Tasks
    </Typography>
    <Grid container spacing={4}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} key={task.id}>
          <Paper className="paper">
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {task.dueDate}
            </Typography>
            <Typography variant="body1">{task.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default TaskList;
