import React, { Component } from 'react'
import './calculator.css'
import Buttons from './Buttons'
import Screen from './Screen'

export default class Calcultor extends Component {
    
    constructor()
    {
        super()
        this.state = {
            display : '',
            answer: '',
            enable:true
        }
    }
    
    
    han = (title)=>{
       if(title==='=')
       {
        this.setState({display:''})
        this.setState({answer:eval(this.state.display)})
       }
       else  if(title==='AC'){
        this.setState({display:''})
        this.setState({answer:''})
       }
       else if(title==='DEL')
       {
           this.setState({display:this.state.display.substring(0,this.state.display.length-1)})
       }
       else{
        this.setState({display:this.state.display+title})
        this.setState({answer:0})
       }
        
    }
   
    render() {
        return (
            <div style={{backgroundColor:'grey', padding:5, boxShadow:10}}>
                <div className="wrapper">
                    <Screen display={this.state.display} answer={this.state.answer}/>
                    <Buttons  
                        fun={this.han} 
                        display={this.state.display} 
                        answer={this.state.display}   
                    />
                </div>
            </div>
            
        )
    }
}
