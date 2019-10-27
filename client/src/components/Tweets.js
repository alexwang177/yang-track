import React, { Component } from 'react'

export default class Tweets extends Component {
    render() {
        return (
            <div>
                <ul>
               {
                   this.props.apiResponse.map((t) => {
                       return <li>{t.text}</li>
                   })
               }
               </ul>
            </div>
        )
    }
}