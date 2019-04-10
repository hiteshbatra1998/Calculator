import React from 'react';

class Result extends React.Component{
    render(props){
        console.log(this.props.exp);
        return(<div>{this.props.exp.join('')}
                <br></br>
                {this.props.ans}
            </div>);
    }
}
export default Result;
