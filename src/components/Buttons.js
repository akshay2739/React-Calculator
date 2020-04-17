import React, { Component } from 'react'
import './calculator.css'
import Numbers from './Numbers'
import Controls from './Controls'

export default class Buttons extends Component {
    
    
    render() {
        
        return (
            <div> 
                <Controls fun={this.props.fun}/>
                <Numbers fun={this.props.fun}/>
                
            </div>
        )
    }
}
