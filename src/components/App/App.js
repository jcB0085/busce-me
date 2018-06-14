import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import ParticlesConf from '../Configs/ParticlesConf';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // componentDidMount() {
  //   fetch('http://localhost:5000')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions;
    const image = document.querySelector('#input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    const boxes = clarifaiFace.map(region => ({
      leftCol: region.region_info.bounding_box.left_col * width,
      topRow: region.region_info.bounding_box.top_row * height,
      rightCol: width - region.region_info.bounding_box.right_col * width,
      bottomRow: height - region.region_info.bounding_box.bottom_row * height
    }));
    return boxes;
  };

  boxFaces = box => {
    this.setState({box});
  };

  onInputChange = e => {
    this.setState({input: e.target.value});
  };
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch(`http://localhost:5000/imageurl`, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          fetch(`http://localhost:5000/profiles/${this.state.user.id}`, {
            method: 'put',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(res => res.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}));
            })
            .catch(err => console.log('There was an error Buscemizing...'));
        }
        this.boxFaces(this.calculateFaceLocation(res));
      })
      .catch(err => console.log(err));
  };

  onRouteChange = newRoute => {
    if (newRoute === 'signin') {
      this.setState(initialState);
    } else if (newRoute === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: newRoute});
  };

  render() {
    const {isSignedIn, box, route, imageUrl} = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesConf} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === 'signin' ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
