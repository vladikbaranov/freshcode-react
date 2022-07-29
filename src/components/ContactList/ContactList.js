import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

export class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        {this.props.contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteContact={this.props.onDeleteContact}
              onEditContact={this.props.onEditContact}
            />
          );
        })}
        <button id='new' className="btn-new" onClick={this.props.onAddNewContact}>
          New
        </button>
      </div>
    );
  }
}

export default ContactList;
