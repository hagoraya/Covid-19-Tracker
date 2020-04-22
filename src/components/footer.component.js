import React from 'react'
import { makeStyles, Paper, Typography, sizing } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        color: 'black',
        background: '#b2bec3',
        textAlign: 'center',
        height: "10%"

    }
});


export default function Footer() {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.root}>
                <br />
                <Typography>Developed by <a href="https://github.com/hagoraya">Harpreet Goraya</a></Typography>
                <Typography>Data API provided by <a href="https://github.com/mathdroid/covid-19-api">Mathdroid</a>  </Typography>
            </div>
        </div>
    )
}

//TODO Fix href links



