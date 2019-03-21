import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const ParticlesOptions = {
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value: 800
        }
      }
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
}

  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={ParticlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
       <ImageLinkForm onInputChange={ this.onInputChange} onButtonSubmit= { this.onButtonSubmit } />
      { /*   <FaceRecogination /> */}
      </div>
    );
  }
}

export default App;
