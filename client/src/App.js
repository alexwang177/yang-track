import React, {Component} from 'react'
import './App.css';
import Title from './components/Title';
import WordForm from './components/WordForm';
import OAuth from 'oauth';

const url = 'https://api.twitter.com/1.1/search/tweets.json';
const API_KEY = 'xFUQcmUlDuf7S3dWflFs4ZXvc';
const API_SECRET = '7lb6EMeGOkHPr4bKEFThb38903BbZmfrnJPtgjWKj0zm4E2f3u';
const ACCESS_TOKEN = '2557605158-UhRurcnRflE7mWH0NsSchhbDZM50PWIulvLdw7b';
const ACCESS_SECRET = 'VZr0tZuG2zlbGsXnGI8LvXj89eF6HOsicsSQ2JFxwimJg';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { apiReponse: ""};
  }

  getTweets = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/twitter")
    .then(res => res.text())
    .then(data => {
      this.setState({ apiResponse: data })
      console.log(data);
    });

    console.log("Fetch");
  }

  /*componentDidMount() {
    this.getTweets();
  }*/

  render(){
    return (
      <div className="App">
        <Title></Title>
        <WordForm getTweets={this.getTweets}></WordForm>
        <p className='tweetList'>{this.state.apiReponse}</p>
      </div>
    )
  }
}

export default App;
