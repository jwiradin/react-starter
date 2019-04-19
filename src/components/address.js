import React from 'react';
import SplitPane from 'react-split-pane';
import { Form, Row, Col } from 'react-bootstrap';
import Route from 'react-router-dom'

class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
        this.onChange = this.onChange.bind(this);
        console.log('name construction', this.state)
    }

    onChange = (e) => {
        console.log(e);
    }

    render() {
        const address = this.state.acc.address;

        return (
            <div>{address.suburb}</div>
        );
    }
}
export default Address;