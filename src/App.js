import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddressForm from './AddressForm.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      groups: [],
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  async componentDidMount() {
    const response = await fetch('/user-profiles');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }

  handleSubmit(event) {
    const {name} = this.state;
    fetch('/user-profiles', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name})
  }).then(function(response) {
    return response.json();
  }).catch((error) => {
    console.log(error);
  });
  }

  render() {
    const {groups, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      
      <div className="App">
        <AddressForm />
{/*         
        <header className="App-header">

          <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand">Navbar</a>
          
          </nav>  
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Lista de usuários</h2>
              
            
            <ul class="list-group">
            {groups.map(group =>
              <div key={group.id}>
                <li class="list-group-item list-group-item-primary">{group.name}</li>
              </div>
            )}
            </ul>
            
          </div>
          
          <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      <Button variant="contained" color="primary">
      Olá Mundo
    </Button>   
    
        </header>      */}

      </div>
    );
  }
}

export default App;
