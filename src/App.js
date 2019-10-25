import React from 'react'
import './App.css';
import Title from './components/Title';
import WordForm from './components/WordForm';

const url = 'https://api.twitter.com/1.1/search/tweets.json';
const API_KEY = 'xFUQcmUlDuf7S3dWflFs4ZXvc';
const API_SECRET = '7lb6EMeGOkHPr4bKEFThb38903BbZmfrnJPtgjWKj0zm4E2f3u';
const ACCESS_TOKEN = '2557605158-UhRurcnRflE7mWH0NsSchhbDZM50PWIulvLdw7b';
const ACCESS_SECRET = 'VZr0tZuG2zlbGsXnGI8LvXj89eF6HOsicsSQ2JFxwimJg';

class App {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    fetch(`https://api.twitter.com/1.1/search/tweets.json?q=from%3Atwitterdev&result_type=mixed&count=2`, 
    {
      method: 'GET', 
      headers: {
        Authorization: OAuth,
        oauth_consumer_key:API_KEY, 
        oauth_nonce:"generated-nonce", 
        oauth_signature:"generated-signature", 
        oauth_signature_method:"HMAC-SHA1", 
        oauth_timestamp:"generated-timestamp", 
        oauth_token:ACCESS_TOKEN, 
        oauth_version:"1.0"
      }
    }
  ).then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
}

  render(){
    return (
      <div className="App">
        <Title></Title>
        <WordForm></WordForm>
      </div>
    );
  }
}

export default App;
