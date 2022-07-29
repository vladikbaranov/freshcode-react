import React, { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    ...this.props.contactForEdit,
  };

  createEmptyContact() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onClearField = (event) => {
    const sibling = event.target.parentNode.firstChild;
    this.setState({
      [sibling.name]: '',
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      ...this.state,
    });
    this.setState({
      ...this.createEmptyContact(),
    });
  };

  onContactDelete = () => {
    this.props.onDelete(this.props.contactForEdit.id);
    this.setState({
      ...this.createEmptyContact(),
    });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.onFormSubmit}>
        <div className="input-wrap">
          <input
            type="text"
            placeholder="FirstName"
            value={this.state.firstName}
            name="firstName"
            onChange={this.onInputChange}
          />
          <span className="btn-clear" onClick={this.onClearField}>
            X
          </span>
        </div>
        <div className="input-wrap">
        <input
            type="text"
            placeholder="LastName"
            value={this.state.lastName}
            name="lastName"
            onChange={this.onInputChange}
          />
          <span className="btn-clear" onClick={this.onClearField}>
            X
          </span>
        </div>
        <div className="input-wrap">
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.onInputChange}
          />
          <span className="btn-clear" onClick={this.onClearField}>
            X
          </span>
        </div>
        <div className="input-wrap">
          <input
            type="tel"
            placeholder="Phone"
            value={this.state.phone}
            name="phone"
            onChange={this.onInputChange}
          />
          <span className="btn-clear" onClick={this.onClearField}>
            X
          </span>
        </div>

        <button className="btn-form" type="submit">
          Save
        </button>

        {this.state.id ? (
          <button className="btn-form" id="delete" type="button" onClick={this.onContactDelete}>
            Delete
          </button>
        ) : (
          ''
        )}
      </form>
    );
  }
}

export default ContactForm;
