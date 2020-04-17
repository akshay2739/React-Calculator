import React, { Component } from 'react'
import './calculator.css'

export default class Screen extends Component {
    render() {
        return (
            <div>
                <div className="screen">
                    <p>{this.props.display}</p>
                    <h1>{this.props.answer}</h1>
                </div>
            </div>
        )
    }
}
