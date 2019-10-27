import React, { Component } from 'react'

export default class Tweets extends Component {
    render() {
        return (
            <div>
                <ul>
               {
                   this.props.apiResponse.map((t) => {
                       return (
                       <div key={t.id}>
                           <li>
                            <p>{t.text}</p>
                            <p>{t.sentiment.score}</p>
                           </li>
                       </div>)
                   })
               }
               </ul>
            </div>
        )
    }
}