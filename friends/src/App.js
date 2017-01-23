import React from 'react';
import './App.css';
import FriendsList from "./components/FriendsList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>The <strong>facebook</strong> Friend Machine</h1>
        <div className="friends">
          <FriendsList/>
        </div>
      </div>
    );
  }
}

export default App;
