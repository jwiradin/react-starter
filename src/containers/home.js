import React from 'react';
import SplitPane from 'react-split-pane';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {id: props.id};
    }

    render(){
        return(
            <SplitPane split="horizontal" size="30%">
                Top
                <div>bottom</div>
            </SplitPane>
        );
    }
}
export default Home;