import React from 'react';
import SplitPane from 'react-split-pane';
import Name from '../components/name';
import Address from '../components/address';
import Bank from '../components/bank';
import {Nav} from 'react-bootstrap';

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
            }
        }
    };

    onChange = (acc) => {
        this.setState({acc:acc});
    }

    render() {
        return (
            <SplitPane split="horizontal" size="30%">
                <Nav>
                    <NavLink to={`${this.state.match.path}/name`}>Name</NavLink>
                    <NavLink to={`${this.state.match.path}/address`}>Address</NavLink>
                    <NavLink to={`${this.state.match.path}/bank`}>Bank Details</NavLink>
                </Nav>
                <div>
                    <Route exact path={`${this.state.match.path}/name`} render={() => <Name acc={this.state.acc} />} />
                    <Route exact path={`${this.state.match.path}/address`} render={() => <Address acc={this.state.acc} />} />
                    <Route exact path={`${this.state.match.path}/bank`} render={() => <Bank acc={this.state.acc} />} />
                </div>
            </SplitPane>
        );
    }
}
export default Account;