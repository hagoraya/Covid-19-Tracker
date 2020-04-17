import React from 'react';


//Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Toolbar, AppBar, Button, Typography, Container, Paper, Grid, makeStyles } from '@material-ui/core';




//My components
import Main from './components/main.component'
import Header from './components/header.component'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            COVID-19 Worldwide Statistics
          </Typography>

          <Typography align="right" variant="caption" >
            Last Updated: Few moments ago
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Main></Main>
        <Grid container spacing={3}>
          <Grid item md={4} xs="12">
            <Paper className={classes.paper} square> Grid item</Paper>
          </Grid>

          <Grid item md={4} xs="12">
            <Paper className={classes.paper} square> Grid item</Paper>
          </Grid>

          <Grid item md={4} xs="12">
            <Paper className={classes.paper} square> Grid item</Paper>
          </Grid>

        </Grid>
      </Container>


    </div>

  );
}

export default App;
