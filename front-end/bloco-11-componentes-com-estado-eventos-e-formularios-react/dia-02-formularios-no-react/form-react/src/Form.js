import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      competencia: '',
      sobreVoce: '',
      comparecer: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name] : value
    });
  }

  render() {
    return (
      <div>
        <h1>Forms em React :)</h1>
        <form className="form">
            <label>
                Email 
                <input
                type="email"
                name="email" 
                value={this.state.email} 
                onChange={this.handleChange}>
                </input>
            </label>
            <label>
                Senha 
                <input type="password" name="senha"></input>
            </label>
            <label>
                Competencia
                <select name="competencia" value={this.state.competencia} onChange={this.handleChange}>
                    <option>Designer</option>
                    <option>Front-End</option>
                    <option>Back-End</option>
                    <option>FullStack</option>
                </select>
            </label>
            <label>
                Sobre você
                <textarea
                maxLength={250}
                name="sobreVoce"
                value={this.state.sobreVoce}
                onChange={this.handleChange}>
                </textarea>
            </label>
            <label>
                Comparecer
                <input
                type="checkbox"
                name="comparecer"
                value={this.state.comparecer}
                onChange={this.handleChange}>
                </input>
            </label>
        </form>
      </div>
    );
  }
}

export default Form;