import React from 'react';
import SplitPane from 'react-split-pane';
import Name from '../components/name';
import Address from '../components/address';
import Bank from '../components/bank';
import { Nav, Container } from 'react-bootstrap';

import { Route, NavLink } from 'react-router-dom'

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            acc: {
                name: {
                    firstName: 'andrew',
                    lastName: '',
                },
                address: {
                    address: '',
                    suburb: 'sydney',
                    state: ''
                },
                bankAcc: {
                    bankName: '',
                    bsb: 'bsb'
                }
            },
            steps: [
                {
                    seq: 0,
                    name: 'name',
                    timeStamp: new Date().getTime(),
                    isValid: false,
                    isLoading: false,
                    path: `${props.match.path}/name`
                },
                {
                    seq: 1,
                    name: 'address',
                    timeStamp: new Date().getTime(),
                    isValid: false,
                    isLoading: false,
                    path: `${props.match.path}/address`
                },
                {
                    seq: 2,
                    name: 'bank',
                    timeStamp: new Date().getTime(),
                    isValid: false,
                    isLoading: false,
                    path: `${props.match.path}/bank`
                }

            ]
        }

        this.moveNext = this.moveNext.bind(this);
        props.history.push(this.state.steps[0].path);
    };

    moveNext = (acc, step) => {
        console.log('moveNext', acc, step)
        if (step.seq < 2) {
            const steps = this.state.steps;
            steps[step.seq + 1].timeStamp = new Date().getTime();
            this.setState({ acc: acc, steps: steps });
            this.state.history.push(steps[step.seq + 1].path);
        }
    }

    render() {
        console.log('account-render', this.state);

        return (
            <SplitPane split="horizontal" size="5%">
                <Nav>
                    <NavLink to={this.state.steps[0].path}>Name</NavLink>
                    <NavLink to={this.state.steps[1].path}>Address</NavLink>
                    <NavLink to={this.state.steps[2].path}>Bank Details</NavLink>
                </Nav>
                <Container>
                    <Route exact path={this.state.steps[0].path} render={() => <Name acc={this.state.acc} step={this.state.steps[0]} moveNext={this.moveNext} />} />
                    <Route exact path={this.state.steps[1].path} render={() => <Address acc={this.state.acc} step={this.state.steps[1]} moveNext={this.moveNext} />} />
                    <Route exact path={this.state.steps[2].path} render={() => <Bank acc={this.state.acc} step={this.state.steps[2]} moveNext={this.moveNext} />} />
                </Container>
            </SplitPane>
        );
    }
}
export default Account;