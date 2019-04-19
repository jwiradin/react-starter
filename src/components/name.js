import React from 'react';
import SplitPane from 'react-split-pane';
import { Form, Row, Col } from 'react-bootstrap';
import Route from 'react-router-dom'

class Name extends React.Component {
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
        const name = this.state.acc.name;
        console.log(name)
        return (
            <Form timestamp={this.state.step.timeStamp}>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange={this.onChange} value={name.firstName}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name"  onChange={this.onChange} value={name.lastName}/>
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
export default Name;