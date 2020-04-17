import React, { Component } from 'react'
import './calculator.css'
import Buttons from './Buttons'
import Screen from './Screen'

export default class Calcultor extends Component {
    
    constructor()
    {
        super()
        this.state = {
            display : '0'
        }
    }
    
    han = (title)=>{
        this.setState({display:this.state.display+title})
        console.log(this.state.display)
    }

    render() {
        return (
            <div style={{backgroundColor:'grey', padding:5, boxShadow:10}}>
                <div className="wrapper">
                    <Screen display={this.state.display}/>
                    <Buttons  fun={this.han}/>
                </div>
            </div>
            
        )
    }
}
