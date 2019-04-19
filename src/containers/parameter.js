import React from 'react';
import SplitPane from 'react-split-pane';

class Parameter extends React.Component{
    constructor(props){
        super(props);
        this.state = {id: props.id};
    }

    render(){
        return(
            <SplitPane split="horizontal" size="30%">
            Parameter
                <div>bottom</div>
            </SplitPane>

        );
    }
}
export default Parameter;