import React, { Component } from 'react'
import './calculator.css'

export default class Button extends Component {
    
    render() {
        
        return (
            <div >
                <div className="button" style={{backgroundColor: this.props.color, color:this.props.fcolor}} >
                    <input 
                        type="button" 
                        value={this.props.title}
                        onClick={()=>this.props.fun2} 
                    />
                </div>
                
            </div>
        )
    }
}
