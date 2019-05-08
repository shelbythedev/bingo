import React, { Component } from 'react';
import './App.css';

let data = [
  '"Corpus"',
  '"Value Prop"',
  '"Delta"',
  'Forgets to speak English',
  'Calls someone wrong name',
  'Removes glasses and glares',
  '"Intent of User"',
  'Talks about Canada',
  'Talks about France',
  'Stereotypical French Joke',
  'Star Trek reference',
  'Lotus',
  'Fencing',
  '"S O W"',
  '"Iterative Process"',
  'IBM',
  'Mentions a former employee',
  '"Workshop"',
  'Political opinion',
  'Asks where someone is',
  'Curses',
  'Is late',
  'Goes off topic',
  "Mentions person/project we've never heard of",
  'Talks about how busy he is',
  '"Freaking"',
  '"I twirl my moustache"',
  '"Low-Hanging Fruit"',
  'Watson',
  '"Proof of Concept"',
  '"Predictive Model"',
  '"Consistency is the crutch of the invalid mind"',
  'Mentions Thierry Bingo',
  '"Price Waterhouse"',
  'Makes arbitrary deadline',
  'Kaycee has to correct him',
  'Some conference, summit, or forum event',
  "Difference between [x] and Texas and/or Dallas",
  'Apologizes for being late',
  '"Hey guys"',
  'Mentions flying somewhere',
  'Violates meeting time constraint',
  '"Yuge"',
  '"Prescriptive"',
  'Happy Happy Joy Joy',
  'Boom Boom',
  "Forgets someone's name",
  "Announces that he's French",
  'Whiteboard',
  '"Cashectomy"',
  'Mentions former project/client',
  '"Machine Learning"',
  'CNN',
  'Asks Kaycee for clarification',
  'Toronto',
  'Montreal',
  'Explains why someone is wrong',
  'Convolutional not Convoluted',
  '"Best Practices"',
  'Mentions something he has no plans on committing to',
  'Team Lunch',
  'Talks about an interview',
  'Story with mild relevance',
  'Announces that Cassie is out of town',
  'Bio Break',
  '"Good things are happening"',
]

let shuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  array = array.slice(0, 24);
  array.splice(12, 0, 'FREE!')
  return array
}

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <Card data={shuffleArray(data)} />
        </div>
      </div>
    );
  }
}


class Card extends App {
  render(){
    let items = this.props.data.map((item, index) => {
      return <Item item={item} key={index} />
    })

    return (
      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8 offset-md-2 offset-lg-2">
          <div className="squareGrid">
            {items}
          </div>
        </div>
      </div>
    )
  }
}

class Item extends Card {
  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }

  checkItem(){
    console.log('fired')
    return this.setState(prevState => ({checked: !prevState.checked}))
  }

  render(){
    return <div className="square clickable" key={this.props.index} onClick={() => {this.checkItem()}}>
              <span className={"squareText " + (this.state.checked ? 'red':'')}>{this.props.item}</span>
              <span className={this.state.checked ? 'checked':''}></span>
            </div>
  }
}

export default App;
