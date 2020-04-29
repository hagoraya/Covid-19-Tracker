import React from 'react'
import { makeStyles, Typography, } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        left: "0",
        bottom: "0",
        width: "100%",
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
            </div>
        </div>
    )
}

//TODO Fix href links



