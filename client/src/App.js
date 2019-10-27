import React, {Component} from 'react'
import './App.css';
import Title from './components/Title';
import WordForm from './components/WordForm';
import Tweets from './components/Tweets';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      apiResponse: [],
      queryPhrase: ""
    };
  }

  updateQuery = (keyword) => {
    this.setState({queryPhrase: keyword});
  }

  searchTweets = (e) => {
    e.preventDefault();
    this.getTweets();
  }

  getTweets = () => {

    console.log('Query: ' + this.state.queryPhrase);

    fetch("/api/twitter", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      },
      body: JSON.stringify({
        query: this.state.queryPhrase
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ apiResponse: data.payLoad})
      console.log(this.state.apiResponse);
    })
    .catch(err => console.log(err));
  }

  averageSentiment = (dataSet) => {
    let sp = 0;
    let p = 0;
    let neutral = 0;
    let n = 0;
    let sn = 0;

    dataSet.forEach((tweet) => {
      if(tweet.sentiment.score > 2)
        sp++;
      else if(tweet.sentiment.score == 1 || tweet.sentiment.score == 2)
        p++;
      else if(tweet.sentiment.score == 0)
        neutral++;
      else if(tweet.sentiment.score == -1 || tweet.sentiment.score == -2)
        n++;
      else if(tweet.sentiment.score < -2)
        sn++;
    })
    
    return [sp, p, neutral, n ,sn];
  }

  render(){
    let arrSentiments = this.averageSentiment(this.state.apiResponse)

    console.log(arrSentiments);
  
    const options = {
      title: {
        text: "Yang Sentiment For Keyword: " + this.state.queryPhrase
      },
      data: [{				
                type: "pie",
                dataPoints: [
                    { label: "Strongly Positive",  y: arrSentiments[0]  },
                    { label: "Positive", y: arrSentiments[1]  },
                    { label: "Neutral", y: arrSentiments[2]  },
                    { label: "Negative",  y: arrSentiments[3]  },
                    { label: "Strongly Negative",  y: arrSentiments[4]  }
                ]
       }]
    }

    return (
      <div className="App">
        <Title></Title>
        <WordForm searchTweets={this.searchTweets} updateQuery={this.updateQuery}></WordForm>
        <CanvasJSChart options = {options}/>
        <Tweets apiResponse={this.state.apiResponse}></Tweets>
      </div>
    )
  }
}

export default App;
