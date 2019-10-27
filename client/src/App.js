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

    fetch("http://localhost:5000/api/twitter", {
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

  render(){
    const options = {
      title: {
        text: "Yang Sentiment For Keyword: " + this.state.queryPhrase
      },
      data: [{				
                type: "pie",
                dataPoints: [
                    { label: "Strongly Positive",  y: 10  },
                    { label: "Positive", y: 15  },
                    { label: "Neutral", y: 25  },
                    { label: "Negative",  y: 30  },
                    { label: "Strongly Negative",  y: 28  }
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
