import React, { Component } from "react";


class HeaderForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
    }
  }

  handleSubmitHeader = (e) => {
    e.preventDefault();
    console.log('Hewader form submitted succesfully.');
  }

  handleChange = (e) => {
    console.log(`Changing: ${e.target.name}`);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    
    const {name, description} = this.state;

    return (
      <div className="p-4 header-form-info">
        <h2 className="text-2xl">Header info</h2>
        <form onSubmit={this.handleSubmitHeader}>
          <div className="form-element">
            <label htmlFor="name">
              Name
            </label>
            <input type="text" name="name" id="name" className="block w-full" value={name} onChange={this.handleChange}/>
          </div>
          <div className="form-element">
            <label htmlFor="description">
              Description:
            </label>
            <textarea name="description" id="description" className="block w-full" value={description} onChange={this.handleChange}>
            </textarea>
          </div>
          <div className="form-element">
            <button type="submit" className="form-btn">Update Header</button>
          </div>
        </form>
      </div>
    )
  }
}

export default HeaderForm