import React, { Component } from 'react';
import CountUp from 'react-countup';
import ReactFlagsSelect from 'react-flags-select';




import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from "@material-ui/core/styles";
import { Toolbar, AppBar, Typography, Container, Paper, Grid, MuiThemeProvider, Divider, borders, Box } from '@material-ui/core';

//TODO Fix last updated format
//TODO add colours to each status number papers
//TODO add commas in numbers

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },

    appbar: {
        marginBottom: 0.5,
    },

    box: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        border: 1,
        m: 1,
        borderColor: 'text.primary',


    }




});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidData: [],
            lastUpdated: null,
            isLoaded: false,
            countryList: [],
            canadaData: []
        }
    }

    componentDidMount() {
        this.getGlobalData();
        this.getCanadaData();
    }

    getGlobalData() {
        fetch('https://covid19.mathdro.id/api')
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    isLoaded: true,
                    covidData: json,
                    lastUpdated: new Date().toLocaleString(),
                })
                console.log("Covid Data:")
                //  console.log(this.state.covidData)
            });
    }

    getCanadaData() {
        fetch('https://covid19.mathdro.id/api/countries/Canada')
            .then(res => res.json())
            .then(json => {
                console.log("Canada: ")
                console.log(json);
                this.setState({
                    isLoaded: true,
                    canadaData: json,
                    lastUpdated: new Date().toLocaleString(),
                })

            });
    }

    getCountryList() {
        fetch('https://covid19.mathdro.id/api/countries')
            .then(res => res.json())
            .then(json => {

                var countries = [];
                for (var i = 0; i <= json.length; i++) {
                    countries.push(json.countries[i].name)
                }

                console.log("1st country:")
                console.log(json.countries[0].name)
                console.log("json len" + json.length)

                this.setState({
                    isLoaded: true,
                    countryList: json
                })
                console.log("Country List: ")
                console.log(this.state.countryList);
            });
    }



    render() {
        const { classes } = this.props;

        if (this.state.covidData === 0) {
            return null;
        }

        return (
            <div>

                <br></br>

                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <Box className={classes.paper} square>Global Cases <br></br>  </Box>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Confirmed <br></br> {this.state.covidData.confirmed ? <CountUp end={this.state.covidData.confirmed.value} duration={1}></CountUp> : 'Data not loaded'}  </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Recovered <br></br> {this.state.covidData.recovered ? <CountUp end={this.state.covidData.recovered.value} duration={1.5}></CountUp> : 'Data not loaded'} </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Deaths <br></br> {this.state.covidData.deaths ? <CountUp end={this.state.covidData.deaths.value} duration={2}></CountUp> : 'Date not loaded'}</Paper>
                        </Grid>

                        <Grid item md={12} xs={12}>
                            <Box className={classes.paper} square>Canada Stats <br></br>  </Box>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} >Confirmed <br></br> {this.state.canadaData.confirmed ? <CountUp end={this.state.canadaData.confirmed.value} duration={1}></CountUp> : 'Data not loaded'}  </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} >Recovered <br></br> {this.state.canadaData.recovered ? <CountUp end={this.state.canadaData.recovered.value} duration={1}></CountUp> : 'Data not loaded'}  </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper}>Deaths <br></br> {this.state.canadaData.deaths ? <CountUp end={this.state.canadaData.deaths.value} duration={1}></CountUp> : 'Data not loaded'}  </Paper>
                        </Grid>

                    </Grid>
                    <br></br>
                    <Divider ></Divider>
                    <br></br>



                    <br></br>

                </Container>
            </div>
        );
    }
}




export default withStyles(styles)(Main);