import React, { Component } from 'react'
import './calculator.css'
import Buttons from './Buttons'
import Screen from './Screen'

export default class Calcultor extends Component {
    render() {
        return (
            <div style={{backgroundColor:'grey', padding:5, boxShadow:10}}>
                <div className="wrapper">
                    <Screen />
                    <Buttons />
                </div>
            </div>
            
        )
    }
}
