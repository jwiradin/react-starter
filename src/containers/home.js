import React from 'react';
import SplitPane from 'react-split-pane';
import {Container} from 'react-bootstrap';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {id: props.id};
    }

    render(){
        return(
            <SplitPane split="horizontal" size="5%">
                Top
                <Container>bottom</Container>
            </SplitPane>
        );
    }
}
export default Home;