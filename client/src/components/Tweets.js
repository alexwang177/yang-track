import React, { Component } from 'react'

export default class Tweets extends Component {
    render() {
        return (
            <div>
                <ul>
               {
                   this.props.apiResponse.map((t) => {
                       return (
                       <div>
                           <li>{t.text}</li>
                           <li>{t.sentiment.score}</li>
                       </div>)
                   })
               }
               </ul>
            </div>
        )
    }
}