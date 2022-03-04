import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
        name: '',
        email: '',
        cpf: '',
        adress: '',
        city: '',
        state: '',
        home: '',
    }
}
  render() {
    return (
      <Form />
    );
  }
}

export default App;
