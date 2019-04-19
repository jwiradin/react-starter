import React from 'react';
import SplitPane from 'react-split-pane';
import { Form, Row, Col } from 'react-bootstrap';
import Route from 'react-router-dom'

class Bank extends React.Component {
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
        const bankAcc = this.state.acc.bankAcc;

        return (
            <div>{bankAcc.bsb}</div>
        );
    }
}
export default Bank;