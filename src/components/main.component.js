import React, { Component } from 'react';
import CountUp from 'react-countup';
import ReactFlagsSelect from 'react-flags-select';




import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from "@material-ui/core/styles";
import { Toolbar, AppBar, Typography, Container, Paper, Grid, MuiThemeProvider, Divider } from '@material-ui/core';

//TODO Fix last updated format
//TODO add colours to each status number papers
//TODO add commas in numbers

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },

    appbar: {
        marginBottom: 0.5,
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
        }
    }

    componentDidMount() {
        this.getCovidData();



        //fetch country list
        this.getCountryList();

    }

    getCovidData() {
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
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" style={{ flex: 1 }}>
                            COVID-19 Worldwide Statistics
                </Typography>

                        <Typography align="right" variant="caption" >
                            Last Updated: {this.state.covidData.lastUpdate}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <br></br>

                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Confirmed <br></br> {this.state.covidData.confirmed ? <CountUp end={this.state.covidData.confirmed.value} duration={1}></CountUp> : 'Data not loaded'}  </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Recovered <br></br> {this.state.covidData.recovered ? <CountUp end={this.state.covidData.recovered.value} duration={1.5}></CountUp> : 'Data not loaded'} </Paper>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Paper className={classes.paper} square>Deaths <br></br> {this.state.covidData.deaths ? <CountUp end={this.state.covidData.deaths.value} duration={2}></CountUp> : 'Date not loaded'}</Paper>
                        </Grid>
                        <ReactFlagsSelect
                            placeholder="Select Country.."
                        ></ReactFlagsSelect>
                        <Grid item md={12} xs={12}>
                            <Paper className={classes.paper} square>More Info <br></br>  </Paper>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Divider ></Divider>
                    <br></br>
                    <div>
                        {this.state.countryList.countries ?
                            <div>
                                <ul>
                                    {this.state.countryList.countries.map(function (country, index) {
                                        return (
                                            <div key={index}>
                                                <p>{country.name}</p>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                            :
                            <p>loading....</p>}
                    </div>


                    <br></br>

                </Container>
            </div>
        );
    }
}




export default withStyles(styles)(Main);