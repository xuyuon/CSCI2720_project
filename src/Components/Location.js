import React, { Component } from 'react';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {//load for each set state(just want once=> new class + new componentdidmount)
        
    }


    render() {
        return (
			<main className="col">
                <h3> Location</h3>
            </main>
        );
    }
}

export default Location;