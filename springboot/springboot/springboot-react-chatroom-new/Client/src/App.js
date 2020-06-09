import React, { Component } from 'react';
import ChatMessageBox from './ChatMessageBox/ChatMessageBox'
// Re-using my ErrorBoundary Component 
import ErrorBoundary from 'react-error-boundary';


class App extends Component {
  refreshPage(){
    window.location.reload();
  }

  render() {
    return (
        <ChatMessageBox />
    );
  }
}

export default App;
