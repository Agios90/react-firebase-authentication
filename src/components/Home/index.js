import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

class HomePage extends Component {

  render() {

      const enterGame = () => {
          var frame = document.getElementById("startframe");
          const token = document.getElementById("token").value;
          frame.src = "http://chess.mdnbar.com/#/"+token;
  }

    return (
      <div>
        <h1>Home</h1>
        <p>Create a new game using the button below, or enter a game token to enter an existing game.</p>
              Enter game code here:  &nbsp;
              <input id="token" type="text"></input>
              <button onClick={enterGame}>Submit</button>
          <div id="framediv">
            <iframe id="startframe" src="http://chess.mdnbar.com/#/" height="500" width="700" style={{"border":"none"}}></iframe>
         </div>

      </div>
    );
  }



}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);