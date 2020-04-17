import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from "@material-ui/core/styles";
//import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Toolbar, AppBar, Typography, Container, Paper, Grid, MuiThemeProvider, } from '@material-ui/core';


const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidData: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    isLoaded: true,
                    covidData: json
                })
            });
    }

    render() {
        const { classes } = this.props;
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
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Confirmed <br></br> 1054</Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Recovered <br></br> 1054</Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Deaths <br></br> 1054</Paper>
                        </Grid>

                        <Grid item md={12} xs={12}>
                            <Paper className={classes.paper} square>More Info <br></br> </Paper>
                        </Grid>


                    </Grid>

                </Container>

            </div>
        );
    }
}




export default withStyles(styles)(Main);