import React from 'react';
import SplitPane from 'react-split-pane';
import {Container} from 'react-bootstrap';

class Parameter extends React.Component{
    constructor(props){
        super(props);
        this.state = {id: props.id};
    }

    render(){
        return(
            <SplitPane split="horizontal" size="5%">
            Parameter
                <Container>bottom</Container>
            </SplitPane>

        );
    }
}
export default Parameter;