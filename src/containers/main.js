import React from 'react';
import SplitPane from 'react-split-pane';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Account from './account';
import Parameter from './parameter';
import Home from './home';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id };
    }

    render() {
        return (
            <Router>
                <SplitPane split="vertical" size="30%">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/account">Account</Link>
                        </li>
                        <li>
                            <Link to="/parameter">Parameter</Link>
                        </li>
                    </ul>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/account" component={Account} />
                        <Route path="/parameter" component={Parameter} />
                    </div>
                </SplitPane>
            </Router>
        );
    }
}
export default Main;