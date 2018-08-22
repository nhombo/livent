import React, { Component } from "react";
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import {Button} from 'semantic-ui-react';

const mapState = (state) => {
  return ({
    data: state.test.data
  })
}

const actions  = {
  incrementCounter,
  decrementCounter
}

class Composantry extends Component {
  render() {
   const {incrementCounter, decrementCounter, data} = this.props; 
    return (
      <div>
        <h1>Réponse: {data}</h1>
      <Button onClick={incrementCounter} color="green" content="Increment" />
      <Button onClick={decrementCounter} color="red" content="Decrement" />
      </div>
    );
  }
}

export default connect(mapState, actions)(Composantry);
