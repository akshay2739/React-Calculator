import React, { Component } from 'react'
import './calculator.css'
import Button from './Button'

export default class Controls extends Component {
    render() {
        return (
            <div>
                <div className="grid-container" >
                    <Button title="AC" color='#a4a5a5' />
                    <Button title="DEL"  color='#a4a5a5'  />
                    <Button title="%"  color='#a4a5a5'/>
                    <Button title="+/-"  color='#a4a5a5' />
                </div>
            </div>
        )
    }
}
