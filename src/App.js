import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentInput from "./components/comment/CommentInput";

class App extends Component {
    state={
        rank:1
    }

    componentDidMount(){
        console.log("组件已经创建...");
        window.setInterval(()=>{
            this.setState({
                rank:this.state.rank + 1
            });
        },5*1000);
    }

  render() {
    return (
      <div className="App">
        <CommentInput value={this.state.rank}/>
      </div>
    );
  }
}

export default App;
