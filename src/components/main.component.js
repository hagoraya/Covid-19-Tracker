import React, { Component } from 'react';
import CountUp from 'react-countup';





import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from "@material-ui/core/styles";
import { Typography, Container, Paper, Grid, Divider } from '@material-ui/core';

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
    },

    main_text: {
        textAlign: 'center',
    },


    paper_confirmed: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#ff9800",
        fontSize: "15px"
    },

    paper_recovered: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#05b584'

    },

    paper_death: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "#ec314b"
    },




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
        this.getYesterdayData();
    }

    getGlobalData() {
        fetch('https://covid19.mathdro.id/api')
            .then(res => res.json())
            .then(json => {
                //  console.log(json);
                this.setState({
                    isLoaded: true,
                    covidData: json,
                    lastUpdated: json.lastUpdate
                })
                //  console.log("Covid last update:")
                //  console.log(this.state.lastUpdated)
            });
    }

    getCanadaData() {
        fetch('https://covid19.mathdro.id/api/countries/Canada')
            .then(res => res.json())
            .then(json => {
                //  console.log("Canada: ")
                // console.log(json);
                this.setState({
                    isLoaded: true,
                    canadaData: json,
                    lastUpdated: new Date().toLocaleString(),
                })

            });
    }

    getYesterdayData() {

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
                            <Typography className={classes.main_text} variant="h4">COVID-19 Outbreak</Typography>
                            <Typography className={classes.main_text} variant="subtitle1">Data from <a href="https://github.com/mathdroid/covid-19-api">Mathdroid</a> API</Typography>

                            <br></br>

                            <Divider></Divider>
                            <br></br>
                            <Typography className={classes.main_text} variant="h4">Global Cases</Typography>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper_confirmed} color="red">
                                <Typography variant="h6">{this.state.covidData.confirmed ?
                                    <CountUp end={this.state.covidData.confirmed.value} duration={1}></CountUp> : 'Data not loaded'}
                                </Typography>
                                <Typography variant="subtitle1">Confirmed</Typography>
                            </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper_recovered}>
                                <Typography variant="h6">{this.state.covidData.recovered ?
                                    <CountUp end={this.state.covidData.recovered.value} duration={1.5}></CountUp> : 'Data not loaded'}
                                </Typography>
                                <Typography variant="subtitle1">Recovered</Typography>
                            </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper_death} >
                                <Typography variant="h6">{this.state.covidData.deaths ?
                                    <CountUp end={this.state.covidData.deaths.value} duration={2}></CountUp> : 'Date not loaded'}
                                </Typography>
                                <Typography variant="subtitle1">Deaths</Typography>
                            </Paper>
                        </Grid>

                        <Grid item md={12} xs={12}>
                            <Typography className={classes.main_text} variant="h4">  Canada Cases</Typography>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper_confirmed} >
                                <Typography variant="h6">{this.state.canadaData.confirmed ?
                                    <CountUp end={this.state.canadaData.confirmed.value} duration={1}></CountUp> : 'Data not loaded'}
                                </Typography>
                                <Typography variant="subtitle1">Confirmed</Typography>
                            </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper_recovered} >
                                <Typography variant="h6">{this.state.canadaData.recovered ?
                                    <CountUp end={this.state.canadaData.recovered.value} duration={1.5}></CountUp> : 'Data not loaded'}
                                </Typography>
                                <Typography variant="subtitle1">Recovered</Typography>
                            </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper_death}> <Typography variant="h6">{this.state.canadaData.deaths ?
                                <CountUp end={this.state.canadaData.deaths.value} duration={2}></CountUp> : 'Data not loaded'}
                            </Typography>
                                <Typography variant="subtitle1">Deaths</Typography>

                            </Paper>
                        </Grid>

                        <br></br>

                        <Grid item md={12} xs={12}>
                            <Typography className={classes.main_text} variant="subtitle1">Last Update: {this.state.lastUpdated}</Typography>
                        </Grid>

                    </Grid>
                    <br></br>



                    <br></br>

                </Container>
            </div>
        );
    }
}




export default withStyles(styles)(Main);