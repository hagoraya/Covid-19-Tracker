import React, { Component } from 'react';
import { render } from '@testing-library/react';

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
        return (
            <h1>Hello World!</h1>
        );
    }
}




export default Main;