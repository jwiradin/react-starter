import React from 'react';
import { Form, Col } from 'react-bootstrap';

class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
        this.onChange = this.onChange.bind(this);
        console.log('name construction', this.state)
    }

    onChange = (e) => {
        const o = e.currentTarget;
        const acc = this.state.acc;
        acc.address[o.id] = o.value
        this.setState({acc: acc});
    }

    render() {
        const address = this.state.acc.address;
        console.log('address',address)

        return (
            <Form timestamp={this.state.step.timeStamp}>
                <Form.Row>
                    <Form.Group as={Col} controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" onChange={this.onChange} value={address.address}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="suburb">
                        <Form.Label>Suburub</Form.Label>
                        <Form.Control type="text" placeholder="Enter suburb" onChange={this.onChange} value={address.suburb}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter state"  onChange={this.onChange} value={address.state}/>
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
export default Address;