import React,{Component} from 'react';
import ReactDOM from 'react-dom';

function HelloComponent(props)
{
    return(
        <div class='maindiv_style'>
        <h1>This is Component {props.componentId} added by {props.userName} having RollNo {props.rollNo}</h1>
        </div>

    )
}


{/*
const HelloComponent = (props) => {
    return <div className="maindiv_style" >        
    <h1>Hello {props.userName} </h1>
    <p>This is 2nd line in component</p>
    </div>
*/}

/*
class HelloComponent extends Component{

    render()
    {
        return <div className="maindiv_style" >        
        <h1>Hello {this.props.userName} </h1>
        <p>This is 2nd line in component</p>
        </div>
    }
}
*/
export default HelloComponent;