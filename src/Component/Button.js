import { Component } from "react";

class Button extends Component{
    render(props){
        const newClass = `btn btn-${this.props.color}`
        return(
            <div>
                <button className={newClass}>Click Me</button>
            </div>
        )
    }
}

export default Button;