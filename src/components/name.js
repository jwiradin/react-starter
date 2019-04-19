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
        console.log(e);
    }

    render() {
        const name = this.state.acc.name;

        return (
            <Form>
                <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={name.firstName}
                onChange={this.onChange}
              />
            </Form.Group>
            </Form.Row>
            </Form>
        );
    }
}
export default Name;