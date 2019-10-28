import React, { Component } from 'react'
import Emoji from './Emoji'

export default class Tweets extends Component {
    //t.sentiment.score
    getEmoji = (sentimentScore) => {
        let emoji = "🐑";

        if(sentimentScore > 2)
            emoji = "😁";
        else if(sentimentScore === 1 || sentimentScore === 2)
            emoji = "🙂";
        else if(sentimentScore === 0)
            emoji = "😐";
        else if(sentimentScore === -1 || sentimentScore === -2)
            emoji = "🙁";
        else if(sentimentScore < -2)
            emoji = "😡";

        return emoji;
    }

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
                            <Emoji symbol={this.getEmoji(t.sentiment.score)}/>
                           </li>
                       </div>)
                   })
               }
               </ul>
            </div>
        )
    }
}