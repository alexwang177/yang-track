import React, { Component } from 'react'

export default class Tweets extends Component {
    render() {
        return (
            <div>
               <p>{this.props.apiResponse}</p>
            </div>
        )
    }
}