import React, { Component } from 'react'
import './calculator.css'
import Button from './Button'


export default class Numbers extends Component {

   

    render() {
        return (
            
            <div className="numbers">
                <div className="grid-container">
                    <Button title="7" color="#404040" fun={this.props.fun} />
                    <Button title="8" color="#404040" fun={this.props.fun} />
                    <Button title="9" color="#404040"fun={this.props.fun} />
                    <Button title="*" color='#a4a5a5' fcolor='black' fun={this.props.fun} />
                    <Button title="4" color="#404040" fun={this.props.fun} />
                    <Button title="5" color="#404040" fun={this.props.fun} />
                    <Button title="6" color="#404040" fun={this.props.fun} />
                    <Button title="-" color='#a4a5a5'fcolor='black' fun={this.props.fun} />
                    <Button title="1" color="#404040" fun={this.props.fun} />
                    <Button title="2" color="#404040" fun={this.props.fun}/>
                    <Button title="3" color="#404040" fun={this.props.fun}/>
                    <Button title="+"  color='#a4a5a5'fcolor='black' fun={this.props.fun}/>
                    <Button title="0" color="#404040" fun={this.props.fun}/>
                    <Button title="." color="#404040" fun={this.props.fun}/>
                    <Button title="/" color="#404040" fun={this.props.fun}/>
                    <Button title="="  color='#a4a5a5'fcolor='black' fun={this.props.fun}/>   
                </div>
            </div>
        )
    }
}
