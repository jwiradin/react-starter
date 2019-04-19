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
        const o = e.currentTarget;
        const acc = this.state.acc;
        acc.name[o.id] = o.value
        this.setState({acc: acc});
    }

    render() {
        const bankAcc = this.state.acc.bankAcc;

        return (
            <Form timestamp={this.state.step.timeStamp}>
                <Form.Row>
                    <Form.Group as={Col} controlId="bankName">
                        <Form.Label>bankName</Form.Label>
                        <Form.Control type="text" placeholder="Enter bankName" onChange={this.onChange} value={bankAcc.bankName}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="bsb">
                        <Form.Label>bsb</Form.Label>
                        <Form.Control type="text" placeholder="Enter bsb" onChange={this.onChange} value={bankAcc.bsb}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="next">
                        <Form.Control type="button" value="Next" onClick={() => this.state.moveNext(this.state.acc, this.state.step)}/>
                    </Form.Group>
                </Form.Row>
            </Form>

        );
    }
}
export default Bank;