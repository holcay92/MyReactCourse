import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import WelcomeMessage from './components/WelcomeMessage';

class App extends Component {
  render(){
  
      return (
        <div className="App">
          <Greet name="halil" heroName="Batman">
            <p>This is children props</p>
          </Greet>

          <Greet name="olcay" heroName="Superman">
            <button>Action</button>
          </Greet>

         <Greet name="setur"  heroName="Shrek"/>
         <Welcome name="halil" heroName="Batman"/>
         <Welcome name="olcay" heroName="Superman"/>
         <Welcome name="seturbt" heroName="Spiderman"/>
         <Message name="halil" heroName="flyingSpur"/>
         <Hello/>
         <WelcomeMessage/>
         
        </div>
      );
  }
}

export default App;
