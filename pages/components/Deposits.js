import * as React from 'react';
import Title from './Title';
import {Container, Grid, Paper, Link, Typography, Toolbar, Box, CssBaseline} from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({xs, md, lg}) {
  return (
    <Grid item xs={xs} md={md} lg={lg}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240,
        }}
      >
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Paper>
    </Grid>
  );
}