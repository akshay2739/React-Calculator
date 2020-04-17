import React, { Component } from 'react'
import Hel from './Hel'

export default class Wor extends Component {
    
    han = ()=>{
        console.log('hello')
    }
    
    render() {
        return (
            <div>
                <Hel fun={this.han}/>
            </div>
        )
    }
}
