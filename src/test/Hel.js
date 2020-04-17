import React, { Component } from 'react'

export default class Hel extends Component {
    render() {
        return (
            <div>
                <p>HEllo</p>
                <input 
                type="submit" 
                onClick={this.props.fun}
                value="name" 
                style={{backgroundColor:'black'}} />
            </div>
        )
    }
}
