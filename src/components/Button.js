import React, { Component } from 'react'
import './calculator.css'

export default class Button extends Component {
    
    hen = ()=>{
       
        this.props.fun(this.props.title)
    }

    render() {
        
        return (
            <div >
                <div className="button" style={{backgroundColor: this.props.color, color:this.props.fcolor}} >
                    <input 
                        type="submit" 
                        value={this.props.title}
                        onClick={this.hen} 
                    />
                </div>
                
            </div>
        )
    }
}
