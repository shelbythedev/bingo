import React, { Component } from 'react';
import './App.css';

import { start } from "./Confetti";

let data = [
  'Crown Royal bag',
  'Danny Brown smells weed',
  'No shirt',
  'Hooptie',
  'Dan`s got jokes',
  'License plate lights out',
  'K9',
  'At gunpoint',
  'Car pursuit',
  'Foot pursuit',
  'Taser deployed',
  'Not my pants',
  'Not my weed',
  'Not my car',
  'Suspended license',
  'Sovereign Citizen',
  'Living in a car',
  '"Couple of (2) beers"',
  'Dan says, "What`s going on in...',
  '"I see lights flashing"',
  'Spikes deployed',
  'Sticks talks about Tulsa',
  'Tail light touch',
  'Request backup',
  '"Step it up"',
  'Missed a court date',
  'Domestic disturbance',
  'Gun found',
  'Narcotics found',
  'Cell phone camera',
  'TV shoutout',
  '"Don`t film me"/No cameras',
  'Off-road vehicle',
  'Trespassed',
  'A puppy!',
  'Obama Mart',
  'Florida Man',
  'Octogenarian',
  'No insurance',
  'No license',
  'Warrants',
  'Underwear',
  '"I didn`t do anything!"',
  'Tail light out',
  'Hoarder',
  'Fentanyl',
  'Trafficking',
  'Consent to search',
  'Dan: "We`ll keep an eye on that..."',
  '"Civil matter"',
  'Disgruntled neighbors',
  'Intoxicated',
  'Crowd scatters',
  'Stolen car',
  'Hoodie',
  'Wreck',
  '"Few minutes out"',
  '"Got something here"',
  '"Let`s get in a break"',
  'Bicycle',
  'Crying',
  'Handcuffed',
  'Reading rights (Miranda)',
  'Standoff',
  'Say no to [butt]crack',
  'Resisting arrest',
  'Uncooperative',
  'Unresponsive',
  'Evidence thrown out window',
  'Felony stop',
  'No ID',
  '"Don`t reach"/"Quit reaching"',
  'Knife found',
  'Officer Sarcasm arrives',
  'Not my drugs',
  '"Anything to drink tonight?"',
  'Field sobriety test',
  '"Show [me/us] your hands"',
  '"Get on the ground"',
  'Narcan',
  'Chopper',
  'Open container',
  'Juvenile(s)',
  'Socks & slides',
  'Making entry',
  '"We don`t catch the smart ones"',
  'That one full house in Beech Grove',
  'DUI/DWI/OWI/OVI',
  'Intoxicated',
  'Paraphernalia'
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
    return <div className="square clickable" key={this.props.index} isSet={!!this.state.checked[id]} onToggle={() => this.toggle(id)}>
              <span className={"squareText " + (this.state.checked ? 'red':'')}>{this.props.item}</span>
              <span className={this.state.checked ? 'checked':''}></span>
            </div>
  }
}

export default App;
